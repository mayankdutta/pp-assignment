import Card from "./Card";
import InputSelect from "../common/inputSelect";

import { useState } from "react";
import { employeeTabs, employeeData } from "../utils";

export const EmployeeProgressRows = ({ employee }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4 text-sm text-gray-800 font-medium">
        {employee.name}
      </td>
      <td className="py-4 px-4 text-sm text-gray-600">{employee.department}</td>
      <td className="py-4 px-4 text-sm text-gray-600">{employee.assigned}</td>
      <td className="py-4 px-4 text-sm text-gray-600">{employee.ongoing}</td>
      <td className="py-4 px-4 text-sm text-gray-600">{employee.overdue}</td>
      <td className="py-4 px-4 text-sm text-gray-600">{employee.completed}%</td>
    </tr>
  );
};

export const EmployeeProgress = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Card
      title="Employee Wise Progress"
      actions={
        <>
          <InputSelect
            options={["Select Employee", "Option 1", "Option 2"]}
          />
        </>
      }
      tabs={employeeTabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className="overflow-x-auto overflow-auto h-40">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-200 ">
              {[
                "Name",
                "Department",
                "Assigned",
                "Ongoing",
                "Overdue",
                "Completed",
              ].map((item) => (
                <th className="text-left text-sm font-medium text-gray-500 px-4 py-4 pb-2 pt-2">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <EmployeeProgressRows employee={employee} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
