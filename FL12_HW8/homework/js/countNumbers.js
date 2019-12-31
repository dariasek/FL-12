function countNumbers(inputStr){
    let len = inputStr.length;
    let check1;
    console.log('{')
    for (let i=0; i<len; i++){
        check1 = inputStr[i];

        if (isNaN(check1) === false){
            let numberCount=0;
            for (let count = 0; count<len; count++){
                if (inputStr[count] === check1){
                    numberCount++;
                }
            }
            console.log('\''+check1+'\' : '+numberCount + ', ');
        }
    }
    console.log('}')
}


countNumbers('');