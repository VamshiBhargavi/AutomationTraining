class Employee {
    #age = 30;   //private

    getAge() {   //getter: used to return value of a private field
        return this.#age;
    }
    setAge(age) {  //setter: used to updatevalue of a private field
        if (age < 20)
            console.log("Age must be greater than 20");
        else if (age > 65) {
            console.log("Age must be less than 65");
        }
        else {
            this.#age = age;
            console.log("Age updated to " + this.#age);
        }
    }
}

let emp1 = new Employee()
console.log(emp1.getAge());
emp1.setAge(10)
console.log(emp1.getAge());
emp1.setAge(67)
console.log(emp1.getAge());
