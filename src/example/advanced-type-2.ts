//this类型
// JS中的this获取全局对象、类实例对象、构建实例等引用
import * as webpack from "webpack";
import Record = webpack.compilation.Record;

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
