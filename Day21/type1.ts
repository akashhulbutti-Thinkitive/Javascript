class Employee{
    empId: number;
    empName: string;
    empSalary: number;
    constructor(empId:number=0,empName:string="",empSalary:number=0){
        this.empId=empId;
        this.empName=empName;
        this.empSalary=empSalary;
    
    }

    printAllEmp():string{
        return "[EMPLOYEE : {empId : "+this.empId+" , empName : "+this.empName+" , empSalary : "+this.empSalary+" }]";
    }
}

console.log(new Employee(100,"EMPLOYEE 1",500000).printAllEmp());