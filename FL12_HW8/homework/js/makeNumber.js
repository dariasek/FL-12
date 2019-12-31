function makeNumber(inputStr){
    let mainNumber = '';
    let len = inputStr.length;
    let check;
    for (let i=0; i<len; i++){
        check = inputStr[i];
        if (isNaN(check) === false){
            mainNumber += check;
        }
    }
    return mainNumber;
}

console.log(makeNumber('sdfgq23o4l5'));

