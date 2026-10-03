const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40, 50];

console.log(newNumbers); 


const user = {
  name: "Lorein",
  age: 21
};

const newUser = {
  ...user,
  email: "loreinmanluctao30@gmail.com"
};

console.log(newUser);


function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}

console.log(sum(10, 20, 30, 40)); 