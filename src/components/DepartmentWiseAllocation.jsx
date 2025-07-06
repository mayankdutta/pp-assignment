import { useState } from "react";
import { workTabs } from "../utils";
import Card from "./Card.jsx";
import TabNavigation from "../common/tabNavigation.jsx";
const DepartmentAllocation = () => {
  const data = [
    { name: "Dept 1", tasks: 10, overdue: 5 },
    { name: "Dept 2", tasks: 25, overdue: 10 },
    { name: "Dept 3", tasks: 45, overdue: 12 },
    { name: "Dept 4", tasks: 60, overdue: 18 },
    { name: "Dept 5", tasks: 65, overdue: 20 },
    { name: "Dept 6", tasks: 70, overdue: 25 },
    { name: "Dept 7", tasks: 75, overdue: 30 },
  ];

  const maxValue = Math.max(...data.map((d) => d.tasks + d.overdue));
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Card
      title="Department wise allocation"
      tabs={workTabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className=" overflow-auto h-40">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-300 rounded"></div>
            <span className="text-gray-600">Tasks</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-300 rounded"></div>
            <span className="text-gray-600">Overdue Tasks</span>
          </div>
        </div>

        {/* Chart */}
        <div className="flex items-end justify-between h-40 space-x-1 sm:space-x-2">
          {data.map((item, index) => {
            const totalHeight = ((item.tasks + item.overdue) / maxValue) * 100;
            const taskHeight = (item.tasks / maxValue) * 100;

            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full max-w-12 bg-gray-100 rounded-t relative"
                  style={{ height: `${totalHeight}%` }}
                >
                  <div
                    className="absolute bottom-0 w-full bg-green-300 rounded-t"
                    style={{ height: `${(taskHeight / totalHeight) * 100}%` }}
                  ></div>
                  <div
                    className="absolute top-0 w-full bg-yellow-300 rounded-t"
                    style={{
                      height: `${(((item.overdue / maxValue) * 100) / totalHeight) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center text-sm text-gray-500">Departments</div>
      </div>
    </Card>
  );
};

export default DepartmentAllocation;
