let [foo, [[bar]], baz] = [1, [[2]], 3];
console.log(bar);

let [ , , third] = ['foo', 'bar', 'baz'];
console.log(third);

let [x, , y] = [1, 2, 3];
console.log(y);

let [head, ...tail] = [1, 2, 3, 4];
console.log(tail);

let [x, y, ...z] = ['a'];
console.log(y); //undefined
console.log(z); //[]

/***不完全解构 */
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2,3], 4];
a //1
b //2
d //4

/**Set结构 */
let [x, y, z] = new Set(["a", "b", "c"]);
x // "a"