import StatusCard from "./statusCard";
import { statsCards } from "../utils";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statsCards.map((card) => (
        <StatusCard card={card} />
      ))}
    </div>
  );
};

export default StatsSection;
