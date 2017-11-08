/**
 * apply方法拦截函数的调用，call apply
 */
//第二个参数是目标对象的上下文对象（this）
var target = function () {
    return 'I am the target';
}
var handler = {
    apply () {
        return 'I am the proxy';
    }
};
var p = new Proxy(target, handler);
console.log(p());

var twice = {
    apply (target, ctx, args) {
        return Reflect.apply(...arguments) * 2;
    }
};
function sum (left, right) {
    return left + right;
};
var proxy = new Proxy(sum, twice);
console.log(proxy(1, 2));
console.log(proxy.call(null, 5, 6));
console.log(proxy.apply(null, [7, 8]));