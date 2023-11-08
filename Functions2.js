// Arrays,Functions and objects
// expressions - another way to define a function
// create a variable, assign to function (not value),use variable
// diff - hoisting, use -arrow function and libraries.


function addNumbers(num1,num2){
    return num1+num2;
    
}
const firstValue = addNumbers(5,5)
const secondValue = addNumbers(12,13)

const add = function (num1,num2) {
    return num1+num2
}

const result = [firstValue,secondValue,add(100,200)]
console.log(result);
