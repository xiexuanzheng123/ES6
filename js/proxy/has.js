/**
 * has方法用来拦截hasProperty操作，而不是hasOwnProperty
 */
// var handler = {
//     has (target, key) {
//         if (key[0] === '_') {
//             return false;
//         }
//         return key in target;
//     }
// };
// var target = { _prop: 'foo', prop: 'foo' };
// var proxy = new Proxy(target, handler);
// console.log('_prop' in proxy);

// var obj = { a: 10 };//obj禁止扩展，使用has拦截就会报错
// Object.preventExtensions(obj);
// var p = new Proxy(obj, {
//     has: function (target, key) {
//         return false;
//     }
// });
//console.log('a' in p);
console.group('****************');
let stu1 = {name: 'Owen', score: 29};
let stu2 = {name: 'Mark', score: 99};

let handler1 = {
    has: function(target, prop) {
        
        if(prop == 'score' && target[prop] < 60) {
            console.log(`${target.name}不及格`);
            return false;
        }
        return prop in target;
    }
};
let oproxy1 = new Proxy(stu1, handler1);
let oproxy2 = new Proxy(stu2, handler1);

for (let a in oproxy1) {
    debugger;
    console.log(oproxy1[a]);
}
for (let b in oproxy2) {
    console.log(oproxy2[b]);
}