const score = 72;
const result = score >= 70 ? "Pass" : "Fail";
console.log(result); // 
 
const num = 7;
console.log(num % 2 === 0 ? "even" : "odd"); // 

const user = { name: "Lorein" }; // user.address is undefined
 
console.log(user.address?.city); // undefined -- optional chaining prevents error
const age = 0;
console.log(age || 18); // 18 -- wrong! 0 is falsy, so || overrides it
console.log(age ?? 18); // 0  -- right, ?? only replaces null/undefined
