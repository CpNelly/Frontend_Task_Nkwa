import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

const StatsCard = ({ title, value, change, isPositive }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold">{value}</p>
        {change && (
          <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            <span className="ml-1 text-sm font-medium">{change}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;