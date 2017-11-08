var foo = 'bar';
var baz = {foo};
console.log(baz);

/**
 * 方法也可以简写
 */
var o = {
    method() {
        return 'Hello';
    }
};
/**
 * commonJs模块输出变量
 */
var ms = {};
function getItem(key) {
    return key in ms ? ms[key] : null;
}
function setItem(key, value) {
    ms[key] = value;
}
function clear() {
    ms = {};//清空对象
}
module.exports = { getItem, setItem, clear };

/**
 * 属性的赋值器和取值器
 */
var cart = {
    _wheels: 4,
    get wheels() {
        return this._wheels;
    },
    set wheels(value) {
        if(value < this._wheels) {
            throw new Error('数值太小了');
        }
        this._wheels = value;
    }
}
console.log(cart.wheels);
/**
 * 1 get和set是方法，因为是方法，所以可以进行判断
 * 2  属性名字前面加下划线
 */
var persion = {
    _name: 'chen',
    age: 21,
    set name(name) {
        this._name = name;
    },
    get name() {
        return this._name;
    }
}
console.log(persion.name);
persion.name = 'lunc';
console.log(persion.name);

var p = {
    name: 'chen',
    work: function() {
        console.log('wording...');
    },
    _age: 18,
    get age() {
        return this._age;
    },
    set age(val) {
        if(val < 0 || val > 100) {
            throw new Error('invalid value');
        } else {
            this._age = val;
        }
    }
};
console.log(p.age);
