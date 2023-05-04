console.log(5 + null )   // returns 5         because null is converted to 0
console.log("5" + null)  // returns "5null"   because null is converted to "null"
console.log("5" + 2  )   // returns "52"      because 2 is converted to "2"
console.log("5" - 2)     // returns 3         because "5" is converted to 5
console.log("5" * "2")   // returns 10        because "5" and "2" are converted to 5 and 2
console.log("5" / "2")

var x = "";
console.log(Boolean(x));
console.log(Number(x));

var x = [10,20];
console.log(Boolean(x));
console.log(String(x));
console.log(Number(x));


var x = "0";
console.log(Boolean(x));
console.log(String(x));
console.log(Number(x));