import Card from "./Card.jsx";
import {useState} from "react";
import WorkCard from "./workCard.jsx";
import {workItems, workTabs} from "../utils.jsx";
import InputSelect from "../common/inputSelect.jsx";

const WorkAllocated = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Card
      title="Work Allocated"
      actions={
        <>
          <InputSelect
            options={["Select Work", "Option 1", "Option 2"]}
          />
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
