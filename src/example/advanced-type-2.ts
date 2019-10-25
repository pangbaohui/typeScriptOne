//this类型
// JS中的this获取全局对象、类实例对象、构建实例等引用
import * as webpack from "webpack";
import Record = webpack.compilation.Record;
import {rejects} from "assert";

class Counter {
    constructor(public count:number = 0){}
    add(value:number){
        this.count += value
        return this
    }
    public subtract(value:number){
        this.count -= value
        return this
    }
}
let counter1 = new Counter(10)
//在每个方法后面return一个实例this就可以实现一个链式调用
console.log(counter1.add(3).subtract(6))

class PowCounter extends Counter{
    constructor(public count:number) {
        super(count);
    }
    public pow(value:number){
        this.count = this.count**value
        return this
    }
}
let powCounter = new PowCounter(2)
console.log(powCounter.pow(4).add(1).subtract(2))

//索引类型
//索引类型查询操作符  keyof
interface InfoInterfaceAdvanced {
    name:string;
    age:number;
}
let infoProp:keyof InfoInterfaceAdvanced
infoProp = 'name'
infoProp = 'age'
// infoProp = 'sex'  //不能将其他类型赋值给  InfoInterfaceAdvanced

function getValue<T,K extends keyof T>(obj:T,names:K[]): Array <T[K]>
{
    return names.map((n) => obj[n])//n代表每一个遍历的属性名
}
const infoObj = {
    name:'pbh',
    age:18
}
const infoValues:Array<string|number>  = getValue(infoObj,['name','age'])
console.log(infoValues)

//[] 索引访问操作符
type NameType = InfoInterfaceAdvanced['name']
function getProperty<T,K extends keyof T>(o:T,name:K) {
    return o[name]
}

interface Objs<T> {
    [K:string]:T
}
let objs1:  Objs<number> = {
    age:18
}

let keys:Objs<number>['name']
interface Type {
    a:never;
    b:never;
    c:string;
    d:number;
    e:undefined;
    f:null;
    g:object;
}
type Test = Type[keyof Type]


//映射类型
interface Info1 {
    age:number;
    name:string;
    sex:string;
}
type ReadonlyType<T> = {     //readonly 只读     Partial可选的把每个属性变成可选的
    readonly [P in keyof T]?:T[P]//类似于把一个对象传进来对这个对象进行遍历     加了一个‘?’后就是可选属性
}
type ReadonlyInfo1 = ReadonlyType<Info1>
let info11:ReadonlyInfo1 = {
    age:18,
    name:'pbh',
    // sex:'woman' //有了以上的“?”就不需要全部定义
}
console.log(info11);

//内置的映射类型  Pick Record
interface Info2 {
    name:string;
    age:number;
    address:string
}
const info5:Info2 = {
    name:'pbh',
    age:18,
    address:'beijing'
}
function pick<T,K extends keyof T>(obj:T,keys:K[]):Pick<T,K> {
    let res:any = {}
    keys.map((key) =>{
        res[key] = obj[key]
    })
    return res
}

const nameAndAddress = pick(info5,['name','address'])//{name: "pbh", address: "beijing"}
console.log(nameAndAddress);

// @ts-ignore
function mapObject<K extends string|number,T,U>(obj: Record<K,T>,f:(x:T)=>U):Record<K,U> {
    let res:any={}
    for(const key in obj){
        res[key] = f(obj[key])
    }
    return res
}
const names = {0:'hello',1:'world',2:'bey'}
// @ts-ignore
const length = mapObject(names,(s)=>s.length)
console.log(length)


//同态：两个相同的代数结构之间的结构保持映射

// readonly     Partial    pick是同态的
//Record    映射出来的属性值是新的与输入的是不同的

//拆包
type Proxy<T> = {
    get():T;
    set(value:T):void;
}
type Proxify<T> = {
    [P in keyof T]:Proxy<T[P]>
}
function proxify<T>(obj:T):Proxify<T>{
    const result = {} as Proxify<T>
    for(const key in obj){
        result[key] = {
            get:()=>obj[key],
            set:(value)=>obj[key] = value
        }
    }
    return result
}
let props = {
    name:'pbh',
    age:18
}
let proxyProps = proxify(props)
console.log(proxyProps)
proxyProps.name.set('pppppp')
console.log(proxyProps.name.get())

function unproxify<T>(t:Proxify<T>):T {
    const result = {} as T
    for(const k in t){
        result[k] = t[k].get()
    }
    return result
}
let originalProps = unproxify(proxyProps)
console.log(originalProps)

//映射类型对number类型和Symbol类型的支持
const stringIndex = 'a'
const numberIndex = 1
const symbolIndex = Symbol()
type Objs2 = {
    [stringIndex]:string,
    [numberIndex]:number,
    [symbolIndex]:symbol,
}
type  keyType = keyof Objs2
type ReadonlyTypes<T> = {
    readonly [P in keyof T]:T[P]
}
let objs3:ReadonlyTypes<Objs2> = {
    a:'a',
    1:11,
    [symbolIndex]:Symbol()
}
// objs3.a='bb'


type MapToPromise<T> = {
    [K in keyof T]:Promise<T[K]>
}
type Tuple = [number,string,boolean]
type promiseTuple = MapToPromise<Tuple>
let tuple1:promiseTuple = [
    new Promise((resolve,reject) => resolve(1)),
    new Promise((resolve,reject) => resolve('a')),
    new Promise((resolve,reject) => resolve(false)),
]


//unknown
//[1]任何类型都可以赋值给unkonown类型
let value1:unknown
value1 = 'ppp'
value1 = 123

//[2]如果没有类型断言或者基于控制留的类型细化时，unknown不可以赋值给其他类型
//此时他智能赋值给unknown和any类型
let value2:unknown
// let value3:string = value2    //不能将unknown类型赋给string
value1 = value2


//[3]如果没有类型断言或者基于控制留的类型细化时,不能在他上面进行任何操作
let value4:unknown
// value4 +=1   //value4是unknown类型不能进行操作


//[4]unknown与任何其他类型组成的交叉类型，最后都等于其他类型   类似于1乘以任何数等于任何数
type type1 = string & unknown  //type1是string类型

//[5]unknown与任何其他类型（除了any是any类型外）组成的联合类型，都等于unknown类型
type type5 = unknown | string //unknown
type type6 = unknown | any  //any
type type7 = number[] |unknown


//[6]never类型是unknown的子类型
type type8 = never extends unknown ?true:false

//[7]keyof unknown 等于类型never
type type9 = keyof unknown //never类型

//[8]只能对unknown进行等或不等操作，不能进行其他操作
// value1 === value2
// value1 !== value2
// value1 += value2   //只能是等或不等的操作不能做别的操作

//[9]unknown 类型的值不能访问他的属性、作为函数调用和作为类创建实例
let value10:unknown
// value10.age  //value10 作为unknown类不能访问他的属性



//[10]使用映射类型时如果遍历的是unknown类型则不会映射任何属性
type Types1<T> = {
    [P in keyof T]:number
}
type type11 = Types1<any> // type11={[x:string]:number}
type type12 = Types1<unknown> // type12={}

//条件类型  T extends U?X:Y
type Types2<T> = T extends string?string:number
let index:Types2<'a'>   // 123   false=>走的是number类型

type TypeName<T> =
    T extends string ? string:
        T extends number ? number:
            T extends boolean ? boolean:
                T extends undefined ? undefined:
                    T extends () =>void ? () =>void:    //function类型
                        object

type Type4 = TypeName<() => void>
type Type5 = TypeName<string[]> //object类型
type Type6 = TypeName<(()=>void)|string[]>//()=>void函数类型或者是object类型

//分布式条件类型   在TS中已经内置
// type Diff<T,U> = T extends U ? never :T
// type Test2 = Diff<string | number | boolean, undefined|number>  //最后取得string|boolean的联合类型


type Type7<T> = {
    [K in keyof T]:T[K] extends (() => void) ? K : never
}[keyof T]  //索引访问类型
//取属性值不为never的属性名

interface Part {
    id:number;
    name:string;
    subparts:Part[];
    undataPart(newName:string):void
}
type Test1 = Type7<Part>   //type Test1 = "undatePart"


//条件类型的类型推断   infer
type Type8<T> = T extends any[]?T[number]:T
type Test3 = Type8<string[]>
type Test4 = Type8<string>

type Type9<T> = T extends Array<infer U>?U:T  //infer U推断数组的变量类型
type Test5 = Type9<string[]> //type Test5 = string
type Test6 = Type9<string>//type Test6 = string  //走后面的条件


//Exclude<T,U>
type Type10 = Exclude<'a'|'b'|'c','a'|'b'>  // type Type10 = 'c' 也就是从前面的类型里边先选出与后边类型不一样的类型

//Extract<T,U>
type Type11 = Extract<'a'|'b'|'c','c'|'b'>// type Type11 = 'b'|'c' //从前面的类型里边选出可以赋值给后边类型的类型

//NonNullable<T>  去点null和undefined
type Type12 = NonNullable<string|number|null|undefined>// type Type12 = string|number

//ReturnType<T>  获取函数类型返回值类型
type Type13 = ReturnType<()=>string> //type Type13 = string
type Type14 = ReturnType<()=>void> //type Type14 = void

//InstanceType<T> 可以获取构造函数类型的实例类型
class Aclass {
    constructor(){}
}
type T1 = InstanceType<typeof Aclass> //type T1 = Aclass
type T2 = InstanceType<any> //type T2 = any
type T3 = InstanceType<never> //type T3 = never
// type T4 = InstanceType<string> //type T4 = never //string不是构造函数类型
