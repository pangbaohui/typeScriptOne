// export let time = new Date()
// setInterval(()=>{
//     time = new Date()
// },1000)

import {name as nameProp, age, info} from './c'
info.name = 'kkk';
console.log(nameProp,age,info);//引入的内容是只读的，若是对象就可以修改其属性
