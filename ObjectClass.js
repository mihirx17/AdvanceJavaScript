// ✅ Class with Direct Properties and Method
class Student {
    name = "Mihir";
    age = 23;
    company = "LTIMindtree";
  
    userInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Company: ${this.company}`);
    }
  }
  
  let student1 = new Student();
  student1.userInfo();
  
  document.write("<br>");
  
  // ✅ Constructor Example
  class Employee {
    constructor() {
      document.write("Constructor called<br>");
    }
  }
  let emp1 = new Employee();
  
  // ❌ INVALID: Multiple constructors (this will throw error)
  class User {
    // ❌ You CANNOT define multiple constructors in JavaScript
    // ✅ You must use default values or conditional logic instead
    constructor(name, age, company = "LTIMindtree") {
      this.name = name;
      this.age = age;
      this.company = company;
    }
  
    showInfo() {
      document.write(`Name: ${this.name}, Age: ${this.age}, Company: ${this.company}<br>`);
    }
  }
  
  let obj = new User("Mihir", 23);
  let obj1 = new User("Mihir", 23, "Deloitte");
  
  obj.showInfo();
  obj1.showInfo();
  class test{
    mymethod(name){
        console.log(`Parent class method called ${name} `)   
  }
  mymethod(name,age){
    console.log(`Parent class method called ${name} ${age}`);   
  }
}

  //method overriding is not possible in js
    // but we can use this method in js
  //constructor overloading is not possible in js  

  