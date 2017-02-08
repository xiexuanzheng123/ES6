var a = [];
for(var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };

a[6]();//输出10
        //变量i是var声明的，全局范围内有效，每次循环，新的i值都会覆盖旧的值 
