
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
}
var p = new Point(1, 2);
console.log(p.toString());

class Point1 {
    constructor(x, y) { //构造方法
        this.x = x; //this代表实例对象
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    static test() {
        return 'hello';
    }
}
var p1 = new Point1(3, 4);
console.log(p1.toString());
console.log('***', Point1.test());
//typeof Point --> function
//Point === Point.prototype.constructor
//类的所有方法都定义在类的prototype属性上面，所以类内部定义的方法都是不可枚举的

/**
 * construtor
 * 这是类的默认方法，通过new命令生成的对象实例时，自动调用这个方法
 * 默认返回实例对象（this），完全可以指定返回另外一个对象
 */
class Foo {
    constructor() {
        return Object.create(null);
    }
}
new Foo() //不是Foo类的实例
//类的constructor方法不调用new是无法调用的

/**
 * instance
 * 使用new来生产实例对象
 * 实例的属性除非显性定义在其本身（this）,否则都是定义在原型上
 */
class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
var point = new Point2(1, 2);
point.toString(); //(2, 3)
point.hasOwnProperty('x');//true以为定义在this上
point.hasOwnProperty('y');//true
point.hasOwnProperty('toString');//false
point.__proto__.hasOwnProperty('toString');//ture point.__proto__ === Point.propotype

/**
 * 不存在变量提升
 */

 /**
  * Class表达式
  与函数一样，类也可以使用表达式的形式定义
  */
  const MyClass = class Me {//；类名是MyClass而不是Me，Me只在class的内部代码使用，指代当前类
      getClassName() {
          return Me.name;
      }
  }
  let inst = new MyClass();
  inst.getClassName();//Me
  Me.name//Me is not defined

  /**
   * 采用Class表达式，可以写出立即执行的class
   */
let persion = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}('张三');
persion.sayName();

/**
 * 私有方法
 */
class Widget {
    //共有方法
    foo(baz) {
        this._bar(baz);
    }
    //私有方法
    _bar(baz) {
        return this.snaf = baz;
    }
}
/**
 * this的指向
 */
class Logger {
    constructor() {
        this.printName = this.printName.bind(this);
        this.print = this.print.bind(this);
        //在构造方法中绑定this，这样就不会找不到print方法了、
    }
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }
    print(text) {
        console.log(text);
    }
}
const logger = new Logger();
const { printName } = logger;
//printName();TypeError: Cannot read property 'defineProperty' of undefined
//printName();







