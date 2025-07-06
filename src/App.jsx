import React from "react";
import Sidebar from "./layouts/sidebar";
import { statsCards } from "./utils";
import NavigationBar from "./components/navigationBar";
import PersonalNotepad from "./components/PersonalNotepad";
import DepartmentAllocation from "./components/DepartmentWiseAllocation";
import Workflows from "./components/Workflows";
import OverdueTasks from "./components/OverdueTasks";
import WorkAllocated from "./components/WorkAllocated";
import { EmployeeProgress } from "./components/employeeProgress";
import { PanelsTopLeft } from "lucide-react";
import StatusCard from "./components/statusCard";

const TaskDashboard = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex h-[calc(100vh-8.2vh)] bg-gray-50">
        <Sidebar />

        <div className="flex-1 overflow-hidden flex flex-col">
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                Good Evening ! Ajay
              </h1>
              <button className="text-gray-600 hover:text-gray-800 text-xs font-medium sm:font-small md:font-small transition-colors cursor-pointer flex items-center gap-x-2 border-2 border-gray-300 p-1 rounded-xl">
                <PanelsTopLeft />
                Add Widget
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {statsCards.map((card) => (
                <StatusCard card={card} />
              ))}
            </div>

            <WorkAllocated />
            <EmployeeProgress />
            <div className="grid gap-4 mb-6 grid-cols-1 lg:grid-cols-2">
              <Workflows />
              <OverdueTasks />
              <PersonalNotepad />
              <DepartmentAllocation />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TaskDashboard;
