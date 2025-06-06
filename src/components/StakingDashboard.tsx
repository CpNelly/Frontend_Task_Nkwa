"use client"

import React from 'react';
import { 
  ExternalLink, 
  Clock, 
  Share2, 
  Link as LinkIcon, 
  TrendingDown,
  ChevronDown,
  Wallet,
  Lock,
  ArrowUpRight,
  PauseCircle,
  ArrowDownRight,
  Clock1,
  ArrowDown,
  Clock4,
  ArrowDownLeft,
  Filter,
  ChevronsUpDown,
  TrendingUp,
  PlusCircle,
  Search,
} from 'lucide-react';
import LineChart from './LineChart';
import LiquidStakingPortfolio from './LiquidStakingPortfolio';
import { Divider, IconButton } from '@mui/material';
import Header from './Header';
import InvestmentPeriod from './InvestmentPeriod';

// Sample data for charts
const generateChartData = (length: number, trend: 'up' | 'down' | 'mixed'): number[] => {
  const data: number[] = [];
  let value = 50;
  
  for (let i = 0; i < length; i++) {
    if (trend === 'up') {
      value += Math.random() * 4 - 1;
    } else if (trend === 'down') {
      value -= Math.random() * 4 - 1;
    } else {
      value += Math.random() * 6 - 3;
    }
    value = Math.max(0, Math.min(100, value));
    data.push(value);
  }
  
  return data;
};

const StakingCard: React.FC<{
  icon: string;
  name: string;
  rewardRate: string;
  change: string;
  isPositive: boolean;
  chartData: number[];
}> = ({ icon, name, rewardRate, change, isPositive, chartData }) => (
  <div className="bg-[#17181C] rounded-2xl p-6 flex flex-col">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <img src={icon} alt={name} className="w-6 h-6 mr-3" />
        <div>
          <div className="flex items-center">
            <span className="text-[#71717A] text-[12px]">Proof of Stake</span>
          </div>
          <span className="text-white font-medium text-sm">{name}</span>
        </div>
      </div>
      <IconButton sx={{borderRaduis:'25px',border:'1px solid whitesmoke',bgcolor:'#0D0D0F'}} >
        <ArrowUpRight color='white' size={16} />
      </IconButton>
    </div>
    
    <div className="mb-4">
      <div className="text-[#71717A] text-[12px] mb-1">Reward Rate</div>
      <div className="text-white text-2xl font-semibold">{rewardRate}</div>
     
      <div className={`flex items-center ${isPositive ? 'text-[#22C55E]' : 'text-[#EF4444]'} text-[12px] mt-1`}>
        {isPositive ?
          <IconButton sx={{borderRaduis:'25px',border:'1px solid #22C55E',bgcolor:'#22C55E',mr:1,padding:'0px!important'}} >
            <ArrowUpRight color='black' size={12} />
          </IconButton> 
         : 
         <IconButton sx={{borderRaduis:'25px',border:'1px solid #EF4444',bgcolor:'#EF4444',mr:1,padding:'0px!important'}} >
            <ArrowDownLeft color='black' size={12} />
          </IconButton> 
         }
         {change}
      </div>
    </div>

    <LineChart data={chartData} color={isPositive ? '#22C55E' : '#EF4444'} />
  </div>
);

const StakingMetric: React.FC<{
  label: string;
  value: string;
  subValue?: string;
  trend?: 'up' | 'down';
  period?: string;
}> = ({ label, value, subValue, trend, period }) => (
  <div className="bg-[#17181C] rounded-xl p-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-[#71717A] text-sm">{label}</span>
      {period && (
        <span className="text-xs px-2 py-1 rounded-md bg-[#27272A] text-[#71717A]">
          {period}
        </span>
      )}
    </div>
    <div className="flex items-center">
      <span className="text-white text-xl font-semibold">{value}</span>
      {trend && (
        <div className={`ml-2 text-sm ${trend === 'up' ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
          {subValue}
        </div>
      )}
    </div>
  </div>
);

const StakingDashboard = () => {
  // Generate sample data for charts
  const ethData = generateChartData(24, 'up');
  const bnbData = generateChartData(24, 'up');
  const maticData = generateChartData(24, 'down');

  return (
    <div className="bg-[#0D0D0F] min-h-screen">
      <Header />
      {/* Header Section */}
      <div className='p-6 pb-0 border-b border-[#27272A] flex w-full items-stretch flex-wrap gap-x-8' >
        <div className='flex-2'>
          <div className="flex items-center justify-between mb-6">
            <div className='flex-1'>
              <div className="flex items-center text-[#9370db] text-[12px] gap-x-3">
                <span className='text-purple-200'>Recommended coins for 24 hours</span>
                <Clock4 className='text-purple-200' fill='#9370db' size={20} />

                <span className='p-1 px-2 rounded-md bg-[#7c3aed26] text-white text-xs'>3 Assets</span>
              </div>
              <h1 className="text-2xl font-semibold text-white mb-1">Top Staking Assets</h1>
            </div>

            {/* Filters */}
            <div className="lg:flex flex-wrap gap-4 gap-x-2 hidden items-center space-x-1">
              <button className="px-4 pl-2 py-2 rounded-xl bg-[#131417] text-white text-[10px] flex items-center border-l border-t border-[#27272A] hover:bg-[#27272A] transition-colors duration-200">
                <ChevronDown size={12} className="mr-1" />
                24H
              </button>
              <button className="px-4 pl-2 py-2 rounded-xl bg-[#131417] text-white text-[10px] flex items-center border-l border-t border-[#27272A] hover:bg-[#27272A] transition-colors duration-200">
                <ChevronDown size={12} className="mr-1" />
                Proof of Stake
              </button>
              <button className="px-4 pl-2 py-2 rounded-xl bg-[#131417] text-white text-[10px] flex items-center border-l border-t border-[#27272A] hover:bg-[#27272A] transition-colors duration-200">
                <ChevronDown size={12} className="mr-1" />
                Desc
              </button>
            </div>
            <div className="lg:hidden flex items-center">
              <Filter />
            </div>
          </div>
          
            {/* Staking Cards Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-1 md:grid-rows-2 grid-cols-1 grid-rows-3 gap-4 mb-8">
            <StakingCard
              icon="/eth-logo.svg"
              name="Ethereum (ETH)"
              rewardRate="13.62%"
              change="6.25%"
              isPositive={true}
              chartData={ethData}
            />
            <StakingCard
              icon="/bnb-logo.svg"
              name="BNB Chain"
              rewardRate="12.72%"
              change="5.67%"
              isPositive={true}
              chartData={bnbData}
            />
            <StakingCard
              icon="/polygon-logo.svg"
              name="Polygon (Matic)"
              rewardRate="6.29%"
              change="-1.89%"
              isPositive={false}
              chartData={maticData}
            />
          </div>
        </div>
        <LiquidStakingPortfolio />
      </div>
      {/* <hr /> */}
      {/* Active Staking Section */}


      {/* New section */}
      <div className=" bg-[#0F0F12] py-6 px-2 m-6 mt-8 rounded-2xl border border-[#27272A]">
        <div className='flex justify-between items-center px-4 pb-4'>
          <p className='text-sm'>Your active stakings</p>
          <div className='flex justify-between items-center gap-x-4'>
            <TrendingUp />
            <PlusCircle />
            <Search />
            <Filter />
          </div>
        </div>
      <div className="bg-[#131417] rounded-2xl p-6 border border-[#27272A]">
        <div className='flex items-start flex-wrap mb-8' >
          <div className='flex-1'>
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <div className="flex items-center text-[#71717A] text-xs">
                  <span className='text-purple-200'>Last Update - 45 minutes ago</span>
                  <Clock className="w-4 h-4 ml-2 text-purple-200" fill='#7C3AED' />
                </div>
                <div className="flex items-center space-x-3">
                  <h1 className="text-2xl font-semibold text-white">Stake Avalance (AVAX)</h1>
                  <img src="/avax-logo.svg" alt="AVAX" className="w-6 h-6" />
                  <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-full bg-black text-white hover:bg-[#27272A] border-t border-l border-[#27272A]">
                      <LinkIcon className="w-4 h-4" />{' '}
                    </button>
                    <button className="p-2 rounded-full bg-black text-white hover:bg-[#27272A] border-t border-l border-[#27272A]">
                      {" "}
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="md:flex hidden items-center text-white text-xs hover:underline border-t border-l border-[#27272A] bg-black p-3 rounded-xl">
                      View Profile
                      {/* <ExternalLink className="w-4 h-4 ml-1" /> */}
                      <ArrowUpRight size={14} className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Balance Section */}
            <div className="mb-8">
              <div className="text-[#71717A] text-sm mb-2">Current Reward Balance, AVAX</div>
              <div className="text-white text-5xl font-semibold tracking-tight flex items-center flex-wrap gap-4">
                31.39686
                <div className="flex items-center flex-wrap space-3 gap-x-2">
                  <button className="px-4 py-2 bg-[#9370db] text-black rounded-xl text-sm font-medium hover:bg-[#6D28D9]">
                    Upgrade
                  </button>
                  <button className="px-4 py-2 text-white rounded-xl text-sm font-medium hover:bg-[#27272A] border-t border-l border-[#27272A]">
                    Unstake
                  </button>
                </div>
              </div>
            </div>
          </div>
          <InvestmentPeriod />
        </div>

        {/* Metrics Grid */}
        <div className="grid  md:grid-cols-4 grid-cols-2 md:grid-rows-0 grid-rows-2 gap-4 mb-6 border-b border-[#27272A] pb-2">
          {/* Momentum */}
          <div className="">
            <div className="flex items-center justify-between">
              <div className="">
                <span className="text-white">Momentum</span>
                <div className="text-xs text-[#71717A] mt-1">Growth dynamics</div>
              </div>
              <ChevronsUpDown className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-between">
              <div className="">
                <span className="text-white">General</span>
                <div className="text-xs text-[#71717A] mt-1">Overview</div>
              </div>
              <ChevronsUpDown className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-between">
              <div className="">
                <span className="text-white">Risk</span>
                <div className="text-xs text-[#71717A] mt-1">Risk assessment</div>
              </div>
              <ChevronsUpDown className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-between">
              <div className="">
                <span className="text-white">Reward</span>
                <div className="text-xs text-[#71717A] mt-1">Expected profit</div>
              </div>
              <ChevronsUpDown className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:grid-rows-0 grid-rows-2  gap-4 mb-6">
          {/* Momentum */}
          <div className="border border-[#27272A] rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#71717A]">Staked Tokens Trend</span>
                <ChevronDown className="w-4 h-4 text-[#71717A]" />
              </div>
              <div className="px-2 py-1 bg-[#27272A] rounded-full text-xs text-[#71717A]">24H</div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold">-0.82%</span>
            </div>
          </div>

          {/* General */}
          <div className="border border-[#27272A] rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#71717A]">Price</span>
                
              </div>
              <div className="px-2 py-1 bg-[#27272A] rounded-full text-xs text-[#71717A]">24H</div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-white">$41.99</span>
              <span className="text-[11px] flex items-center">-1.09%<ArrowDownRight className="w-4 h-4 text-[#EF4444]" /> </span>
            </div>
          </div>

          {/* Risk */}
          <div className="border border-[#27272A] rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#71717A]">Staking Ratio</span>
              </div>
              <div className="px-2 py-1 bg-[#27272A] rounded-full text-xs text-[#71717A]">24H</div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-white">60.6%</span>
            </div>
          </div>

          {/* Reward */}
          <div className="border border-[#27272A] rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#71717A]">Reward Rate</span>
              </div>
            </div>
            {/* <div className="flex items-center space-x-2"> */}
              <div className="relative w-[60%] flex mb-4">
                <div className="h-1 w-full bg-[#27272A] rounded-full">
                  <div className="absolute left-0 h-1 w-[80%] bg-[#7C3AED] rounded-full"></div>
                  <div className="absolute left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#7C3AED]"></div>
                </div>
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#27272A] rounded-full"></div>
                <span className="absolute -right-20 -top-1 text-[10px] text-white">2.23% <span className='text-[9px] text-[#71717A]'>24H ago</span> </span>
              </div>
              <div className="relative w-[50%] flex mt-4">
                <div className="h-1 w-full bg-[#27272A] rounded-full">
                  <div className="absolute left-0 h-1 w-[80%] bg-[#7C3AED] rounded-full"></div>
                  <div className="absolute left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#7C3AED]"></div>
                </div>
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#27272A] rounded-full"></div>
                <span className="absolute -right-20 -top-1 text-[10px] text-white">1.46% <span className='text-[9px] text-[#71717A]'>48H ago</span> </span>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StakingDashboard; 