//bool
let bool:boolean =false;
//arr
// 1
let arr1 :number[]
arr1 = [ 5 ]
//2
let arr2:Array<number>
let arr3:[string|number]

//元组 固定长度，固定类型的
let tuple:[string,number,boolean]
tuple = ['q',1,false]

//枚举
enum Roles {
    SUPER_ADMIN = 1,
    ADMIN,
    USER
}
console.log(Roles.USER);
console.log(Roles[1]);
// if(roles === Roles.SUPER_ADMIN){
//
// }

//any类型
let value:any
value = false;
value = '4';
value = 1;
const arr4:any[]=[1,'l']


//void类型
const consoleText = ( text:string ):void =>{
    console.log(text)
}
let v:void;
v =undefined;
let n = null;
consoleText('mdnmhk');

//never类型
const errorFunc =(message:string):never =>{
    throw new Error(message)
}
const infiniteFunc = () =>{
    while (true){}
}
//object
let obj = {
    name:'pbh'
}

let obj2 = obj
obj2.name = '123'
console.log(obj)

function getObject(obj:Object) :void {
    console.log(obj)
}
getObject(obj2)

//断言类型
