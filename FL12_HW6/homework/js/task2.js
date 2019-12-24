let a = prompt('input side a');
let b = prompt('input side b');
let c = prompt('input side c');

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if (isNaN(a) || isNaN(b) || isNaN(c)){
	alert('input values should be ONLY numbers');
} else if ( a === 0 || b === 0 || c === 0){
	alert('A triangle must have 3 sides with a positive definite length');
} else if ( a+b <= c || a+c <= b || b+c <= a ) {
	console.log('Triangle doesn’t exist');
} else if (a + b > c || a + c > b || b + c > a ){
	if (a === b && b === c) {
		console.log('Equilateral triangle');
	} else if (a === b || b === c || a === c) {
		console.log('Isosceles triangle');
	} else{
		console.log('Scalene triangle');
	}
}

