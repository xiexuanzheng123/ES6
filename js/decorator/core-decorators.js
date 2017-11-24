/**
 * core-decorators是一个第三方库，提供常用的修饰器
 */
import { autobind, readonly, override } from 'core-decorators';

class Persion {
    @autobind
    getPersion() {
        return this;
    }
}
let persion = new Persion();
let getPersion = persion.getPersion;

console.log(getPersion() === persion);

class Meal {
    @readonly
    entree = 'steak';
}
var diner = new Meal();
diner.entree = 'salmon'//报错

//override检查子类的方法，是否正确覆盖了父类的同名方法
class Parent {
    speak(first, second) {

    }
}
class Child extends Parent {
    @override
    speak() {

    }
}
class Child1 extends Parent {
    @override
    speaks() {
        //SyntaxError
    }
}