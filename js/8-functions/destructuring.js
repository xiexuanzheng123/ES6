
/*********使用了对象的解构赋值，而没有使用函数参数的默认值 */

function foo({x, y=5}) {  
    console.log(x, y);
}
foo({x:1})