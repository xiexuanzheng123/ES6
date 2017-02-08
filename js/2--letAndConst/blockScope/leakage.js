var s = 'hello';
for(var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); //用来计数的循环变量泄露为全局变量