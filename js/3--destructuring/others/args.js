function move({x=0,y=0} = {}) { //
    return [x,y];
}
move({x:3,y:8});//[3,8]
move({x:3});//[3,8]
move({});//[0,0]
move();//[0,0]

/***不一样的结果 */
function move({x,y} = {x:0,y:0}){ //为参数指定默认值，而不是为xy指定默认值
    return [x,y];
}

move({x:3,y:8});//[3,8]
move({x:3});//[3,undefined]
move({});//undefined,undefined
move();//[0,0]