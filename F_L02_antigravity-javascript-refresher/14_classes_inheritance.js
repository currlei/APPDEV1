class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello, I am " + this.name);
  }
}

class Student extends Person {
  study() {
    console.log(this.name + " is practicing JavaScript.");
  }
}

const student = new Student("Lorein");

student.sayHello();
student.study();