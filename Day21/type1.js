var Employee = /** @class */ (function () {
    function Employee(empId, empName, empSalary) {
        if (empId === void 0) { empId = 0; }
        if (empName === void 0) { empName = ""; }
        if (empSalary === void 0) { empSalary = 0; }
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
    }
    Employee.prototype.printAllEmp = function () {
        return "[EMPLOYEE : {empId : " + this.empId + " , empName : " + this.empName + " , empSalary : " + this.empSalary + " }]";
    };
    return Employee;
}());
console.log(new Employee(100, "EMPLOYEE 1", 500000).printAllEmp());
