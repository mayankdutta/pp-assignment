import { workItems, workTabs } from "../utils.jsx";
import Card from "./Card.jsx";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import WorkCard from "./WorkCard.jsx";

const WorkAllocated = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Card
      title="Work Allocated"
      actions={
        <>
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option>Select Employee</option>
          </select>
        </>
      }
      tabs={workTabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className="p-6 overflow-auto h-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {workItems.map((item) => (
            <WorkCard item={item} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default WorkAllocated;
