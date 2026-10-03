if (true) {
  let studentName = "Lorein";

  console.log(studentName); // works fine
}

try {
  console.log(studentName); // ReferenceError
} catch (error) {
  console.log("studentName is not defined outside the block");
}

function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log("Counter A:", counterA()); // 1
console.log("Counter A:", counterA()); // 2
console.log("Counter B:", counterB()); // 1
console.log("Counter B:", counterB()); // 2
console.log("Counter A:", counterA()); // 3