// ✅ Parent class 'a'
class a {
    username = "Mihir Gupta"; // Public field (automatically available in every instance)

    constructor(name) {
        // Constructor of class 'a'
        document.write(`Parent Constructor called ${name}<br>`);
    }

    showInfo() {
        // Method in class 'a'
        document.write(`Name: ${this.username}<br>`);
    }
}

// ✅ Child class 'B' extends parent class 'a'
class B extends a {
    constructor() {
        super("Shivangi"); // Calls parent constructor with the value "Shivangi"
        document.write("Child class constructor called<br>");
    }
}

let obj2 = new B();     // When we create an object of B:
                        // → First parent constructor is called (via super())
                        // → Then child constructor code runs
obj2.showInfo();        // Calls showInfo() method from parent class 'a'


// ✅ Another base class 'Student_'
class Student_ {
    name = "MihirStudent";  // Property of Student_
    Stream = "MCA";         // Another property

    showInfos() {
        // Method to show student info
        document.write(`Name: ${this.name} ${this.Stream}<br>`);
    }
}

// ✅ 'Teacher' class extends 'Student_'
class Teacher extends Student_ {
    name = "MihirTeacher"; // This property OVERRIDES the parent 'name' field
    subject = "Maths";     // New property only in 'Teacher'

    showInfo() {
        // This method is unique to Teacher
        document.write(`Name: ${this.name} ${this.subject}<br>`);
    }
}

let obj3 = new Teacher();   // Creates object of Teacher class
obj3.showInfo();            // Calls Teacher's version of showInfo() (prints name + subject)
obj3.showInfos();           // Inherited from Student_ class (prints name + stream)
