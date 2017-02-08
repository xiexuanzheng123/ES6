/***在代码块中，使用let命令声明变量之前，该变量都是不可用的，这叫暂时性死区 */

var tmp = 123;  //全局变量tmp
if(true){
    tmp = 'abc';
    let tmp;    //声明了局部变量tmp
}

if(true){
    //TDZ开始
    temp = 'abc'; //ReferenceError
    console.log(temp); //ReferenceError

    let temp; //TDZ结束
    console.log(temp);//ReferenceError

    temp = 123;
    console.log(temp);//123
}