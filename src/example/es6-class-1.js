// function Point(x,y) {
//     console.log(this);
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.getPosition = function () {
//     return `(${this.x},${this.y})`
// }
// var p1 =new Point(2,3);
// console.log(this);
// console.log(p1);
// console.log(p1.getPosition());

// class Point {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     getPosition(){
//         return `(${this.x},${this.y})`
//     }
// }
// const p1 = new Point(5,6);
// console.log(p1);
// console.log(p1.hasOwnProperty('x'))
// console.log(p1.__proto__.hasOwnProperty('getPosition'))
// console.log(p1.__proto__)

var info = {
    _age:18,
    set age (newValue){
        if(newValue > 18){
            console.log('old')
        }else {
            console.log('yang')
        }
    },
    get age(){
        console.log('不知道');
        return this._age
    }
};



console.log(info.age);
info.age = 16;
info.age = 19;

//定义一个方法的两种形式
// const func =function () {}
// function func() {}

// 定义类的形式
// class infos {
//     constructor(){}
// }
//类名是infos 通过new infos()得知
// const infos = class c {
//     constructor(){}
// }
// const testInfo = new infos();

// class  Point{
//     // z = 11; es5添加属性
//     constructor (x,y){
//         this.x = x; //添加属性
//         this.y = y;
//     }
//     getPosition(){
//         return `(${this.x},${this.y})`
//     }
//     static getClassName(){
//         return Point.name
//     }
// }
// const p = new Point(1,2);
// console.log(p);
// console.log(p.getPosition());
// console.log(Point.getClassName());//调用静态方法只能用类本身，类的静态方法实例不能获取


//实例属性的其他写法
// const _func2 = ()=>{};
// class Point {
//     func1 (){
//         _func2().call(this);//在模块外面是不能够调用该方法
//     }
// }
//如以下方法均不能够调用_func2
// const p = new Point()
// p.func2();
// console.log(_func2())


//不能够被外部的文件调用
//a.js
// const fun1 = Symbol('func1');
// class Point {
//     static [fun1] (){
//
//     }
// }
//b.js
// import Point from 'a.js'
// const p = new Point();
// console.log(p) //在这个p中无法获取到静态方法


//私有属性
// class Point {
//     #ownProp = 12 // 用#号标记私有属性
// }


// new.target
function Point() {
    console.log(new.target)
}
const p = new Point()
                            //ƒ Point() {
                            // console.log(new.target)
                            // }
const p2 = Point();   //undefined


class Point1 {
    constructor(){
        console.log(new.target)
    }
}
const p3 = new Point1();
