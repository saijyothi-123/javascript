// Program to find the largest among the three numbers
const prompt=require("prompt-sync")();
var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));
var num3 = parseInt(prompt("Enter third number: "));
var largest;

//conditions
if(num1 >= num2 && num1 >= num3) 
    largest = num1;

else if (num2 >= num1 && num2 >= num3) 
    largest = num2;

else 
    largest = num3;

console.log("The largest number is " + largest);