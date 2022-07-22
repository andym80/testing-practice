export function stringLength(string) {

    let count = 0;

    for(let char of string) {
        count++;
    }

    return count;
}
// Testing the function with the following inputs:
console.log(stringLength('hello')); // 5
console.log(stringLength('abc')); // 3
console.log(stringLength('0123456789')); // 26


//TASK 2 "reverseString"
// Write a function that takes a string as an argument and returns the string in reverse order.
export function reverseString(string){
	let reversed = '';

	for(let char of string) {
		reversed = char + reversed;
	}

	return reversed;
}

//testing the function with the following inputs:
console.log(reverseString('hello')); // olleh
console.log(reverseString('abc')); // cba
console.log(reverseString('0123456789')); // zyxwvutsrqponmlkjihgfedcba

// task 3
export class Calculator {
	constructor() {}

	add(a, b) {
	  return a + b;
	}

	sub(a, b) {
	  return a - b;
	}

	multi(a, b) {
	  return a * b;
	}

	div(a, b) {
	  if (b !== 0) {
		return a / b;
	  }
	}
}

  // Testing the function with the following inputs:
const calculator = new Calculator();

  console.log(calculator.add(1, 2)); // 3
  console.log(calculator.sub(1, 2)); // -1
  console.log(calculator.multi(1, 2)); // 2
  console.log(calculator.div(1, 2)); // 0.5

describe('Calculator', () => {
	it('should add two numbers', () => {
		const calculator = new Calculator();
		expect(calculator.add(1, 2)).toBe(3);
	}
	);
	it('should subtract two numbers', () => {
		const calculator = new Calculator();
		expect(calculator.sub(1, 2)).toBe(-1);
	}
	);
	it('should multiply two numbers', () => {
		const calculator = new Calculator();
		expect(calculator.multi(1, 2)).toBe(2);
	}
	);
	it('should divide two numbers', () => {
		const calculator = new Calculator();
		expect(calculator.div(1, 2)).toBe(0.5);
	}
	);

}
);

//task 4
const str = 'hello';
const arr = str.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const str2 = arr.join(" ");
console.log(str2);

