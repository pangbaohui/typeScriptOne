//类型推断，当我们定义一个变量时没有指定类型，TS就会根据值推断类型，该变量就不能赋其他类型的值
let myName = 'pbh';
console.log(myName);

let arr5 = [1,'kk'];//let arr5:[number,string] = [1,'kk'];

//上下文类型
window.onmousedown = (mouseEvent:any)=> {
    console.log(mouseEvent)
}
interface InfoInterface {
    name:string
    info:{age:number}
}
let infos:InfoInterface
const infos1 = {name:'pbh',info:{age:18}}
const infos2 = {age:18}
const infos3 = {name:'pbh',age: 18}
infos = infos1 //深层次递归检测
// infos = infos2 //丢失name属性
// infos = infos3


//参数个数 只能多变少
// let x = (a:number)=>0
// let y = (b:number,c:string)=>1
// y = x //  √         y的参数个数多于x
//x = y //×

// const arrs = [1,2,3]
//forEach(当前遍历到的元素，当前遍历到的元素的下标，当前遍历的数组)
// arrs.forEach((item,index,arry)=>{
//     console.log(item)
// })
// arrs.forEach((item)=>{
//     console.log(item)
// })


//参数类型
let x = (a:number) => 0
let y = (b:string) => 0

//可选参数和剩余参数
const getSum = (arr:number[],callback:(...args:number[]) => number):number =>{
    return callback(...arr)
}
const res = getSum([1,2,3],(...args:number[]):number =>args.reduce((a,b)=>a+b,0))
console.log(res)
