// callback function,higherorder function

// Higher order function -- accepts another function as an argument
// or returns another function as a result

// callback function --  passed to another function as an argument
// and executes inside that function


function morning(firstName){
    return `Goodmorning ${firstName}`;
}
function afternoon(firstName){
    return `Goodafternoon ${firstName}`;
}

function greet(firstName,cb){
    const myName = "sweety"
    console.log(`${cb(firstName)},My name is ${myName}`);
}
greet("Emma",morning)
greet("hary",afternoon)