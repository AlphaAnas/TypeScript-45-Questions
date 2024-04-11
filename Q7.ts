//  Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number

import * as input_ from "prompt-sync";

let input = input_();

let operation: string = input("Enter which operation (+, -, /, *) : ").trim();
while(true)
  {
    if (operation == '+' || operation == '-' || operation == '/' || operation == '*')
      {
        break;
      
      }
    else
      {
        operation = input("Enter which operation (+, -, /, *) : ").trim();
  }
}


const number1: number = parseFloat(input("Enter first number: "));
const number2: number = parseFloat(input("Enter second number: "));
const answer: number = calculator(number1, number2);
console.log(`Result of ${number1} ${operation} ${number2} is ${answer}`);

function calculator(a: number, b: number): number {
  if (operation == "+") {
    return a + b;
  } else if (operation == "-") {
    return a - b;
  } else if (operation == "/") {
    if (b != 0) {
      return a / b;
    } else {
      throw new Error("Division by zero !!");
    }
  } else if (operation == "*") {
    return a * b;
  } else {
    throw new Error(
      "Input undefined, only enter '+', '-', ' / ', or '*' signs "
    );
  }
}
