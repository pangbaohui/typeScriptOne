//ES5定义函数
function add1(arg1:number,arg2:number):number {
    return arg1+arg2
}
//ES6定义函数
const add2 = (arg1:number,arg2:number)=>arg1+arg2
// TS
//第一步先定义一个函数类型
let add3:(x:number,y:number)=>number
//函数的第一个和第二个数是number，返回的类型也是number类型
//第二步定义方法继承方法的类型
add3 = (arg1:number,arg2:number):number=>arg1+arg2

type Add =(x:number,y:number)=>number
type isString = string
let addFunc:Add
addFunc= (arg1:number,arg2:number)=>arg1+arg2
//可选参数
type AddFunction = (arg1:number,arg2:number,arg3?:number)=>number
type AddFunctions = (arg1:number,arg2:number,arg3?:number)=>number
//默认参数
//ES5
// var addFunctions = function(x,y){
//     y = y || 0 ;
//     return x+y
// }
let AddFunction = (x:number,y=3)=>x+y;
console.log(AddFunction(2));
console.log(AddFunction(2,6));

//剩余参数
//ES5 写法
// function handleData() {
//     //arguments是类数组对象 arguments.length表示调用该函数实际参数的个数
//     if(arguments.length === 1) return arguments[0] * 2
//     else if(arguments.length === 2 )return arguments[0]*arguments[1]
//     else return Array.prototype.slice.apply(arguments).join('-')
// }
// handleData(1)    // 2
// handleData(2,3)  // 6
// handleData(2,3,4,9)  // "2-3-4-9"

//ES6 写法
// const handleData=(...args)=>{
//     console.log(args)
// }
// handleData(1)//  [1]
// handleData(2,3,4,9)//  [2, 3, 4, 9]
// handleData(2,3)// [2, 3]

//TS  函数的重载
function handleData(x:string):string[] //函数重载 只能用function定义
function handleData(x:number):number[] //函数重载
function handleData(x:any):any{ //函数实体
    if(typeof x==='string'){
        return x.split('')
    }else {
        // @ts-ignore
        return x.toString().split('').map((item)=>Number(item))
    }
}

// console.log(handleData('abc'));//["a", "b", "c"]
// console.log(handleData(123));//[1, 2, 3]
// handleData('abc').map((item)=>{
//     return item.toFixed();
// })
// handleData('abc').map((item)=>{
//     return item.length;
// })

