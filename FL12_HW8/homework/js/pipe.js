function addOne(x){
    return x+1;
}

function main(Arg, ...args){
    let len = args.length;
    for (let i=0; i<len; i++){
        Arg = args[i](Arg);
    } 
    return Arg;   
}

console.log(main(2,addOne));
