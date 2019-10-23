//this类型
// JS中的this获取全局对象、类实例对象、构建实例等引用
class Counter {
    constructor(public count:number = 0){}
    add(value:number){
        this.count += value
        return this
    }
    public subtract(value:number){
        this.count -= value
        return this
    }
}
let counter1 = new Counter(10)
//在每个方法后面return一个实例this就可以实现一个链式调用
console.log(counter1.add(3).subtract(6))

class PowCounter extends Counter{
    constructor(public count:number) {
        super(count);
    }
    public pow(value:number){
        this.count = this.count**value
        return this
    }
}
let powCounter = new PowCounter(2)
console.log(powCounter.pow(4).add(1).subtract(2))

//索引类型
//索引类型查询操作符  keyof
interface InfoInterfaceAdvanced {
    name:string;
    age:number;
}
let infoProp:keyof InfoInterfaceAdvanced
infoProp = 'name'
infoProp = 'age'
// infoProp = 'sex'  //不能将其他类型赋值给  InfoInterfaceAdvanced

function getValue<T,K extends keyof T>(obj:T,names:K[]): Array <T[K]>
{
    return names.map((n) => obj[n])//n代表每一个遍历的属性名
}
const infoObj = {
    name:'pbh',
    age:18
}
const infoValues:Array<string|number>  = getValue(infoObj,['name','age'])
console.log(infoValues)

//[] 索引访问操作符
type NameType = InfoInterfaceAdvanced['name']
function getProperty<T,K extends keyof T>(o:T,name:K) {
    return o[name]
}

interface Objs<T> {
    [K:string]:T
}
let objs1:  Objs<number> = {
    age:18
}
let keys:Objs<number>['name']
interface Type {
    
}
