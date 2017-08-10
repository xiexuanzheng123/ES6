
/***双重默认值 */
function fetch(url, { method = 'GET' } = {}) {
    console.log(method);
}
fetch('http://baidu.com');//没有第二个参数时，函数的默认值就会生效， 然后是解构赋值的默认值生效,这里的默认值是空对象