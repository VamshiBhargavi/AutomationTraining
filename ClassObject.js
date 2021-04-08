class Employee{
    constructor(name, salary, employeeId){
        this.name= name;
        this.salary = salary;
        this.employeeId=employeeId;
    }
    start(){
        console.log(this.name+" is started");
    }
    stop(){
        console.log(this.name+" is stopped");
    }
}

let Staff = new Employee("Vamshi", "4 Lakhs per annum", "18461");
console.log(Staff.name);

Staff.start()
Staff.stop()

