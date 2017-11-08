/**
 * Proxy用于修改某些操纵的默认行为，在再语言层面做出修改，属于元编程，对编程语言进行编程
 * 下面例子对一个空对象架设了一层拦截，重新定义了set和get行为,也就是重载了点运算符
 */
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key} !`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});
obj.count = 1;
++obj.count;

var proxy = new Proxy({}, {
    get: function (target, property) {
        return 35;
    }
});
var obj = Object.create(proxy); //create创建的对象，参数是对象的原型
obj.time;
console.log(obj.prototype);


var handler = {
    get: function (target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },
    apply: function (target, thisBinding, args) {
        return args[0];
    },
    construct: function (target, args) {
        return {value: args[1]};
    }
}
var fproxy = new Proxy(function(x, y) {
    return x + y;
}, handler);

console.log(fproxy(1, 2));
new fproxy(1, 2);
fproxy.prototype === Object.property;
fproxy.foo;
/**
 * 1 get(target, propKey, receiver)
 * 2 set(target, propKey, value, receiver)
 * 3 has(target, propKey) 拦截propKey in proxy的操作，以及对象的hasOwnProperty方法
 * 4 deleteProperty(target, propKey) 拦截delete proxy的操作
 * 5 ownKeys(target) 拦截Object.getOwnPropertyNames， Object.getOwnPropertySymbols, Object.keys
 * 6 getOwnPropertyDescriptor(target, propKey)
 * 7 defineProperty
 * 8 preventExtensions
 * 9 getPrototypeOf
 * 10 isExtensible
 * 11 setPrototypeOg
 * 12 apply(target, object, args)
 * 13 construct拦截构造函数 new 
 */