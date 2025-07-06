import Card from "./Card.jsx";
import { ExternalLink, Eye } from "lucide-react";
import { workflowsData } from "../utils";

const WorkflowCard = ({ workflow, className = "" }) => {
  return (
    <div className={`${className}`}>
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-gray-900 text-sm leading-tight">
          {workflow.title}
        </h4>
        <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors ml-2">
          <Eye size={16} />
        </button>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <span>
            Responses
            <span className="font-medium text-gray-900">
              {workflow.responses}
            </span>
          </span>
          <span>
            Tasks
            <span className="font-medium text-gray-900">{workflow.tasks}</span>
          </span>
        </div>
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-medium">A</span>
        </div>
      </div>
    </div>
  );
};

const Workflows = () => {
  
  return (
    <Card
      title="Workflows"
      actions={
        <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors">
          <ExternalLink size={16} />
        </button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 overflow-auto h-40">
        {workflowsData.map((workflow) => (
          <WorkflowCard
            className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
            key={workflow.id}
            workflow={workflow}
          />
        ))}
      </div>
    </Card>
  );
};

export default Workflows;
