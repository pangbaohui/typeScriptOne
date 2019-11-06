//装饰器在tsconfig中打开对装饰器的开关

// 装饰器要紧挨着要修饰的内容前面  所有的装饰器不要用在生命文件  .d,.ts为后缀的生命文件中

// @setProp
// function setProp() {
//
//     return function (target:any){
//
//     }
// }
//引用多个装饰器的顺序  如果是装饰器工厂会从上到下，其他的从下到上

// function setName() {
//     console.log('get setName')
//     return (target:any) => {
//         console.log('setName')
//     }
// }

// function setAge() {
//     console.log('get setAge')
//     return (target:any) => {
//         console.log('setAge')
//     }
// }

/**  首先从上到下执行获取装饰器，然后再从下到上的执行里边的逻辑
 get setName
 get setAge
 setAge
 setName
 */
// @setName()
// @setAge()
// class ClassDec {
//
// }

// let sign = null;
// function setName(name:string) {
//     return (target:new()=>any)=>{
//         sign = target;
//         console.log(target.name)
//     }
// }
// @setName('pbh')
// class ClassDec {
//     constructor(){}
// }
// console.log(sign === ClassDec);
// console.log(sign === ClassDec.prototype.constructor);


// function addName(constructor:new()=>any) {
//     constructor.prototype.name = 'pbh11'
// }
//
// @addName
// class ClassD {}
// interface ClassD {
//     name:string
// }
// const d = new ClassD()
// console.log(d.name)
//
// function classDecorator<T extends {new(...args:any[]):{}}>(target:T) {
//     return class extends target{
//         public newProperty = 'new property'
//         public hello = 'override'
//     }
// }
// @classDecorator
// class Greeter{
//     public property = 'property';
//     public hello:string;
//     constructor(m:string){
//         this.hello = m
//     }
// }
// console.log(new Greeter('world'));


//方法装饰器  处理类中的方法 处理描述符和方法的定义
//属性装饰符  configurable可配置  writeable可写  enumrable可枚举
// interface ObjWithAnyKeys{
//     [key:string]:any
// }
// let obj12 :ObjWithAnyKeys= {
//     age:18
// };
// Object.defineProperty(obj12,'name',{
//     value:'pbh',
//     writable:false, //不可写
//     configurable:true,
//     // enumerable:true
//     enumerable:false //可枚举性  for循环是否可列举属性
// });//(创建的对象、处理的属性名/方法名,对象设置属性描述符)
//
// console.log(obj12.name);
// for(const key in obj12){
//     console.log(key)
// }

//装饰器工厂
// function enumerable(bool:boolean) {
//     //返回装饰器  (修饰的内容、成员的名字、属性描述符的对象)
//     return  (target:any,propertyName:string,descriptor:PropertyDecorator) => {
//         console.log(target)
//         //设置属性描述符
//         // @ts-ignore
//         descriptor.enumerable = bool
//     }
// }
// class ClassF {
//     constructor(public age:number){}
//     // @ts-ignore
//     @enumerable(false)
//     public getAge(){
//         return this.age
//     }
// }
// const classF = new ClassF(18)
// console.log(classF)


//访问器装饰器
// function enumerable(bool:boolean) {
//     //返回装饰器  (修饰的内容、成员的名字、属性描述符的对象)
//     return  (target:any,propertyName:string,descriptor:PropertyDecorator) => {
//         // console.log(target)
//         //设置属性描述符
//         // @ts-ignore
//         descriptor.enumerable = bool
//     }
// }
// class ClassG {
//     private _name:string
//     constructor(name:string){
//         this._name = name
//     }
//     // @ts-ignore
//     @enumerable(false)
//     get name(){
//         return this._name
//     }
//     set name(name){
//         this._name = name
//     }
// }
// const classG = new ClassG('PBH')
// for (const key in classG){
//     console.log(key)
// }


//属性装饰器
// function printPropertyName(target:any,propertyName:string) {
//     console.log(propertyName)
// }
// class ClassH {
//     @printPropertyName
//     public name:string
// }


//参数装饰器
function required(target:any,propertyName:string,index:number) {
    console.log(`修饰的是${propertyName}的第${index+1}个参数`)
}
class ClassI {
    public name:string = 'pbh88'
    public age:number = 18

    public getInfo(prefix:string,
                   // @ts-ignore
                   @require infoType:string):any{
        // @ts-ignore
        return prefix +''+ this[infoType]
    }
}
interface ClassI {
    [key:string]:string|number|Function
}
const classI =new ClassI()
classI.getInfo('hihi','age')
