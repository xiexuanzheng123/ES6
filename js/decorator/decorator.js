/**
 * 修饰器是一个函数，用来修饰类的行为
 * 修饰器对类行为的改变，发生在代码编译阶段，而不是运行时
 * 这意味着，修饰器能在编译阶段运行代码
 */
function testable(target) {
    target.isTestable = true;
}
@testable//这是一个修饰器，修改了MyTestableClass这个类的行为，为它加上了静态属性
class MyTestableClass {}
console.log(MyTestableClass.isTestable);
//相当于如下执行
//MyTestableClass = testable(MyTestableClass) || MyTestableClass;

function testable(isTestable) {
    return function(target) {
        target.isTestable = isTestable;
    }
}
@testable(true)
class MyClassTrue {}
MyClassTrue.isTestable;//true

@testable(false)
class MyClass {}
MyClass.isTestable;//false

//实例属性
function testable1(target) {
    target.prototype.isTestable = true;//添加实例属性
}
@testable1
class MyTestableClass1 {}
let obj = new MyTestableClass1();
obj.isTestable;//true

//方法的修饰，修饰器不仅可以修饰类，还可以修饰类的属性
class Persion {
    @readonly
    name() {
        return `${this.first} ${this.last}`;
    }
}
/**
 * 修饰器函数一共可以接受三个参数，
 * 第一个参数是所要修饰的对象，第二个参数是索要修饰的属性名，第三个是该属性的描述
 */
function readonly(target, name, descriptor) {
    //descriptor对象原来的值如下：
    // {
    //     value: specifiedFunction,
    //     enumerable: false,
    //     configurable: true,
    //     writable: true
    // };
    descriptor.writtable = false;
    return descriptor;
}
readonly(Persion.prototype, 'name', 'descriptor');
Object.defineProperty(Persion.prototype, 'name', 'descriptor');
var p = new Persion();
p.name();

/**
 * 不能修饰函数
 */
var counter = 0;
var add = function () {
    counter++;
};
@add
function foo() {}
