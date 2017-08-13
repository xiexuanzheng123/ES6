/*******函数的length是指除了默认值以外的参数个数 */

let length = (function foo(a, b, c=1){}).length;//length是一个属性

console.log(length);//2

/**由...args传入参数的函数的length为0 */
(function arg(...args) {}).length //0

/****如果设置了默认值得参数不是 尾参数，那么其后的参数都不计入长度 */
(function foo(a=1, b, c) {}).length //0