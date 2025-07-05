import { Home, Plus } from "lucide-react";

export const HeaderSection = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Home size={20} className="text-gray-400" />
          <span className="text-gray-400">Home</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">24-03-2001</div>
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option>Outlet name</option>
          </select>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors">
            <Plus size={16} />
            <span>Create</span>
          </button>
        </div>
      </div>
    </header>
  );
};
