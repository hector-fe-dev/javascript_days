function sum (x,y){
    return x + y;
}

function calc(x,y,callback){
    return callback(x,y);
}

console.log(calc(2,2,sum))