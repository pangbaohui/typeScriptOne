//泛型
// 约束函数的类型
// const getArray = <T>(value:T,times:number = 5):T[]=>{
//     return new Array(times).fill(value)
// }
// console.log(getArray(2,5).map((item)=>item+1));// [3, 3, 3, 3, 3]
// console.log(getArray('asdff',5).map((item)=>item.length));// 每一个字符的长度[5, 5, 5, 5, 5]
// console.log(getArray<number>(123,5).map((item)=>item.toFixed()));// 每一个字符的长度[5, 5, 5, 5, 5]

// const getArray = <T,U>(param1:T,param2:U,times:number):Array<[T,U]>=>{
//     return new Array(times).fill([param1,param2])
// }
// console.log(getArray(1,'a',3))
//也可以不指定函数的类型
// getArray(1,'A',2).forEach((item)=>{
//     console.log(item[0]);
//     console.log(item[1]);
// })


// let getArray:<T>(arg:T,times:number)=>T[];
// getArray = (arg:any,times:number)=>{
//     return new Array(times).fill(arg)
// }

// type GetArray = <T>(arg:T,times:number)=>T[];
//  let getArray:GetArray =(arg:any,times:number)=>{
//     return new Array(times).fill(arg)
// }

// interface GetArray<T> { //也可以把<T>提到最外层
//     // <T>(arg:T,times:number):T[],
//     (arg:T,times:number):T[],
//     array:T[]
// }


//泛型约束
interface ValueWithLength {
    length:number
}
// @ts-ignore
const getArray = <T extends ValueWithLength>(arg:T,times):T[]=>{
    return new Array(times).fill(arg)
}
console.log(getArray([1,2],3));
console.log(getArray('123',3));
console.log(getArray({
    length:2
},3));



// @ts-ignore
// const getProps = (object,propName)=>{
//     return object[propName]
// }

// const objs = {
//     a:'a123555',
//     b:'b789966'
// }
// console.log(getProps(objs,'a'))
// console.log(getProps(objs,'b'))


const getProps = <T,K extends keyof T>(object:T,propName:K)=>{
    return object[propName]
}
