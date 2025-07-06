import React, { useState } from "react";
import Sidebar from "./layouts/sidebar";
import Section from "./components/Section";
import {
  employeeData,
  employeeTabs,
  statsCards,
  workItems,
  workTabs,
} from "./utils";
import NavigationBar from "./components/navigationBar";

const TaskDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <NavigationBar />
      <div className="flex h-screen bg-gray-50">
        <Sidebar />

        <div className="flex-1 overflow-hidden flex flex-col">
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                Good Evening ! Ajay
              </h1>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors cursor-pointer">
                Add Widget
              </button>
            </div>

            <Section type="STATUS" data={statsCards} />

            <Section
              type="CARDS"
              title="Work Allocated"
              data={workItems}
              tabs={workTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <Section
              type="TABLE"
              title="Employee Wise Progress"
              data={employeeData}
              tabs={employeeTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default TaskDashboard;
