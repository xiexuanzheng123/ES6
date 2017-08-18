/**
 * sort方法
 * 1 参数必须是函数
 * 2 对象必须是数组
 * 3 函数规定了排序的方式
 */
let values = [2, 1, 3];
var result = values.sort(function (a, b) {
    return b - a; //a - b 升序排列
                    // b - a降序排列
});
console.log(result);

//arrow function
var result = values.sort((a, b) => a - b);

/***关于arrow function 的this 问题 
 * 1 函数体内的this指的是定义时所在的对象，而不是调用的对象
 * 2 不可以当做构造函数
 * 3 不可以使用arguments
 * 4 不可以使用yield
*/
//javascript中的this是可以变的，但在arrow function中是固定的

function foo() {
    console.log(111, this);//{id: 42}
    setTimeout(() => {
        console.log(222, this)
        console.log('id:', this.id);//{id: 42}
    },1000);
}
let id = 21;
foo.call({id: 42});
//箭头函数的定义生效实在foo函数生成时

/**
 * 箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，
 * 而不是指向运行所在的作用域
 */
function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, console.log(1, this), 1000);//this指向Timer
    setInterval(function() {
        this.s2++;
        console.log(2, this);//this指向windows
    }, 1000);  
}
var timer = new Timer();
setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

//s1: 3
//s2: 0
