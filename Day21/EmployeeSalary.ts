class EmployeeDetails{
    empId: number;
    empName: string;
    empBasicSal: number;
    empMedicalAll: number;
    hra: number;
    pf: number;
    pt: number;
    constructor(empId:number=0,empName:string="",empBasicSal:number=0,empMedicalAll:number=0){
        this.empId= empId;
        this.empName= empName;
        this.empBasicSal= empBasicSal;
        this.empMedicalAll= empMedicalAll;
		this.hra=this.empBasicSal*0.5;
		this.pf=this.empBasicSal*0.12;
		this.pt=200;
    }

    calculateGrossSalary():number{
        return (this.empBasicSal+this.hra+this.empMedicalAll);
    }

    calculateNetSalary():number{
        return (this.calculateGrossSalary()-this.pf+this.pt);
    }

    printEMployeeDetails():string{
        return "Id : "+this.empId+", Name : "+this.empName+" , Gross Salary : "+this.calculateGrossSalary()+" , Net Salary : "+this.calculateNetSalary();
    }
}

var emp1 = new EmployeeDetails(200,"Akash Hulbutti",20000,5000);

console.log(emp1.printEMployeeDetails());