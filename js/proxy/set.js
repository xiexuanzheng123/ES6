/**
 * set
 */
let validator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if(value > 200) {
                throw new RangeError('The age seems invalid');
            }
            obj[prop] = value;
        }
        obj[prop] = value;
    }
};
let persion = new Proxy({}, validator);
//persion.age = 10;
console.log(persion.age);

var handler = {
    get (target, key) {
        invariant(key, 'get');
        return target[key];
    },
    set (target, key, value) {
        invariant(key, 'set');
        return true;
    }
};
function invariant (key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}
var target = {};
var proxy = new Proxy(target, handler);
proxy._prop;