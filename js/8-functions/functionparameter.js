let foo = 'outer';

/***匿名函数声明时。bar函数的作用域还没有形成，所以匿名函数的foo指向外层 */
function bar(func = x => foo) {
    let foo = 'inner';
    console.log(func());
}

bar();//outer