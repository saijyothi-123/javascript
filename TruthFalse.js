// truthy and falsy
// "",'',``,0,-0,NaN,false,null,undefined ---> FALSE

const bool1 = true;
const bool2 = 2>1;

if (bool1){
    console.log("hey this is working");
}
if (bool2){
    console.log("hey this is also working");
}


// let text = 0;

// if (text) {
//     console.log("Truthy");
// }else{
//     console.log("Falsy");
// }