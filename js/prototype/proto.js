// var object = {};
// console.log(object.__proto__ === Object.prototype);

// /**
//  * 构造函数，用来初始化新创建的对象的函数是构造函数，Foo()函数是构造函数
//  */
// var Foo = function () {};
// var f1 = new Foo();

// console.log(f1);
// console.log(f1.__proto__ === Foo.prototype);
// console.log(f1.constructor === Foo);//constructor在f1的原型链上
// console.log(Foo.prototype.constructor === Foo);

// console.log(Foo.prototype.__proto__ === Object.prototype);
function Fun() {};
var fn = new Fun();
console.log(fn.__proto__ === Fun.prototype);
console.log(Fun.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);//Function作为实例对象
//Function的__proto__指向其构造函数Function的prototype，构造函数自身是一个函数，他是被自身构造的
console.log(Function.prototype.__proto__ === Object.prototype);

function People() {
    var age = 1;
    this.age = 10;
}
People.age = 20;
People.prototype.age = 30;
console.log(People.age);
var p = new People;
console.log(p.age);