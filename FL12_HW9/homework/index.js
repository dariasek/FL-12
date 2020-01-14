function convert(){
    let len = arguments.length;
    let myArray = [];
    for(let i=0; i<len ; i++){
        if (typeof arguments[i] === 'string'){
            let strToNum = parseInt(arguments[i]);
            myArray.push(strToNum)
        } else if(typeof arguments[i] === 'number'){
            let numToStr = arguments[i].toString();
            myArray.push(numToStr); 
        }             
    }
    return myArray;
}

console.log(convert('5','6',1,2,3));


function executeForEach(arr, myFunc){
    let len = arr.length;
    for(let i=0; i<len; i++){
        myFunc(arr[i]);        
    }
}

executeForEach([1,2,3,0.5], function(el){ 
    console.log(el*2)
});


function mapArray(arr, myFunc){
    let len = arr.length;
    let strToNum;
    let myArray = [];

    for(let i=0; i<len; i++){
        if (typeof arr[i] === 'string'){
            strToNum = parseInt(arr[i]);
            myArray.push(myFunc(strToNum));
        } else{
            myArray.push(myFunc(arr[i]));
        }
    }

    return myArray;
}

console.log(mapArray([2,1,'3','9'], function(el){
    return el+3
}))


function filterArray(arr, myFunc){
    let len = arr.length;
    let myArray = [];
    for(let i=0; i<len; i++){
        if (myFunc(arr[i])){
            myArray.push(arr[i]);
        }
    }
    return myArray;
}

console.log(filterArray([1,2,4,5,-2], function(el){ 
    return el%2 === 0
}))


function flipOver(myStr){
    let len = myStr.length;
    let newStr = '';
    for (let i=len-1; i>=0; i--){
        newStr = newStr + myStr[i];
    }
    return newStr;
}

console.log(flipOver('hey world'));


function makeListFromRange(arr){
    let start = arr[0];
    let end = arr[1];
    let myArray = [];
    for (let i=start; i<end+1; i++){
        myArray.push(i);
    }
    return myArray;
}

console.log(makeListFromRange([2,7]));


function getArrayOfKeys(arr, myKey){ 
    let myArray = [];  
    executeForEach(arr, function(x){
        myArray.push(x[myKey]);
    })

    return myArray
}

const actors = [
    {name: 'tommy', age:36},
    {name: 'lee', age:28}
];

console.log(getArrayOfKeys(actors, 'name'));


function substitute(arr){
    let a = mapArray(arr, function(el){ 
        if(el < 30){ 
            el = '*'; 
        } return el;
    })
    return a;
}

console.log(substitute([35,20,1,45]));

function getPastDay(currentDate, Past){
    let newDate = new Date(currentDate);
    let newDay = currentDate.getDate() - Past;
    newDate.setDate(newDay);
    console.log(newDate.getDate());
    return newDate;
}

const date = new Date(2019,0,2);
console.log(getPastDay(date, 2))


function formatDate(a){

    if (typeof a === 'undefined'){
        a = new Date();
    }
    let myDate = new Date(a);
    let myDay = myDate.getDate();
    let myMonth = myDate.getMonth() + 1;
    let myYear = myDate.getFullYear();
    let myHours = myDate.getHours();
    let myMinuties = myDate.getMinutes();
    let newDate;

    if (myHours < 10){
        newDate = '"' + myYear + '/' + myMonth + '/' + myDay + ' 0' + myHours + ':' + myMinuties + '"';
    } else {
        newDate = '"' + myYear + '/' + myMonth + '/' + myDay + ' ' + myHours + ':' + myMinuties + '"';
    }

    return newDate;
}

console.log(formatDate('6/3/2018 19:15:00'));