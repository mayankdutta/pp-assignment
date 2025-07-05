const StatusCard = ({ card }) => {
  return (
    <div
      className={`p-6 rounded-xl border-2 ${card.bgColor} ${card.borderColor} hover:shadow-lg transition-shadow`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {card.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            {card.details}
          </p>
        </div>
        <div className="text-2xl ml-4">{card.icon}</div>
      </div>
    </div>
  );
};

export default StatusCard;
