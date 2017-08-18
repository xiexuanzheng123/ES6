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

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1);

let newArr = [1, 2].concat([3, 4]);
console.log(newArr);//ES5的concat方法

let arr3 = [...[1, 2], ...[3, 4]];
console.log(arr3);

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);
console.log('map', map);//{1 => "one"}, {2 => "two"}, {3 => "three"}

console.log([...map]);

let go = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log(...go());//1, 2, 3