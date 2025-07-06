import { UserPlus } from "lucide-react";
import Card from "./Card";
import { tasks } from "../utils";
import InputSelect from "../common/inputSelect";

const OverdueTasks = () => {
  return (
    <Card
      title="Overdue tasks"
      actions={
        <>
          <InputSelect
            options={["Select Task", "Option 1", "Option 2"]}
          />
        </>
      }
    >
      <div className="overflow-x-auto overflow-auto h-40">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-200">
              {[
                "Task Name",
                "Assigned to",
                "Status",
                "Due date",
                "Reassign",
              ].map((item) => (
                <th className="text-left text-sm font-medium text-gray-500 px-4 py-4 pb-2 pt-2">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="py-4 px-4 text-sm text-gray-900">
                  <div className="font-medium">{task.name}</div>
                  <div className="sm:hidden text-xs text-gray-500 mt-1">
                    {task.assignedTo} • {task.dueDate}
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-900 hidden sm:table-cell">
                  {task.assignedTo}
                </td>
                <td className="py-4 px-4 hidden md:table-cell">
                  <button class="rounded-full bg-gray-500 text-xs p-2 bg-orange-200 color-orange-400 border-1 border-orange-400">
                    Overdue
                  </button>
                </td>
                <td className="py-3 px-4 text-sm text-gray-900 hidden lg:table-cell">
                  {task.dueDate}
                </td>
                <td className="py-3 px-4">
                  <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors">
                    <UserPlus size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default OverdueTasks;
