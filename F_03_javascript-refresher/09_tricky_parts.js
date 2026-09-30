console.log(5 == "5");   // true
console.log(5 === "5");  // false
 
let notDefined;
let empty = null;
 
console.log(notDefined); // undefined
console.log(empty);      // null

const person = {
  name: "Maria",

  regularMethod: function () {
    console.log(this.name);
  },

  arrowMethod: () => {
    console.log(this.name);
  }
};
