class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
console.log(Point.hasOwnProperty('toString'));
console.log(Object.getOwnPropertyNames(Point));//['length', 'name', 'property']

class Logger {
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }
    print(text) {
        console.log(text);
    }
}
const logger = new Logger();
logger.printName();//Hello there
const { printName } = logger;
//printName();报错
/**
 * 在构造方法中绑定this
 */
class Logger1 {
    constructor() {
        this.printName1 = this.printName1.bind(this);
    }
    printName1(name = 'there') {
        this.print1(`Hello ${name}`);
    }
    print1(text) {
        console.log(text);
    }
}
const logger1 = new Logger1();
const { printName1 } = logger1;
printName1();//可以了

/**
 * ES5与ES6继承的区别
 */
function Super() {}
function Sub() {}
Sub.prototype = new Super;
//Sub.prototype.constructor = Sub;
var sub = new Sub();
console.group('ES5');
console.log('ES5', Sub.prototype.constructor === Sub);//true
console.log('ES5', sub.constructor === Sub); // ④ true
console.log('ES5', sub.__proto__ === Sub.prototype); // ⑤ true
console.log('ES5', Sub.prototype.__proto__ === Super.prototype);
console.groupEnd();

class Parent {}
class Child extends Parent {}

var child = new Child;
console.group('ES6');
console.log('ES6', Child.prototype.constructor === Child);
console.log('ES6', child.constructor === Child);
console.log('ES6', child.__proto__ === Parent.prototype);
console.log('ES6', Child.__proto__ === Parent);
console.log('ES6', Child.prototype.__proto__ === Parent.prototype);
console.groupEnd();

/**
 * 再来一个列子
 */

//ES6
class Father {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
    f() {
        console.log('fffffffffffffff');
    }
}

class Son extends Father {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
    f(){
        console.log('sssssssssssss');
    }
}
var s1 = new Son('张一', 12);
console.group('F-S');
s1.getName();//张一
s1.getAge();//12
console.log(s1.__proto__);//Father {construct: f, getAge: f, f: f}
s1.f();//ssss
s1.__proto__ = new Father();
s1.f();//ff
console.log(s1.__proto__);//Father {name: undefined}
console.groupEnd();

//Es5
console.group('ES5');
function Father1(name) {
    this.name = name;
}
function Son1(name, age) {
    Father1.call(this, name);
    this.age = age;
}
Father1.prototype.getName = function () {
    console.log(this.name);
}
Son1.prototype = new Father1();
Son1.prototype.constructor = Son1;
Son1.prototype.getAge = function() {
    console.log(this.age);
}
var s1 = new Son1('李四', 22);
console.log(s1);//Son1 {name: '李四', age: 22}
s1.getName();
console.log(Son1.prototype.constructor);
console.log(s1.constructor);
s1.getAge();
s1.__proto__.say = function() {
    console.log('hhhh');
}
s1.say();
console.log(new Son1().__proto__);//Father1
console.groupEnd();
