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
getFullName({
    firstName:'pang ',
    lastName:'bao hui',
});

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
