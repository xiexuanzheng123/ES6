// function example() {
//     return [1,2,3];
// }
// var [a,b,c] = example();

function example(){
    return {
        foo:1,
        bar:2
    };
}
var {foo,bar} = example();