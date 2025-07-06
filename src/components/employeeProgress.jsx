export const EmployeeProgress = ({ employee }) => {
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
