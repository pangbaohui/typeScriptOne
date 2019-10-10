// Symbol独一无二


const s = Symbol();
// console.log(s)
const s2 = Symbol();
// console.log(s2)

const s4 = Symbol('pbh');
// console.log(s4.toString())

// console.log(Boolean(s4))
// console.log(!s4)

let prop ='name';
const info = {
    // name:'pbh',
    // [prop]:'123'
    [`my${prop}is`]:'pbh'
}
// console.log(info)

const s5 =Symbol('name')
const info2 = {
    [s5]:'heiheihei',
    age:18,
    sex:'man'
}
// console.log(info2)
info2[s5] = 'hhaahhhha';
// console.log(info2)

for (const key in info2){
    // console.log(key)//age  sex
}
// console.log(Object.keys(info2)) //(2) ["age", "sex"]
// console.log(Object.getOwnPropertyNames(info2)) //(2) ["age", "sex"]
// console.log(JSON.stringify(info2));//{"age":18,"sex":"man"}
// console.log(Object.getOwnPropertySymbols(info2)) //[Symbol(name)]
// console.log(Reflect.ownKeys(info2))//["age", "sex", Symbol(name)]


//Symbol.for()  Symbol.keyFor()

const s6 = Symbol('pbh')
const s7 = Symbol('pbh') // s6 === s7   ==> true
const s8 = Symbol.for('lison')
// console.log(Symbol.keyFor(s8))
// TS 11个内置的Symbol值

// instanceof
const obj1={
    [Symbol.hasInstance](otherObj:any){
        console.log(otherObj)
    }
}
console.log({a:'a'}instanceof <any>obj1)
let arr = [1,2];
console.log(arr.concat([3,4])); //(4) [1, 2, 3, 4]
// @ts-ignore
console.log(arr[Symbol.isConcatSpreadable]);
// @ts-ignore
arr[Symbol.isConcatSpreadable] = false;
console.log(arr.concat([3,4])); //(3) [Array(2), 3, 4]
// @ts-ignore
console.log(arr[Symbol.isConcatSpreadable]);


class C extends Array{
    constructor(...args:any){
        super(...args)
    }
    static get [Symbol.species](){
        return Array
    }
    getName(){
        return 'pbh'
    }
}

const c = new C(1,2,3)
const a = c.map(item => item+1)
// console.log(a) //(3) [2, 3, 4]
// console.log(a instanceof C)//false
// console.log(a instanceof Array)//true
