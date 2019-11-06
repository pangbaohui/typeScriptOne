//对象的混入
// interface ObjectA {
//     a:string
// }
// interface ObjectB {
//     b:string
// }
// let Aa:ObjectA = {
//     a:'a'
// }
// let Bb:ObjectB = {
//     b:'b'
// }
// let AB: ObjectA & ObjectB = Object.assign(Aa,Bb)
// console.log(AB)

//类的混入
class ClassAa{
    public isA:boolean= false
    public funcA(){}
}
class ClassBb{
    public isB: boolean = false
    public funcB(){}
}
class ClassAB implements ClassAa,ClassBb{
    public isA:boolean = false
    public isB:boolean = false
    public funcA!: () => void
    public funcB!: () => void
    constructor(){}
}
function mixins(base:any,from:any[]) {
    from.forEach(fromItem =>{
        Object.getOwnPropertyNames(fromItem.prototype).forEach(key =>{
                console.log(key)
                base.prototype[key] = fromItem.prototype[key]
            }
        )
    })
}
// mixins(ClassAB,[ClassAa,ClassBb])
// const ab = new ClassAB()
// console.log(ab)

interface Res{
    data:{
        [key:string]:any
    }
}
namespace axios{
    export function post(url:string,config:object):Promise<Res>{
        return new Promise((resolve,rejuct)=>{
            setTimeout(()=>{
                const res:Res = {data:{}}
                if (url === '/login'){res.data.user_id = 111 }
                else { res.data.role = "admin"}
                console.log(2)
                resolve(res)
            },1000)
        })
    }
}
interface loginInfo {
    user_name:string
    password:string
}
async function loginReg({user_name,password}: loginInfo){
    try {
        console.log(1)
        const res = await axios.post('/login',{
            data:{
                user_name,
                password
            }
        })
        console.log(3)
        return res
    }catch (e) {
        throw new Error (e)
    }
}

async function getRoleReq(user_id:number){
    try {
        const res = await axios.post('/user_role',{
            data:{
                user_id
            }
        })
        return res
    }catch (e) {
        throw new Error (e)
    }
}

// loginReg({user_name:'pbh',password:'123'}).then((res:any) =>{
//     const {data:{user_id}} = res
//     getRoleReq(user_id).then(res =>{
//         // @ts-ignore
//         const {data:{role}} = res
//         console.log(role)
//     })
// })


//动态导入表达式
async function getTime(format:string) {
    const  moment= await import('moment')
    return moment.default().format(format)
}
getTime('L').then(res =>{
    console.log(res)
})


//弱类型探测
interface ObjIn {
    name?:string
    age?:number
}
let objIn = {
    sex:'man'
}
function printInfo(info:ObjIn) {
    console.log(info)
}
printInfo(objIn as ObjIn)


// ...拓展运算符  把对象扁平化
function mergeOptions<T,U extends string>(op1:T,op2:U) {
    return {...op1,op2}
}
const mergeV = mergeOptions({a:'a'},'name')
console.log(mergeV)

function getExcludeProp<T extends {props:string}>(obj:T) {
    const {props, ...rest } = obj
    return rest
}

const objInfo = {
    props:'something',
    name: 'pbh',
    age:18
}

console.log(getExcludeProp(objInfo))
