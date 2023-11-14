// forEach
// Does not return new array

const people = [
    {name:"sweety",age:22,position:"leader"},
    {name:"smily",age:24,position:"doctor"},
    {name:"cuty",age:25,position:"actor"}
]

function showPerson(person){
    console.log(person.name.toUpperCase());
}
// people.forEach(showPerson);

people.forEach(function(item){
    console.log(item.name);
});