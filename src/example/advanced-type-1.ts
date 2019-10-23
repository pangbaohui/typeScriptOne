//交叉类型 T&U===》与
const mergeFunc = <T, U>(arg1:T,arg2:U):T & U =>{
    // let res = <T & U>{}
    let res = {} as T & U
    res = Object.assign(arg1,arg2)
    return res
}
let p = mergeFunc({a:'a'},{b:'b'})
// console.log(p)

//联合类型 ===》或
const getLengthFunc = (content:string | number):number=>{
    if(typeof content === 'string'){ return content.length}
    else {
        return content.toString().length
    }
}

// console.log(getLengthFunc('hdbsfss'))
// console.log(getLengthFunc(55332222222222222222))

const valueList = [123,'abc']
const getRandomValue = () =>{
    const number = Math.ceil(Math.random()*10)
    console.log(number)
    if(number < 5){return valueList[0]}
    else {return valueList[1]}
}
const item = getRandomValue()
// console.log(item)
// if((item as string).length){
//     console.log((item as string).length)
// }else {
//     console.log((item as number).toFixed())
// }

// typeof类型保护
function isString(value:number|string):value is string {
    return typeof value === 'string'
}
//相较于以上只需要判断一次
// if(isString(item)){
//     console.log(item.length)
// }else {
//     console.log(item.toFixed())
// }
//比较复杂的要用以上的函数判断若是比较简单的可以用以下的函数去判断
//类型抱回的typeof判断只有 string、number、boolean、symbol
if(typeof item === 'string'){
    console.log(item.length)
}else {
    console.log(item.toFixed())
}

//instanceof 类型保护
class CreatedByClass1 {
    public age = 18
    constructor(){}
}
class CreatedByClass2 {
    public name = 'pbh'
    constructor(){}
}
function getRandomItem() {
    return Math.random()<0.5?new CreatedByClass1():new CreatedByClass2()
}
const item1 = getRandomItem()
if(item1 instanceof CreatedByClass1){
    console.log(item1.age)
}else {
    console.log(item1.name)
}

// null/undefined
let values = '789'//相当于 let values：string|undefined = '789'
const sumFunc = (x:number,y?:number) => {
    return x+(y||0)
}

const getLengthFunction = (value:string|null):number =>{
    // if (value === null){return 0}
    // else {return value.length}
    //以下是精简
    return (value || '').length//假如是turn就是value否则返回flase
}

// 类型断言
function getSplicedStr(num:number|null):string {
    function getRes(prefix:string) {
        return prefix + num!.toFixed().toString()//因为num有可能是null所以在num后面加！表示其不为null的时候
    }
    num = num||0.1
    return getRes('pbh-')
}
console.log(getSplicedStr(2.1))//pbh-2


//类型别名
type TypeString = string
let str2:TypeString
type PositionType<T> = {x:T,y:T}
const position1:PositionType<number> = {
    x:1,
    y:-1
}
const position2:PositionType<string> = {
    x:'left',
    y:'top'
}
type Childs<T> = {
    current:T,
    child?:Childs<T>,
}
//只能在对象属性中才能用类型别名自己  多层嵌套
// let ccc:Childs<string> = {
//     current:'first',
//     child:{
//         current:'second',
//         child:{
//             current:'third',
//         }
//     }
// }
//若要这样子使用是不对的
// type Childs = Childs[]//error

type Alias = {
    num:number,
}
interface Interface {
    num:number
}
let _alias:Alias = {
    num:123
}
let _interface:Interface = {
    num:321
}

_alias = _interface

//字面量类型
//字符串字面量
type Name = 'pbh'
// const name1:Name='pbh'
type Direction  = 'north'|'east'|'south'|'west'
function getDirectionFirstLetter(direction:Direction) {
    return direction.substr(0,1)
}
console.log(getDirectionFirstLetter('north'))

//数字字面量
type Age = 18
interface InfoInterfaces {
    name: string
    age:Age
}
const _info:InfoInterfaces = {
    name:'pbh',
    age:18
}


/**
 *可辨识联合两要素
 * 1.具有普通的单例类型属性  以下例子的kind作为属性标记
 * 2.一个类型别名包含了哪些类型的联合  以下Shape = Square | Rectangle | Circle   shape包含三个类型联合
 * es7:幂运算符  **
 **/

interface Square {
    kind:'square'
    size:number
}
interface Rectangle {
    kind:'rectangle'
    height:number
    width:number
}
interface Circle {
    kind:'circle'
    radius:number
}
type Shape = Square | Rectangle | Circle
function assertNever(value:never) {
    throw new Error ('意想不到的错误：'+value)
}

function getArea(s:Shape):number {
    switch (s.kind) {
        case 'square':return s.size*s.size;break;
        case 'rectangle':return s.height*s.width;break;
        case 'circle':return Math.PI*s.radius**2;break;
        // @ts-ignore
        default:return assertNever(s)
    }
}

//完整性检查
