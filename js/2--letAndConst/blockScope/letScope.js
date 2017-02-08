function f1() {
    let n = 5;
    if(true) {
        let n = 10;
    }
    console.log(n); //外层代码不受内层代码影响
}