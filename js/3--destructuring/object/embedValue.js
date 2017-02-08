let obj = {};
let arr = [];

({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
obj // {prop: 123}
arr //[true]


//对象的解构也可以指定默认值
var { x = 3 } = {};
x //3
var { x, y = 5 } = { x: 1 };
x //1
y //5
var { x: y = 3 } = {};
x //undefined
y //3
var { x: y = 3 } = {  x: 5 };
y //3

//默认值生成的条件是对象的属性值严格等于undefined
var { x = 3 } = { x: undefined };
x //3
var { x = 3 } = { x: null };
x //null