import {rejects} from "assert";

function getIndexPromise(bool:boolean) {
    return new Promise((resolve,rejects) =>{
        setTimeout(()=>{
            console.log(1)
            if(bool){resolve('true')}
            else {rejects(Error('error'))}
        },1000)
    })
}
// getIndexPromise(false).then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })

async function asyncFunction() {
    try {
        const res = await getIndexPromise(false)
        console.log(res)
    }catch (e) {
        console.log(e)
    }
}
asyncFunction()

namespace axios{
    export function post() {
        
    }
}
