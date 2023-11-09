// Array Properties and Methods

let fruitNames = ["appple","banana","mango","cherries"]

// length
console.log(fruitNames.length);
console.log(fruitNames[fruitNames.length-1]);

// concat
const flowerNames = ["rose","lilly"]
const allNames = fruitNames.concat(flowerNames);
console.log(allNames);

// reverse
console.log(allNames.reverse());

// push
allNames.push("grapes");
console.log(allNames);

// pop
allNames.pop();
console.log(allNames);

// unshift
allNames.unshift("grapes");
console.log(allNames);

// shift
allNames.shift();
console.log(allNames);