class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
console.log(Point.hasOwnProperty('toString'));
console.log(Object.getOwnPropertyNames(Point));//['length', 'name', 'property']

class Logger {
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }
    print(text) {
        console.log(text);
    }
}
const logger = new Logger();
logger.printName();//Hello there
const { printName } = logger;
//printName();报错
/**
 * 在构造方法中绑定this
 */
class Logger1 {
    constructor() {
        this.printName1 = this.printName1.bind(this);
    }
    printName1(name = 'there') {
        this.print1(`Hello ${name}`);
    }
    print1(text) {
        console.log(text);
    }
}
const logger1 = new Logger1();
const { printName1 } = logger1;
printName1();//可以了