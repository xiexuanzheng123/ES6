var tmp = new Date();

function f() {
    console.log(tmp);
    if(false) {
        var tmp = "hello world"; //变量提升，内层tmp覆盖外层tmp'
    }
}
f();