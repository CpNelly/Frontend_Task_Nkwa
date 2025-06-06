import { RefreshCw } from 'lucide-react';

const StakingCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold">Your active stakings</h2>
        <div className="flex items-center text-gray-500 text-sm">
          <RefreshCw size={14} className="mr-1" />
          <span>Last Update – 46 minutes ago</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Stake Avalance (AVAX)</h3>
        <p className="text-gray-600">Current Reward Balance: <span className="font-semibold">ABAX 31.39686</span></p>
      </div>
      
      <div className="flex items-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Upgrade
        </button>
        <span className="ml-3 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
          Unstable
        </span>
      </div>
    </div>
  );
};

export default StakingCard;