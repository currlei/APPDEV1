const aboutMe = {
  fullName: "Lorein F. Manluctao",
  age: 21,
  course: "Bachelor of Science in Information Systems",
  introduce: function () {
    console.log(`Hello, my name is ${this.fullName}, I am ${this.age} years old, and I am currently taking up ${this.course}.`);
  }
};

aboutMe.hobby = "Singing";

aboutMe.introduce();
console.log(`My hobby is ${aboutMe.hobby}`); //not part of the introduce method, but a separate property of the object