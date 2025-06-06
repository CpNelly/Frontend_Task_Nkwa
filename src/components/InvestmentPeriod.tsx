// components/InvestmentPeriod.tsx
import React, { useState } from 'react';
import { Pause } from 'lucide-react';

// Define a color palette for consistency (copied from previous immersives)
interface AppColors {
  primaryBg: string;
  secondaryBg: string;
  cardBg: string;
  textColor: string;
  accentColor: string;
  secondaryAccent: string;
  borderColor: string;
  hoverColor: string;
  purpleText: string;
  greenText: string;
  redText: string;
  yellowText: string;
  grayText: string;
  lightGrayText: string;
  darkGrayText: string;
  white: string;
}

const colors: AppColors = {
  primaryBg: '#111317',
  secondaryBg: '#191b1f',
  cardBg: '#212428',
  textColor: '#e0e0e0',
  accentColor: '#9246FF',
  secondaryAccent: '#4A4C51',
  borderColor: '#33363b',
  hoverColor: '#2a2d32',
  purpleText: '#9246FF',
  greenText: '#22C55E',
  redText: '#EF4444',
  yellowText: '#FACC15',
  grayText: '#A0A0A0',
  lightGrayText: '#C0C0C0',
  darkGrayText: '#606060',
  white: '#ffffff',
};

const InvestmentPeriod: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(4);

  return (
    <div className="border border-[#27272A] p-6 rounded-[20px] md:w-[40%] w-full">
      <div className="flex flex-col gap-2 mb-8">
        <h3 className="text-white text-[16px] font-medium">Investment Period</h3>
        <p className="text-[#71747A] text-[10px]">Contribution Period (Month)</p>
      </div>

      <div className="relative mt-8 py-7">
        {/* Track background */}
        <div className="absolute w-full h-[2px] bg-[#2A2D32] rounded-full" />

        {/* Active track */}
        <div 
          className="absolute h-[2px] bg-[#6E56CF] rounded-full"
          style={{ width: '33.33%' }}
        />

        {/* Month markers */}
        <div className="relative w-full h-[2px] flex justify-between">
          {[...Array(13)].map((_, i) => (
            <div
              key={i}
              className="w-[2px] h-[8px] bg-[#2A2D32] transform -translate-y-[3px]"
            />
          ))}
        </div>

        {/* Current position indicator */}
        <div 
          className="absolute flex flex-col items-center"
          style={{ left: '33.33%', top: '-25px', transform: 'translateX(-50%)' }}
        >
          <div className="bg-[#6E56CF] px-4 py-1 rounded-[8px] text-white text-sm mb-2">
            4 Month
          </div>
          <div className="w-8 h-8 rounded-full bg-[#6E56CF] flex items-center justify-center">
            <Pause className="text-white" size={16} />
          </div>
        </div>

        {/* Selected month pill */}
        <div className="absolute top-[-80px] right-0">
          <div className="bg-[#1E2127] text-white px-4 py-2 rounded-md text-sm">
            6 Month
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPeriod;
