import {stringLength} from './index.js';
import {reverseString} from './index.js';
import {Calculator} from './index.js';

test('add two numbers', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('abc')).toBe(3);
    expect(stringLength('abcdefghijklmnopqrstuvwxyz')).toBe(26);
}
);

test('should add two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
    }
);
test('should subtract two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.sub(1, 2)).toBe(-1);
}
);
test('should multiply two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.multi(1, 2)).toBe(2);
}
);
test('should divide two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.div(1, 2)).toBe(0.5);
}
);

