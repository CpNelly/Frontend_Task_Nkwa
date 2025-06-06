 "use client"

import React from 'react';
import { Wallet } from 'lucide-react';

const LiquidStakingPortfolio = () => {
  return (
    <div className=" flex items-center justify-center p-4 md:max-w-[30%] ">
      {/* <div className=" bg-gradient-to-b from-[#0B061B] to-[#2C0F5A] rounded-2xl p-6 space-y-6"> */}
      <div className=" bg-gradient-to-b from-black to-purple-800 rounded-2xl p-6 space-y-6">
        {/* Logo and Title */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            {/* <div> */}
              <img src="/logo.png" alt="Stakent" className="h-6 w-6" />
              <span className="text-white font-medium">Stakent</span>
            {/* </div> */}
          </div>
          <span className="text-xs text-black bg-[#9370db] p-3 py-1 rounded-md">New</span>
        </div>

        {/* Title and Description */}
        <div>
          <h1 className="text-xl font-semibold text-white mb-2">
            Liquid Staking Portfolio
          </h1>
          <p className="text-[#71717A] text-xs w-[70%]">
            An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking
          </p>
        </div>

        {/* Connect Wallet Button */}
        <button className="w-full bg-[#9370db] hover:bg-[#6D28D9] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors">
          <span className='text-base text-black' >Connect with Wallet</span>
          <Wallet size={18} color='black' />
        </button>

        {/* Wallet Address Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter a Wallet Address"
            className="w-full bg-transparent text-white placeholder-white border border border-white py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            {/* <img src="/lock-icon.svg" alt="Lock" className="h-5 w-5 opacity-50" /> */}
            <Wallet size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidStakingPortfolio;