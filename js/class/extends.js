//class ColorPoint extends Point {};
//ColorPoint类使用extends继承Point类的所有属性和方法，由于Point没有属性和方法，所有相当于复制了Point
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString();
    }
}
/**
 * 上述代码中，constructor方法和toString方法中，都出现了super关键字，它在这里表示父类的构造函数
 * 用来新建父类的this对象，子类必须在constructor中调用super方法，否则新建实例时会报错
 * 子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工，如果不调用super方法，
 * 子类就得不到this对象
 */
