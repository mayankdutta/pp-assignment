import React from "react";
import Sidebar from "./layouts/sidebar";
import Section from "./components/Section";
import { statsCards } from "./utils";
import NavigationBar from "./components/navigationBar";
import PersonalNotepad from "./components/PersonalNotepad";
import DepartmentAllocation from "./components/DepartmentWiseAllocation";
import Workflows from "./components/Workflows";
import OverdueTasks from "./components/OverdueTasks";
import WorkAllocated from "./components/WorkAllocated";
import { EmployeeProgress } from "./components/employeeProgress";

const TaskDashboard = () => {
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
