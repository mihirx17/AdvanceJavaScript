class Student{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
let student1 = new Student("John", 20);
document.write(student1.getName() + "<br>");
//Constructor
class Person {
    constructor(){
    document.write("Constructor called");
    }
}