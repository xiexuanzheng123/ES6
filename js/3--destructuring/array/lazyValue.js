function f() {
    console.log('aaa');
}
let [x = f()] = [1]; //默认值是一个表达式，x能取到值1，所以f（）函数不会执行
console.log(x);