import Card from "./Card.jsx";
import { ExternalLink } from "lucide-react";
import { notesData } from "../utils";

const PersonalNotepad = () => {
  return (
    <Card
      title="Personal Notepad"
      actions={
        <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors">
          <ExternalLink size={16} />
        </button>
      }
    >
      <div className="space-y-4 p-6 overflow-auto h-40">
        {notesData.map((note) => (
          <div key={note.id} className="flex items-start space-x-3">
            <div className="mt-1">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={note.completed}
                onChange={() => {}}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900">
                {note.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{note.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PersonalNotepad;
