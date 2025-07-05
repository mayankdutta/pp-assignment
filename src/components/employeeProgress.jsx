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
      <td className="py-4 px-4">
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${employee.completed}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {employee.completed}%
          </span>
        </div>
      </td>
    </tr>
  );
};
