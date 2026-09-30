const person = { name: "Lorein", age: 21 };
const { name, age } = person;
console.log(name, age); 
 
const hobbies = ["singing", "diamond painting", "cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
 
function printName({ name }) {
  console.log(name);
}

printName(person); 
