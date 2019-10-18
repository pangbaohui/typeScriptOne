function Food() {
    this.type = 'food'
}
Food.prototype.getType = function () {
    return this.type
}
function Vegetables(name) {
    this.name = name
}
Vegetables.prototype = new Food()
const tomato = new Vegetables("tomato");
console.log(tomato.getType())//food
console.log(Food.prototype.getType)//food

// class Parent {
//     constructor (name){
//         this.name = name
//     }
//     getName(){
//         return this.name
//     }
//     static getName(){
//         return this.name
//     }
// }
// class Child extends Parent{
//     constructor (name,age){
//         super(name)
//         this.age = age
//     }
// }
// const c =new Child('pbh',18);
// console.log(c)//Child {name: "pbh", age: 18}
// console.log(c.getName());//pbh
// console.log(c instanceof Child);//true
// console.log(c instanceof Parent);//true
// console.log(Child.getName());//Child


//获取一个构造函数的原型对象
//获取类的父类
// const a = Object.getPrototypeOf(Child) === Parent;
// console.log(a);


//super()作为函数=== 函数在子构造函数中必须要调用一次并且传的参数是父函数的参数，否则在子函数中不能使用this
//super()作为对象 === 在普通方法中指向的是父类的原型对象 ===在静态方法中指向的是父类

// class Parent {
//     constructor(){
//         this.type = 'PP'
//     }
//     getName(){
//         return this.type
//     }
// }
// Parent.getType = ()=>{
//     return '  is Parent'
// }
// class Child extends Parent{
//     constructor(){
//         super();
//         console.log("constructor" + super.getName())
//     }
//     getParentName(){
//         console.log("getParentName"+super.getName())
//     }
//     static getParentType(){
//         console.log("getParentType"+super.getType())
//     }
// }
// const c = new Child();//constructorPP
// c.getParentName()//getParentNamePP
// Child.getParentType()//getParentType is Parent


class Parent {
    constructor(){
        this.name = 'parent'
    }
    print(){
        console.log(this.name)
    }
}
class Child extends Parent{
    constructor(){
        super();
        this.name = 'child'
    }
    childPrint(){
        super.print()
    }
}
const c = new Child();
c.childPrint();//child   this指代的是子类的实例


//prototype
//__proto__
var obj = new Object()
console.log(obj.__proto__ === Object.prototype);//true
// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类的__proto__

// Boolean
// Number
// String
// Array
// Date
// Function
// RegExp
// Error
// Object
//继承原生构造函数

class CustomArray extends Array {
    constructor(...args){
        super(...args)
    }
}

const arr = new CustomArray(2);//一个参数就是有几个数组 ["123", "123"]
arr.fill('123');
// const arr = new CustomArray(2,3,4,5);//几个参数就是由这几个参数组成的数组 [2, 3, 4, 5]
console.log(arr);//CustomArray(2) ["123", "123"]
console.log(arr.join('-'));//123-123

//ES5 先创建子构造函数this然后再将父类的属性方法添加到子构造函数的this上
//ES6 先从父类取到示例this，然后在调用supper函数之后，再将子类的属性方法加到this上
