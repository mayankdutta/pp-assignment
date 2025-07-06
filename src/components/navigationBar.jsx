import React, { useState } from "react";
import {
  Home,
  MessageSquare,
  Bell,
  Calendar,
  Grid3X3,
  ChevronDown,
  Plus,
  Menu,
  X,
} from "lucide-react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 relative">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Home */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">PETPOJA</span>
              <span className="text-sm font-bold text-gray-900">TASKS</span>
            </div>
          </div>

          {/* Home button - Hidden on mobile */}
          <button className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Home size={20} />
            <span className="font-medium">Home</span>
          </button>
        </div>

        {/* Right side - Desktop view */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Chat icon */}
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <MessageSquare size={20} />
          </button>

          {/* Notification icon */}
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell size={20} />
          </button>

          {/* Date */}
          <div className="text-sm text-gray-600 font-medium">24-03-2001</div>

          {/* Calendar icon */}
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Calendar size={20} />
          </button>

          {/* Grid icon */}
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Grid3X3 size={20} />
          </button>

          {/* User dropdown */}
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <span className="font-medium">Outlet name</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Create button */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus size={16} />
            <span className="font-medium">Create</span>
          </button>
        </div>

        {/* Right side - Tablet view (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center space-x-3">
          {/* Create button (priority) */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus size={16} />
            <span className="font-medium">Create</span>
          </button>

          {/* User dropdown */}
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <span className="font-medium">Outlet name</span>
            <ChevronDown size={16} />
          </button>

          {/* Hamburger menu */}
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Right side - Mobile view */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Create button (icon only) */}
          <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors">
            <Plus size={16} />
          </button>

          {/* Hamburger menu */}
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 lg:hidden">
          <div className="px-4 py-3 space-y-3">
            {/* Home - Only shown on mobile */}
            <button className="flex md:hidden items-center space-x-3 w-full text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Home size={20} />
              <span className="font-medium">Home</span>
            </button>

            {/* User dropdown - Only shown on mobile */}
            <button className="flex md:hidden items-center justify-between w-full text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <span className="font-medium">Outlet name</span>
              <ChevronDown size={16} />
            </button>

            {/* Create button - Only shown on mobile (full width) */}
            <button className="flex md:hidden items-center justify-center space-x-2 w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors">
              <Plus size={16} />
              <span className="font-medium">Create</span>
            </button>

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Icons section */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <MessageSquare size={20} />
                <span className="font-medium">Messages</span>
              </button>

              <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="font-medium">Notifications</span>
              </button>

              <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <Calendar size={20} />
                <span className="font-medium">Calendar</span>
              </button>

              <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <Grid3X3 size={20} />
                <span className="font-medium">Apps</span>
              </button>
            </div>

            {/* Date display */}
            <div className="text-center text-sm text-gray-500 pt-2 border-t border-gray-200">
              24-03-2001
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
