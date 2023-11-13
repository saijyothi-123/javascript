// Reference vs value
// Primitive data Types


// when assinging primitive data types value to a variable
// any changes are made directly to that value, without affecting
// original value

// When assining non-primitive data type value to a vvariable
// is done by reference so any changes will affect all the references.


// PRIMITIVE DATATYPE
let number1=10;
let number2=number1;
number2=20;

console.log(`the first number is ${number1}`);
console.log(`The second number is ${number2}`);

// NON-PRIMITIVE DATATYPE
let person1 = {name:"indhu"};
let person2 = person1;
// let person2 = {...person1};
person2.name = "pandu";

console.log(`The first name is ${person1.name}`);
console.log(`The second name is ${person2.name}`);