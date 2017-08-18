/***好比是rest的逆运算，将一个
 * 数组
 * 转化为逗号分隔的参数序列 */

console.log(...[1, 2, 3]);//1 2 3
console.log(1, ...[2, 3, 4], 5);//1 2 3 4 5

function add(x, y) {
    return x + y;
}
let numbers = [1, 2];
add(...numbers);//3