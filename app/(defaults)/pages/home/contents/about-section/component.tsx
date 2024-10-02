import React from "react";

interface StatsCardProps {
  value: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label }) => {
  return (
    <div>
      <h1 className="text-red-500 text-4xl font-bold">{value}</h1>
      <p className="text-[18px] text-gray-500">{label}</p>
    </div>
  );
};

export default StatsCard;
