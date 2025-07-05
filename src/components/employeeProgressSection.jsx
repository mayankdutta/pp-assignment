import React, { useState } from "react";
import { EmployeeProgress } from "./employeeProgress";
import { MoreVertical } from "lucide-react";
import { employeeData, employeeTabs } from "../utils";
import TabNavigation from "../common/tabNavigation";

const EmployeeProgressSection = () => {
  const [employeeActiveTab, setEmployeeActiveTab] = useState("tasks");
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Employee wise progress
          </h2>
          <div className="flex items-center space-x-4">
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Select Employee</option>
            </select>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Employee Tabs */}
        <div className="flex space-x-6">
          <TabNavigation 
            tabs= {employeeTabs}
            activeTab={employeeActiveTab}
            setActiveTab={setEmployeeActiveTab}
          />
        </div>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Department
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Assigned
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Ongoing
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Overdue
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Completed
                </th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((employee) => (
                <EmployeeProgress employee={employee} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProgressSection;
