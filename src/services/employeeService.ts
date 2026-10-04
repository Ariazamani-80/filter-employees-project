import employeeList from "@/data/employees.json"
import { textFormat } from "@/utils/textFortmatter";

function getEmployees() {
    return employeeList
}

function filterEmployeesByDepartment(department: string) {
    return employeeList.filter((employee) => textFormat(employee.Department) === textFormat(department));
}

export {getEmployees, filterEmployeesByDepartment};