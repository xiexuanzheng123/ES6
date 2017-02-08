var { foo, bar } = { foo: "aaa", bar: "bbb" }; //完整写法===>>var {foo: foo, bar: bar} = {foo: "aaa", bar: "bbb"}
foo //"aaa"

var { foo: baz } = { foo: "aaa", bar: "bbb" };
baz ///"aaa"

let obj = { first: "hello", last: "world" };
let { first: f, last: l } = obj;
f // hello
l // world

// 解构赋值时，变量的声明和赋值时一体的(let和const声明中出错)
// let foo;
// let { foo } = { foo: 1 }; ///SyntaxError: Duplicate declaration "foo";

// let baz;
// let { bar: baz } = { bar: 1 }; //SyntaxError: Duplicate declaration "baz";

let foo;
({ foo } = { foo: 1 });
let baz;
({bar: baz} = {bar: 1});

//嵌套
var obj = {
    p: ['hello', { y: 'world' }]
};
var  { p: [x, { y }] } = obj;
x //"hello"
y //"world"

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var { loc: { start: { line }} } = node;
line //1
loc //error: loc is undefinded
start //error: start is undefinded