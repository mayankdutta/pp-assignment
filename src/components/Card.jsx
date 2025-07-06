import React from "react";
import { MoreHorizontal } from "lucide-react";
import TabNavigation from "../common/tabNavigation";

// Reusable Card Component
const Card = ({
  title,
  children,
  className = "",
  actions = null,
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div
      className={`bg-white rounded-lg border shadow-sm border-gray-200 mb-8 ${className}`}
    >
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center space-x-2">
            {actions}
            <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors cursor-pointer">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
        {tabs && (
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
