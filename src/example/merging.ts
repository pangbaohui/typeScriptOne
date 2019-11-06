//声名合并
//在TS中可以声明同样的接口和命名空间最后TS会将多个同名声名合并为一个,后面的接口具有更高的优先级

interface InfoInter {
    name:string
    getRes(input:string):number
}
interface InfoInter {
    name:string
    getRes(input:number):string
}
let infoInter:InfoInter
infoInter = {
    name:'pbh',
    getRes(text:any):any{
        if(typeof text === 'string'){
            return text.length
        }else{
            return  String(text)
        }
    },
}
// console.log(infoInter.getRes('123'))

//TS所有的声名概括起来有三种实体之一：命名空间（实际是创建一个对象）、类型、值


//命名空间和类
//同名的命名空间和类的和并，类的声明必须要在命名空间前
// class Validations {
//     constructor(){}
//     public checkType(){}
// }
// namespace Validation{
//     export const numberReg = /^[0-9]+$/
// }
// console.dir(Validation.numberReg)

//命名空间和方法
//同名的命名空间和方法的和并，方法的声明必须要在命名空间前
function countUp() {
    countUp.count++
}
namespace countUp{
    export let count = 0
}
console.log(countUp.count)
countUp()
console.log(countUp.count)
countUp()
console.log(countUp.count)

//命名空间和枚举
//顺序没有要求
enum Colors {
    red,
    green,
    blue,
}
namespace Colors{
    export const yellow = 3
}
console.log(Colors);
