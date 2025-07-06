import { WorkCard } from "./workCard";
import { Ellipsis, ExternalLink } from "lucide-react";
import TabNavigation from "../common/tabNavigation";
import { EmployeeProgress } from "./employeeProgress";
import StatusCard from "./statusCard";

const DISPLAY_TYPE = {
  STATUS: "STATUS",
  TABLE: "TABLE",
  CARDS: "CARDS",
};

const Section = ({ type, title, activeTab, setActiveTab, tabs, data }) => {
  if (type === "STATUS") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {data.map((card) => (
          <StatusCard card={card} />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center space-x-4">
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Select Employee</option>
            </select>
            {type === DISPLAY_TYPE.TABLE && (
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <ExternalLink />
              </button>
            )}
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <Ellipsis />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {type === DISPLAY_TYPE.CARDS && (
        <div className="p-6 overflow-auto h-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {data.map((item) => (
              <WorkCard item={item} />
            ))}
          </div>
        </div>
      )}
      {type === DISPLAY_TYPE.TABLE && (
        <div className=" overflow-auto h-40">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-200">
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
                {data.map((employee) => (
                  <EmployeeProgress employee={employee} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;
