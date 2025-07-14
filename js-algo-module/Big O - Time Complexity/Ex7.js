const employees = {
  ax01: { name: "Ray", age: 28, salary: 1300 },
  qs84: { name: "Lucius", age: 31, salary: 840 },
  bg33: { name: "Taylor", age: 18, salary: 2700 }
};

const findEmployeeSalary = function(empId){
    return employees[empId].salary;
}

employeeID="bg33";
console.log(findEmployeeSalary(employeeID));