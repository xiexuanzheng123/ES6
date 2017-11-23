/**
 * 原生构造函数是指语言内置的构造函数，通常用来生成数据结构
 * Boolean(), Number(), String(), Object(), Array(), Date(), Function(), RegExp(), Error()
 * 以前这些原生构造函数是无法继承的，子类无法获得原生构造函数的内部属性，通过Array.apply()或者分配给原型都不行
 * 原生构造函数的this无法绑定，导致拿不到内不属性
 * ES5是先建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数
 * 
 */


 //ES6允许继承原生构造函数定义子类，因为ES6是先新建父类的实例对象this，然后再用子类的构造函数修饰this,使得父类的所有行为
 //都可以继承
 class MyArray extends Array {
     constructor(...args) {
         super(...args);
     }
 }
 var arr = new MyArray();
 arr[0] = 12;
 arr.length;

 /**
  * getter setter
  */
class MyClass {
    constructor() {

    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
}
let inst = new MyClass();

/**
 * Generator
 */

/**
 * static 
 * 类相当于实例的原型，所有在类中定义的方法，都会被实例继承，
 * 如果加上static关键字，就表示该方法不会被实例继承，而是直接通过类来 
 */