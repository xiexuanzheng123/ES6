const foo = Object.freeze({});

//常规模式下，下面一行不起作用，
//严格模式下，报错
foo.prop = 123;

var constantize = (obj) => { //将对象彻底冻结 包括属性
    Object.freeze(obj);
    Object.keys(obj).forEach( (key,value) => {
        if( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
        }
    });
};