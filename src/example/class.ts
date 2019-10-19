// class Point {
//     x:number
//     y:number
//     constructor(x:number,y:number){
//         this.x = x
//         this.y = y
//     }
//     getPosition(){
//         return `(${this.x},${this.y})`
//     }
// }
// const point = new Point(1,6);
// console.log(point);
//
// class Parent {
//     name:string
//     constructor(name:string){
//         this.name = name
//     }
// }
// class Child extends Parent{
//     constructor(name:string){
//         super(name)
//     }
// }

//public

//private 私有
//protected 保护


class Parent {
    // private age:number
    protected age:number
    protected constructor(age:number){  //父类用protected修饰过后不能创建实例只能被子类继承
        this.age = age
    }
    protected getAge(){
        return this.age
    }
}
// const p = new Parent(18);
// console.log(p);
// console.log(p.age);//不能p.age访问
// console.log(Parent.age);//不能Parent.age访问

class Child extends Parent{
    constructor(age:number){
        super(age)
        // console.log(super.age) //这样是不能调用的，super在这里只能拿到基类公共、受保护的方法但是不能拿到受保护的属性
        console.log(super.getAge())
    }
}

// const child = new Child(20);
// console.log(child);

class UserInfo {
    readonly name:string;
    constructor(name:string){
        this.name = name
    }
}

const userinfo = new UserInfo("pbh");
// console.log(userinfo);
// userinfo.name = "111";//只读类型不能修改属性值

class ParentStatic {
    public static getAge(){
        return ParentStatic.age
    }
    private static age:number = 22;
    constructor(){}
}
// const p = new ParentStatic();
// console.log(ParentStatic.age);//静态属性和方法只能类本身能够使用
// console.log(ParentStatic.getAge());

class Info{
    public name:string
    public age?:number
    // @ts-ignore
    private _infoStr:string
    constructor(name:string,age?:number,public sex?:string){
        this.name = name
        this.age = age
    }
    //存取器
    get infoStr(){
        return `${this.name}`
    }
    set infoStr(val){
        console.log(`set:${val}`)
        this._infoStr = val
    }
}
// const info1 = new Info('pbh')
// const info3 = new Info('pbh',27)
const info4 = new Info('pbh',27,'man')
// info4.infoStr = 'hhah'
// console.log(info4.infoStr);


// 抽象类  abstract
// abstract class People {
//     constructor(public name:string){}
//     public abstract printName():void
// }
// class Man extends People{
//     constructor(name:string){
//         super(name)
//         this.name = name
//     }
//     public printName(){
//         console.log(this.name)
//     }
// }
// const m = new Man('PBH');
// m.printName()

// abstract class People {
//     public abstract _name:string
//     abstract get insideName():string
//     abstract set insideName(val:string)
// }
// class P extends People{
//     public _name:string
//     public insideName:string
// }

class People {
    constructor(public name:string){}
}

const p2:People = new People('pbh')

// interface FoodInterface {
//     type:string
// }
// class FaceClass implements FoodInterface{
//     // @ts-ignore
//     type:string
// }

// class A {
//     // @ts-ignore
//     protected name:string
// }
// interface I extends A{}
// class B extends A implements I{
//     // @ts-ignore
//     public name:string
// }

const create =<T>(c:new() =>T):T=>{
    return new c ()
}
// @ts-ignore
export class Infos {
    public age: number

    constructor(age: number) {
        this.age = 18
    }

}

// @ts-ignore
console.log(create<Infos>(Infos).age)
