/**
 * 属性名的两种写法
 */
var obj = {
    foo: true,
    abc: 123
};
console.log(obj.foo);
console.log(obj['abc']);

/**
 * 
 */
var lastWord = 'last word';
var a = {
    'first world': 'hello',
    [lastWord]: 'world',
    last: '!'
};
console.log(a['first world']);
console.log(a[lastWord]);
console.log(a.last);