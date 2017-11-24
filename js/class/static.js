//静态属性是指Class本身的属性，而不是定义在实例对象this的属性

class Foo {
    //prop: 2 class内部只有静态方法，没有静态属性
}
Foo.prop = 1;//定义一个静态属性
console.log(Foo.prop);

//类的实例属性
class MyClass {
    myProp = 42;//实例属性，
    constructor() {
        console.log(this.myProp);
    }
}

class MyClass1 {
    static myStaticProp = 42;//类的静态属性
    constructor() {
        console.log(MyClass1.myProp);
    }
}