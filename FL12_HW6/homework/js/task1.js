let a = prompt('input a');
let b = prompt('input b');
let c = prompt('input c');

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if (isNaN(a) || isNaN(b) || isNaN(c)){
	console.log('Invalid input data');
} else{

	let x;
	let x1;
	let x2;

	let D;

	D = b*b - 4*a*c;

	if (D<0) {

		console.log('no solution');
		console.log('D = ', D, ' < 0');

	} else if (D===0){

		x = -b/(2*a);
		console.log('x = ', Math.round(x));

	} else if (D>0){

		x1 = (-b + Math.sqrt(D))/(2*a);
		x2 = (-b - Math.sqrt(D))/(2*a);
		console.log('D = ', D, 'x1 = ', Math.round(x1), 'x2 = ', Math.round(x2));
	}

}
