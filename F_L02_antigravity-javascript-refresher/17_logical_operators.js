const values = [0, "", "JavaScript", null, undefined, [], {}];

values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

// 0, "", null, and undefined are falsy.
// [] and {} are truthy.

const username = "Lorein";
const password = "javascript-refresher0204";

const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true

const isAdmin = true;
const isSubscriber = false;

const canWatch = isAdmin || isSubscriber;
console.log(canWatch); // true

console.log("" || "default");        // "default" (first truthy value)
console.log(username && "Welcome!");  // "Welcome!" (both values are truthy)
console.log(!canLogIn);              // false