const students = [
  { name: "Lorein", grade: 88 },
  { name: "Priya", grade: 95 },
  { name: "Jayda", grade: 42 },
];

const passing = students.filter(s => s.grade >= 60);

console.log(passing.map(s => s.name)); // ["Lorein", "Priya"]

const priya = students.find(s => s.name === "Priya");

console.log(priya); // { name: "Priya", grade: 95 }

console.log(students.some(s => s.grade < 60)); // true

console.log(students.every(s => s.grade >= 60)); // false

const ranked = [...students].sort((a, b) => b.grade - a.grade);

console.log(ranked.map(s => s.name)); // ["Priya", "Lorein", "Jayda"]
