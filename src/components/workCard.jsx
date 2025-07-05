import {
  FileText,
  Calendar,
  Clock,
  MessageSquare,
} from "lucide-react";

export const WorkCard = ({ item }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="text-sm text-gray-500 font-medium">{item.id}</div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-gray-500">
            <MessageSquare size={14} />
            <span className="text-sm">{item.comments}</span>
          </div>
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
            {item.assignee}
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2">
        {item.title}
      </h3>
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
        <div className="flex items-center space-x-1">
          <Calendar size={14} />
          <span>{item.date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock size={14} />
          <span>{item.time}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
          {item.status}
        </span>
        <div className="flex items-center space-x-2">
          <FileText size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600">{item.category}</span>
        </div>
      </div>
    </div>
  );
};
