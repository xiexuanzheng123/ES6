var x = 1;

function foo(x, y=x) { //调用时函数内部作用域已经生成，所以y=2
    console.log(y);
}

foo(2); //2

let a=1;
function bar(b=a){ //调用时，函数内部的a还没有生成 所以此时b=1
    let a=2;
    console.log(b);
}
bar(); //1

function baz(y=x) {
    let x=1;
    console.log(y);
}
baz();//referenceError