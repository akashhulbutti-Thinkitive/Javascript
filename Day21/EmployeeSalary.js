var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(empId, empName, empBasicSal, empMedicalAll) {
        if (empId === void 0) { empId = 0; }
        if (empName === void 0) { empName = ""; }
        if (empBasicSal === void 0) { empBasicSal = 0; }
        if (empMedicalAll === void 0) { empMedicalAll = 0; }
        this.empId = empId;
        this.empName = empName;
        this.empBasicSal = empBasicSal;
        this.empMedicalAll = empMedicalAll;
        this.hra = this.empBasicSal * 0.5;
        this.pf = this.empBasicSal * 0.12;
        this.pt = 200;
    }
    EmployeeDetails.prototype.calculateGrossSalary = function () {
        return (this.empBasicSal + this.hra + this.empMedicalAll);
    };
    EmployeeDetails.prototype.calculateNetSalary = function () {
        return (this.calculateGrossSalary() - this.pf + this.pt);
    };
    EmployeeDetails.prototype.printEMployeeDetails = function () {
        return "Id : " + this.empId + ", Name : " + this.empName + " , Gross Salary : " + this.calculateGrossSalary() + " , Net Salary : " + this.calculateNetSalary();
    };
    return EmployeeDetails;
}());
var emp1 = new EmployeeDetails(200, "Akash Hulbutti", 20000, 5000);
console.log(emp1.printEMployeeDetails());
