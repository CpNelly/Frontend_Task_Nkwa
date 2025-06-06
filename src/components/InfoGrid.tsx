const InfoGrid = () => {
  const items = [
    { title: 'Momentum', subtitle: 'Growth dynamics' },
    { title: 'General Overview', subtitle: '' },
    { title: 'Risk', subtitle: 'Risk assessment' },
    { title: 'Achieve Paper', subtitle: 'Upload all features on the team' },
  ];

  return (
    <div className="grid grid-cols-2 gap-5">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="font-bold mb-1">{item.title}</h3>
          {item.subtitle && <p className="text-gray-600 text-sm">{item.subtitle}</p>}
        </div>
      ))}
    </div>
  );
};

export default InfoGrid;