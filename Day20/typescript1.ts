class Employee{
     constructor(empId,empName,empSalary){
        this.empId=empId;
        this.empName=empName;
        this.empSalary=empSalary;
    }

    getAll(){
        return "EMPLOYEE : [EMPID:"+this.empId+",EMPNAME:"+this.empName+",EMPSALARY:"+this.empSalary+"]";
    }
}

let emp1 = new Employee(1,"Akash",90000);
console.log(emp1.getAll());

