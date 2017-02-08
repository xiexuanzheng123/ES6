var a = [];
for(let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6]();//6
        //变量i是let声明的，只在本轮循环中有效，每次循环的i都是一个新的变量