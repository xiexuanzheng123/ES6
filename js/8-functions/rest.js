function add(...values) {//使用rest参数可以向函数传递 任意多个参数
    let sum = 0;
    for(var val of values) { //传递的参数变成values数组
        sum += val;
    }
    return sum;
}
add(2, 5, 3);//10;

function f(a, ...b, c) { //rest参数之后不可以再有别的参数
    //
}