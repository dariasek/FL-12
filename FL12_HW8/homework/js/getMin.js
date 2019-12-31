function getMin(){
    let min = arguments[0];
    let len = arguments.length;
    for(let i = 0; i<len; i++){
        if (arguments[i]<min){
            min = arguments[i];
        }
    }
    return min;
}

console.log(getMin(3,2,1,7,-5,-7.6));