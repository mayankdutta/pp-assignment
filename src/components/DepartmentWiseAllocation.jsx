import { useState } from "react";
import { workTabs } from "../utils";
import Card from "./Card.jsx";
import { departmentAllocationData } from "../utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const DepartmentAllocation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Card
      title="Department wise allocation"
      tabs={workTabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className="overflow-auto h-40">
        {/* Chart */}

        {/* Legend */}
        <div className="px-6 pb-2 pt-2 py-6 flex items-center space-x-6 ">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-300 rounded-sm"></div>
            <span className="text-gray-600 text-sm">Tasks</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-300 rounded-sm"></div>
            <span className="text-gray-600 text-sm">Overdue Tasks</span>
          </div>
        </div>

        {/* Chart */}
        <div className="h-50">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={departmentAllocationData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="25%"
            >
              <XAxis
                dataKey="department"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Bar
                dataKey="tasks"
                stackId="a"
                fill="#A7D4C4"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="overdueTasks"
                stackId="a"
                fill="#F3D967"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* X-axis label */}
        <div className="text-center ">
          <span className="text-gray-500 text-sm">Departments</span>
        </div>
      </div>
    </Card>
  );
};

export default DepartmentAllocation;
