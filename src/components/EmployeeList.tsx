
import EmployeeItem from "@/components/EmployeeItem";
import type { EmployeeType } from "@/types/employee";

type EmployeeListProps = {
  employeeList: EmployeeType[];
};

function EmployeeList({employeeList}: EmployeeListProps) {
  return (
    <div className="container mx-auto px-4 my-4">
      <ul className="grid md:grid-cols-3 gap-4 items-center">
        {employeeList.map((employee) => (
          <EmployeeItem key={employee.Id} employee={employee} />
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
