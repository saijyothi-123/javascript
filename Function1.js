// return
// Array,functions,objects

const wallHeight = 80;

function calculate(value){
    const newValue = value * 2.54;
    // console.log("The value in cm is:"+value*2.54+" cm");
    // return value;
    return newValue;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
