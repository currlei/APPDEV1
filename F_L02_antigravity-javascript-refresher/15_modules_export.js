const userInfo = { name: "Lorein", age: 21 };

function greet() {
  return "Hello, " + userInfo.name + "! You are " + userInfo.age + " years old.";
}

export default greet;
export { userInfo };