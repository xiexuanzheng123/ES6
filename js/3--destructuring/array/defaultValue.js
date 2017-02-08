var [foo = true] = [];
foo // true

//[x, y = 'b'] = ['a'];   //x='a' y = 'b'
let [x, y = 'b'] = ['a', undefined];    // x = 'a' y = 'b'
/**严格相等运算符（===），一个数组成员不严格等于undefined，默认值不生效 */

var  [x  = 1] = [null];
x //null null不严格等于undefined，默认值不生效，所以x = null