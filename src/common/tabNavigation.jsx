const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-6">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors ${
            activeTab === tab.key
              ? "border-green-500 text-green-600"
              : "border-transparent text-gray-600 hover:text-gray-800"
          }`}
        >
          <div className={`w-3 h-3 rounded-full ${tab.color}`}></div>
          <span className="text-xs font-medium">
            {tab.label} {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
