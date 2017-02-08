/***let 声明的变量只在let所在的代码块中起作用 */
{
    let a = 10;
    var b = 1;
}

console.log(a);///// ReferenceError: a is not defined
console.log(b);