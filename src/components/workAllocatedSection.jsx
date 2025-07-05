import { WorkCard } from "./workCard";
import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { workTabs, workItems } from "../utils";
import TabNavigation from "../common/tabNavigation";

const WorkAllocatedSection = () => {
  const [activeTab, setActiveTab] = useState("tasks");
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Work Allocated
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

        {/* Tabs */}
        <TabNavigation
          tabs={workTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workItems.map((item) => (
            <WorkCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkAllocatedSection;
