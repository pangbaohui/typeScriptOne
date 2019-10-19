//数字枚举
const test = 5
const getIndex = ()=>{
    return 2
}
enum Status {
    Uploading = 1,
    Success = test,
    Failed =getIndex(),
}

console.log(Status)
console.log(typeof (Status))
console.log(Status.Uploading)
console.log(Status[1])
console.log(Status['Success'])

//反向映射
enum Message {
    Error = '出错了',
    Success = '成功',
    Failed = Error,
}
console.log(Message)
console.log(Message.Failed)

//异构枚举  尽量少使用
enum Result {
    Faild = 0,
    Success = '成功'
}

//枚举成员类型和联合枚举类型
//成员可以作为类型使用
//1.不带初始值的枚举成员
//2.值为字符串字面量
//3.值为数值--正负数

enum Animals {
    Dog = 1,
    Cat = 2,
}
interface Dog {
    type: Animals.Dog
}
const dog:Dog = {
    type:Animals.Dog
}
console.log(dog);

//联合枚举类型
enum Status {
    Off,
    On
}
interface Light {
    status:Status
}
const light:Light = {
    status:Status.Off
}
console.log(light)

const enum Animals1{
    Dog = 2
}
