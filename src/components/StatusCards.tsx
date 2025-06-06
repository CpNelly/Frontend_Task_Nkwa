const StatusCards = () => {
  const stats = [
    { title: 'Staked Notes Tend', value: '-0.82%', color: 'text-red-500' },
    { title: 'Price', value: '$41.99' },
    { title: 'Staking Status', value: '60.6%' },
    { title: 'Reward Rate', value: '$44.99' },
    { title: 'Staking', value: '2.52%' },
    { title: 'Staking', value: '1.44%' },
  ];

  return (
    <div className="grid grid-cols-3 gap-5">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
          <p className={`text-lg font-bold ${stat.color || ''}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatusCards;