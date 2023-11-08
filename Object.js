// Arrays,functions and objects
// objects-key/value pairs,methods
// dot notation

const person = {
    name:"zara",
    lastName:"ziyan",
    age:"25",
    education:"true",
    married:"false",
    friends:["santosh","charan"],
    greetings: function(){
        console.log("Heyy zara!!")
    },
}

console.log(person.name);
console.log(person.married);
console.log(person.friends);
console.log(person.friends[0]);
person.greetings();

console.log(person["name"]);
console.log(typeof person);
console.log(typeof person["friends"]);