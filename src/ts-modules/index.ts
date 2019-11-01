// import {name} from "./b";   //  "pbh"
// import {name as myName} from "./b";   //  "pbh"
// import * as info from "./b";   //{name: "pbh", age: 18, __esModule: true}

//直接引入模块弊端 ,可以直接执行里面的逻辑但是没有变量就用不到里边的东西
//该引用只适于全局通用的逻辑
// import './a'
// import * as AData from "./a";   //{name: "pbh", age: 18, ClassC: ƒ, ClassD: ƒ, ClassNameD: ƒ, …}
// import name from "./c";   //{name: "pbh", age: 18, ClassC: ƒ, ClassD: ƒ, ClassNameD: ƒ, …}

// import name = require("./c");


//引入moment时间插件 三种方式   一和三的引入都是引入moment的默认导出   第二种是把moment文件所有的导出都引入
// import moment from 'moment'
// import * as moment from 'moment'
//import moment = require("moment");
// console.log(name)


/// <reference path="./letter-validation.ts" />
/// <reference path="./number-validation.ts" />

//执行  tsc src/ts-modules/index.ts --outFile src/index.js
//tsc 要编译的文件路径  --outFile  编译完成后生成的文件

let isLetter = Validation.checkLetter('abc');
let isNumber = Validation.checkNumber('abc');
console.log(Validation,isLetter,isNumber);

namespace Shapes {
    export namespace Polygons{
        export class Triangle {}
        export class Squaire {}
    }
}
// 引入命名空间
import polygons = Shapes.Polygons
//使用命名空间的类
let triangle = new polygons.Triangle()


//模块解析
//相对导入  / 根目录 ./当前目录   ../上一级目录

//非相对路径的导入可以通过 baseUrl 、路径映射
//模块解析策略 node 或者 classic 这两种形式 在tsconfig中指定了  "module": "commonjs",   所以解析为node
//classic是TS默认的解析策略是es6模块系统的解析方式
