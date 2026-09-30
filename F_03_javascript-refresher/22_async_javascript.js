// Callback with setTimeout

function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Lorein", age: 21 });
  }, 1000); // Simulate a 1-second delay
}

fetchUserMock((user) => {
  console.log("Got user:", user);
});


// Promise with async/await

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Lorein", age: 21 }), 1000);
  });
}

async function showUser() {
  try {
    const user = await fetchUser();
    console.log("Got user:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}

showUser();


// Fetch using callback

function getTodo(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
}

function handleTodo(error, data) {
  if (error) {
    console.error("Error fetching todo:", error);
  } else {
    console.log("Fetched todo:", data);
  }
}

getTodo(handleTodo);


// Fetch using Promise and .then()

function getTodoPromise() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json());
}

getTodoPromise()
  .then(todo => console.log("Todo:", todo))
  .catch(error => console.error("Something went wrong:", error));


// Fetch using async/await

async function getTodoAsync() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const data = await response.json();

  return data;
}

async function fetchTodo() {
  try {
    const todo = await getTodoAsync();
    console.log("Todo:", todo);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

fetchTodo();


// Synchronous vs Asynchronous

let name = "Lorein";
let age = 21;
let address = "Purok 1, Brgy. Sampaloc, Apalit, Pampanga";

setTimeout(() => {
  console.log("This message is printed after 2 seconds");
}, 2000);

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);