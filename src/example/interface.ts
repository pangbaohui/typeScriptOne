// @ts-ignore
// const getFullName = ({firstName,lastName}) =>{
//     return `${firstName}${lastName}`
// };
// getFullName({
//     firstName:'pang ',
//     lastName:'bao hui'
// });

interface NameInfo {
    firstName: string,
    lastName: string,
    // [prop:string]:any
}

const getFullName = ({firstName,lastName}:NameInfo):string=>{
    return `${firstName}${lastName}`
};
// getFullName({
//     firstName:'pang ',
//     lastName:'bao hui',
// });

// 过滤检测：  如果要多传参数的话   1.as NameInfo   在调用方法的时候在后面加上
// 2. 在定义接口的时候在最后加上一个属性  [prop:string]:any
// 3. 利用类型兼容性


// console.log(
//     getFullName({
//         firstName:'pang',
//         lastName:'bao hui',
//         age: '18'
//     }as NameInfo)
// )
const userInfo = {
    firstName:'pang',
    lastName:' bao hui',
    age: '18',
    man:'man'
}
console.log(getFullName(userInfo));

interface Vegetable{
    color?:string,
    readonly type:string
}

let vegetableObj:Vegetable = {
    type:'type  type'
}

interface ArrInter {
    0:number,
    readonly 1:string
}
let arrIn:ArrInter=[1,'asas'];
// arrIn[1]="ss" 因为有readonly所以不能再次赋值
console.log(arrIn);

//定义函数的结构
//方式1
// interface AddFun {
//     (num:number,num1:number):number
// }
//方式2 类型别名的形式
type AddFun = (num:number,num1:number)=>number
//定义函数指定类型为AddFun
const abc:AddFun = (n1,n2)=>n1+n2

//索引类型  定义索引的类型
interface RoleDic {
    [id:number]:string
}

const role:RoleDic = {
    1:'定义索引的类型'
}
console.log(role);
interface RoleDic2 {
    [id:string]:string
}
const role2:RoleDic2={
    a:'定义索引为字符串类型',
    1:'JS先把数值转成字符串类型'
}
console.log(role2);

// const obj8={     //在浏览器上运行输出只有{123: "pbh"}
//     123:'qwer',
//     '123':'pbh'
// }

//接口的继承
interface Vegetables {
    color:string
}
interface Tomato extends Vegetables{
    radius:number
}
interface Carrot extends Vegetables{
    length:number
}
const tomato:Tomato={
    radius:1,
    color:'red'
}
const carrot:Carrot={
    length:2,
    color:'blur'
}

const countup =((num)=>{
    let count = num;
    return ()=>{
      return count++
    }
})(6)//小括号里边是传参啊
console.log(countup());
console.log(countup());
console.log(countup());
console.log(countup());

// let countUp = () =>{   //浏览器下运行
//     countUp.count++;
// }
// undefined
// countUp.count = 0
// 0
// countUp()
// undefined
// countUp.count
// 1
// countUp()
// undefined
// countUp.count
// 2
//以下为示例 向方法中添加属性
// interface Counter {
//     ():void,
//     count:number
// }
// const getCounter = ():Counter =>{
//     const c=()=>{c.count++}
//     c.count = 0
//     return c
// }
// const counter:Counter = getCounter();
// counter();
// console.log(counter.count);
// counter();
// console.log(counter.count);
