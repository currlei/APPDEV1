function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Something went wrong:", error.message);
}

const user = { name: "Lorein", age: 21, isStudent: true };
 
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Lorein","age":21,"isStudent":true}'
 
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Lorein"
console.log(typeof jsonString, typeof parsedUser); // string object
