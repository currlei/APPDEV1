const raw = "  Lorein Manluctao ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase()); 
console.log(clean.includes("Manluctao")); 
console.log(clean.slice(0, 5)); 
console.log(`Full name: ${first} ${last}`);

console.log(parseInt("305px"));   // 305
console.log((19.9999).toFixed(3)); // "20.000" 
console.log((19.9999).toFixed(2)); // "20.00" 

 
const result = "abc" / 2;
console.log(result);          // NaN
console.log(Number.isNaN(result)); // true


