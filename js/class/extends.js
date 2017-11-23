
//class ColorPoint extends Point {};
//ColorPoint类使用extends继承Point类的所有属性和方法，由于Point没有属性和方法，所有相当于复制了Point
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString();
    }
}
/**
 * 上述代码中，constructor方法和toString方法中，都出现了super关键字，它在这里表示父类的构造函数
 * 用来新建父类的this对象，子类必须在constructor中调用super方法，否则新建实例时会报错
 * 子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工，如果不调用super方法，
 * 子类就得不到this对象
 */
class A {}
class B extends A {}
//1 子类的__proto__属性，表示构造函数的继承，总是指向父类
console.log(B.__proto__ === A);
//2 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的 prototype属性
console.log(B.prototype.__proto__ === A.prototype);

class C {}
class D {}
Object.setPrototypeOf(D.prototype,  C.prototype);//B的实例继承A的实例
Object.setPrototypeOf(D, C);//B继承A的静态属性

// Object.setPrototypeOf = function (obj, proto) {
//     obj.__proto__ = proto;
//     return obj;
// }
/**
 * extends 后面可以跟多钟类型的值，上面的代码A，只要是一个有prototype属性的函数，就能被B继承
 * 由于函数都有prototype属性，因此A可以是任意函数
 */
// 子类继承Object类
class A1 extends Object {

}
console.log(A1.__proto__ === Object);
console.log(A1.prototype.__proto__ === Object.prototype);

//不存在任何继承
class A2 {}
console.log(A2.__proto__ === Function.prototype);
console.log(A2.prototype.__proto__ === Object.prototype);

//子类继承null
class A3 extends null {}
console.log(A3.__proto__ === Function.prototype);
console.log(A3.prototype.__proto__ === Object.prototype);

//getPrototypeOf可以从子类获取父类
console.log(Object.getPrototypeOf(B));

//super
//1 作为函数调用时（super(...args)），super代表父类的构造函数
//2 作为对象调用时(super.prop, super.method)，super代表父类，
class AA {
    constructor(_p) {
        this._p = _p;
    }
}
class BB extends AA {
    get m() {
        return this._p * super._p;
    }
    set m(p) {
        throw new Error('该属性已读');
    }
}

//子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性，也就是说，子类原型的原型，是父类实例的原型

var p1 = new Point(1, 2);
var p2 = new ColorPoint(2, 3, 'red');

console.log(p2.__proto__.__proto__ === p1.__proto__);

