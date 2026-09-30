let favoriteFoods = ["Sinigang", "Palabok", "Sioimai"];

favoriteFoods.push("Ice Cream");
// ["Sinigang", "Palabok", "Sioimai", "Ice Cream"]

favoriteFoods.shift();
// ["Palabok", "Sioimai", "Ice Cream"]

for (const food of favoriteFoods) {
  console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);