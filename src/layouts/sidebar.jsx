import { useState } from "react";
import {
  Home,
  CheckSquare,
  AlertCircle,
  FileText,
  Calendar,
  Users,
  BarChart3,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: CheckSquare, label: "Tasks" },
  { icon: AlertCircle, label: "Issues" },
  { icon: FileText, label: "Forms" },
  { icon: Calendar, label: "Calendar" },
  { icon: FileText, label: "Browse Templates" },
  { icon: FileText, label: "Template Library" },
  { icon: Users, label: "User Management" },
  { icon: BarChart3, label: "Reports" },
  { icon: LogOut, label: "Log Out" },
];

const Sidebar = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div
      className={`${sidebarCollapsed ? "w-20" : "w-64"} transition-all duration-300 bg-white shadow-sm border-r border-gray-200 flex flex-col`}
    >
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              🌲
            </div>
            {!sidebarCollapsed && (
              <div>
                <div className="font-semibold text-gray-800">PETROVA</div>
                <div className="text-xs text-gray-500">TASKS</div>
              </div>
            )}
          </div>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
              item.active
                ? "bg-green-50 text-green-700 border-r-2 border-green-500"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon size={18} />
            {!sidebarCollapsed && <span className="text-sm">{item.label}</span>}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-7 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
            A
          </div>
          {!sidebarCollapsed && (
            <div className="flex-1">
              <div className="font-medium text-sm">Ajay</div>
              <div className="text-xs text-gray-500">Manager</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
