/****参数默认值的位置 */

function foo(x=1, y) {
    console.log([x, y]);
}
foo();//[1, undefined]
foo(2);//[2, undefined]
foo(undefined, 1);//[1,1]
//foo(,1);//报错

function bar(x, y=5, z) {
    console.log([x, y, z]);
}
bar();//[undefined, 5, undefined]
bar(1); //[1, 5, undefined]
//bar(1, , 2);//报错
bar(1, undefined, 2); //[1, 5, 2]