let favoriteFoods = ["Sinigang", "Palabok", "Siomai"];

favoriteFoods.push("Ice Cream");
favoriteFoods.shift();

for (const food of favoriteFoods) {
  console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);