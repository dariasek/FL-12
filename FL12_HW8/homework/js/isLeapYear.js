function isLeapYear(myDate){
    let newDate = new Date(myDate);
    let newYear = 1900 + newDate.getYear();
    let ch = newYear%4; 
    let outPut = '';

    if (isNaN(ch)){
        outPut = 'Invalid Date'
    } else if (ch !== 0 ){
        outPut = newYear +' is not a leap year';
    } else if (ch === 0){
        outPut = newYear +' is a leap year';
    } 

    return outPut;
}

console.log(isLeapYear('1812-06-01 00:00:00'));