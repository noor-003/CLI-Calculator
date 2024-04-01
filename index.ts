#! /usr/bin/env node
//it tells that it is not an oridinary file but it tells that cide will be executable on terminal.
//it will be available to publish and can be executable by npx tool
//sha#bang!

import inquirer from "inquirer";

// here user will wait 
// [] Array
// {} Object
// message is key
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of these operators to perform operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
console.log(answer);

//Conditional Statements
const calculate = (num1: number, operator: string, num2: number): number => {
    switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num1 / num2;
      default: throw new Error('Invalid operator');
    }
  };
  
// Conditional Statements
if (answer.operator === "Addition") 
{
    // "Your Value is: " 
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") 
{
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") 
{
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") 
{
    console.log(answer.firstNumber / answer.secondNumber);
}
else
{
    console.log("Invalid Input......")
}