/**
 * 将Object对象的一些明显属于语言内部的方法，Object.defineProperty,放到Reflect对象上，
 * 修改某些Object方法的返回结果，
 * 让Object操作都变成函数行为，
 * Reflect对象的方法与Proxy对象的方法一一对应
 */
// v
// Proxy(target, {
//     set: function(target, name, value, receiver) {
//         var success = Reflect.set(target, name, value, receiver);
//         if(success) {
//             log('property ' + name + ' on ' + target + ' set to ' + value);
//         }
//         return success;
//     }
// });
var obj = {
    age: 18
};
var loggedObj = new Proxy(obj, {
    get(target, name) {
        console.log('get', target, name);
        return Reflect.get(target, name);
    },
    deleteProperty(target, name) {
        console.log('delete' + name);
        return Reflect.deleteProperty(target, name);
    },
    has(target, name) {
        console.log('has' + name);
        return Reflect.has(target, name);
    }
});
console.log(loggedObj.age);
// Reflect.apply(target, thisArg, args)
// Reflect.construct(target, args);
// Reflect.get(target, name, receiver);
// Reflect.set(target, name, value, receiver);
// Reflect.defineProperty(target, name, desc);
// Reflect.deleteProperty(target, name);
// Reflect.has(target, name);
// Reflect.ownKeys(target);
// Reflect.isExtensible(target);
// Reflect.preventExtensions(target);
// Reflect.getOwnPropertyDescriptor(target);
// Reflect.getPrototypeOf(target);
// Reflect.setPrototypeOf(target, prototype);

/**
 * get
 */
var obj = {
    get foo() {
        return this.bar();
    },
    bar: function() {
        return 'obj';
    }
};
var wrapper = {
    get foo() {
        return this.bar();
    },
    bar: function() {
        return 'wrap';
    }
};
console.log(obj.foo);
console.log(Reflect.get(obj, 'foo', wrapper));