import React from "react";
import Sidebar from "./layouts/sidebar";
import StatsSection from "./components/statsSection";
import WorkAllocatedSection from "./components/workAllocatedSection";
import EmployeeProgressSection from "./components/employeeProgressSection";

const TaskDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Good Evening ! Ajay
            </h1>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
              Add Widget
            </button>
          </div>

          {/* Stats Cards */}
          <StatsSection />
          {/* Work Allocated Section */}
          <WorkAllocatedSection />

          {/* Employee Progress Section */}
          <EmployeeProgressSection />
        </main>
      </div>
    </div>
  );
};

export default TaskDashboard;
