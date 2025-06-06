// types.ts (You would typically put this in a separate file like `types/index.ts`)
import React from 'react';
import {
  Wallet,
  Calculator,
  Database,
  GitFork,
  Search,
  Bell,
  Settings,
  Plus,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Star,
  TrendingUp,
  TrendingDown,
  Zap,
  Circle,
  Square,
  Triangle,
  Hexagon,
  User,
  LayoutDashboard,
  Coins,
  Shield,
  CreditCard,
  Activity,
  DollarSign,
  Percent,
} from 'lucide-react';

// Mock data for active stakings (moved here for Sidebar component)
const activeStakings: ActiveStaking[] = [
  { id: 1, asset: 'Ethereum', amount: '7,699.00', icon: <Circle fill="#627EEA" stroke="#627EEA" size={20} /> },
  { id: 2, asset: 'Avalanche', amount: '1,340.00', icon: <Triangle fill="#E84142" stroke="#E84142" size={20} /> },
  { id: 3, asset: 'Polygon (Matic)', amount: '540.00', icon: <Hexagon fill="#8247E5" stroke="#8247E5" size={20} /> },
  { id: 4, asset: 'BNB Chain', amount: '980.00', icon: <Square fill="#F3BA2F" stroke="#F3BA2F" size={20} /> },
];

const Sidebar: React.FC = () => {
  return (
    // Sidebar is hidden on small screens and shown on large screens
    <div className={`hidden lg:flex w-64 bg-[${colors.cardBg}] text-[${colors.textColor}] flex-col p-6 rounded-2xl shadow-lg h-[96vh] my-4 ml-4`}>
      {/* Logo and Stakent */}
      <div className="flex items-center mb-10">
        <Star className={`text-[${colors.accentColor}] mr-3`} size={32} />
        <span className={`text-2xl font-bold text-[${colors.white}]`}>Stakent</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <a href="#" className={`flex items-center p-3 rounded-lg text-[${colors.white}] bg-[${colors.accentColor}]`}>
              <LayoutDashboard className="mr-4" size={20} />
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className={`flex items-center p-3 rounded-lg hover:bg-[${colors.hoverColor}]`}>
              <Coins className="mr-4" size={20} />
              Assets
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className={`flex items-center p-3 rounded-lg hover:bg-[${colors.hoverColor}]`}>
              <Shield className="mr-4" size={20} />
              Staking Providers
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className={`flex items-center p-3 rounded-lg hover:bg-[${colors.hoverColor}]`}>
              <Calculator className="mr-4" size={20} />
              Staking Calculator
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className={`flex items-center p-3 rounded-lg hover:bg-[${colors.hoverColor}]`}>
              <Database className="mr-4" size={20} />
              Data API
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className={`flex items-center p-3 rounded-lg hover:bg-[${colors.hoverColor}]`}>
              <GitFork className="mr-4" size={20} />
              Liquid Staking <span className={`ml-2 text-xs bg-[${colors.accentColor}] px-2 py-1 rounded-full`}>Beta</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className={`flex items-center p-3 rounded-lg hover:bg-[${colors.hoverColor}]`}>
              <Activity className="mr-4" size={20} />
              Active Staking
            </a>
          </li>
        </ul>
      </nav>

      {/* Active Staking Summary */}
      <div className={`mt-auto bg-[${colors.secondaryBg}] p-4 rounded-lg`}>
        <h3 className={`text-sm font-semibold text-[${colors.grayText}] mb-3`}>Your active stakings</h3>
        {activeStakings.map((staking) => (
          <div key={staking.id} className="flex items-center mb-2">
            {staking.icon}
            <div className="ml-3">
              <p className={`text-sm text-[${colors.white}]`}>{staking.asset}</p>
              <p className={`text-xs text-[${colors.darkGrayText}]`}>Amount: ${staking.amount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activate Super Feature */}
      <div className={`mt-6 p-4 bg-[${colors.accentColor}] rounded-lg flex items-center justify-between`}>
        <div className="flex items-center">
          <Zap className={`text-[${colors.yellowText}] mr-3`} size={20} />
          <div>
            <p className={`text-[${colors.white}] font-semibold`}>Activate Super</p>
            <p className={`text-xs text-[${colors.lightGrayText}]`}>Unlock all features on Stakent</p>
          </div>
        </div>
        <ChevronRight className={`text-[${colors.white}]`} size={20} />
      </div>
    </div>
  );
};

// components/Header.tsx
const Header: React.FC = () => {
  return (
    <header className={`flex flex-col md:flex-row items-center justify-between p-4 bg-[${colors.cardBg}] rounded-2xl shadow-lg my-4 mx-4 md:mx-0`}>
      {/* Left section: Stakent Logo and Top Staking Assets */}
      <div className="flex items-center mb-4 md:mb-0">
        <Star className={`text-[${colors.accentColor}] mr-2`} size={28} />
        <span className={`text-xl font-bold text-[${colors.white}] mr-6`}>Stakent</span>
        <span className={`text-[${colors.grayText}] text-sm hidden md:block`}>Top Staking Assets</span>
      </div>

      {/* Middle section: User Info and Deposit Button */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className={`flex items-center bg-[${colors.secondaryBg}] p-2 rounded-full`}>
          <img
            src="https://placehold.co/30x30/e94560/ffffff?text=RC"
            alt="Ryan Crawford"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className={`text-[${colors.white}] text-sm`}>Ryan Crawford</span>
        </div>
        <button className={`bg-[${colors.accentColor}] hover:bg-opacity-80 text-[${colors.white}] font-semibold py-2 px-4 rounded-full flex items-center`}>
          <Plus size={16} className="mr-2" />
          Deposit
        </button>
      </div>

      {/* Right section: Search, Notifications, Settings */}
      <div className="flex items-center space-x-4 w-full md:w-auto justify-end">
        <div className="relative flex-1 md:flex-none">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 text-[${colors.grayText}]`} size={20} />
          <input
            type="text"
            placeholder="Search"
            className={`bg-[${colors.secondaryBg}] text-[${colors.white}] rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[${colors.accentColor}] w-full`}
          />
        </div>
        <button className={`p-2 rounded-full bg-[${colors.secondaryBg}] hover:bg-[${colors.hoverColor}]`}>
          <Bell className={`text-[${colors.textColor}]`} size={20} />{' '}
        </button>
        <button className={`p-2 rounded-full bg-[${colors.secondaryBg}] hover:bg-[${colors.hoverColor}]`}>
          <Settings className={`text-[${colors.textColor}]`} size={20} />{' '}
        </button>
      </div>
    </header>
  );
};

// components/StakingAssetCard.tsx
interface StakingAssetCardProps {
  asset: StakingAsset;
}

const StakingAssetCard: React.FC<StakingAssetCardProps> = ({ asset }) => {
  const isUp = asset.trend === 'up';
  return (
    <div className={`bg-[${colors.cardBg}] p-6 rounded-xl shadow-md flex flex-col items-start w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 mx-0 md:mx-2`}>
      <div className="flex items-center mb-4">
        {asset.icon}
        <span className={`ml-3 text-lg font-semibold text-[${colors.white}]`}>Proof of Stake</span>
        <span className={`ml-2 text-lg font-bold text-[${colors.white}]`}>{asset.name}</span>
        <ChevronRight className={`text-[${colors.grayText}] ml-auto`} size={20} />
      </div>
      <div className="mb-4">
        <p className={`text-[${colors.grayText}] text-sm`}>Reward Rate</p>
        <p className={`text-2xl font-bold text-[${colors.white}]`}>{asset.rewardRate}</p>
        <p className={`text-sm ${isUp ? `text-[${colors.greenText}]` : `text-[${colors.redText}]`}`}>
          {isUp ? <TrendingUp size={16} className="inline-block mr-1" /> : <TrendingDown size={16} className="inline-block mr-1" />}
          {asset.change}
        </p>
      </div>
      {/* Simple SVG for chart visualization */}
      <svg width="100%" height="60" viewBox="0 0 100 60" className="mt-auto">
        <path
          d={asset.chartData}
          fill="none"
          stroke={isUp ? colors.greenText : colors.redText}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// components/ActiveStakingItem.tsx
interface ActiveStakingItemProps {
  asset: string;
  amount: string;
  icon: React.ReactNode;
}

const ActiveStakingItem: React.FC<ActiveStakingItemProps> = ({ asset, amount, icon }) => {
  return (
    <div className={`flex items-center justify-between bg-[${colors.secondaryBg}] p-4 rounded-lg mb-3`}>
      <div className="flex items-center">
        {icon}
        <div className="ml-3">
          <p className={`text-[${colors.white}] font-medium`}>{asset}</p>
          <p className={`text-[${colors.darkGrayText}] text-sm`}>Amount: ${amount}</p>
        </div>
      </div>
      <button className={`text-[${colors.purpleText}] hover:text-opacity-80 text-sm`}>
        View Profile
      </button>
    </div>
  );
};


// pages/index.tsx
import Head from 'next/head';
import { ActiveStaking, colors, StakingAsset } from '@/types/types';

// Mock data for staking assets (moved here for HomeDashboard component)
const stakingAssets: StakingAsset[] = [
  {
    id: 1,
    name: 'Ethereum (ETH)',
    icon: <Circle fill="#627EEA" stroke="#627EEA" size={24} />,
    rewardRate: '13.62 %',
    change: '-2,009',
    chartData: 'M 0 40 C 20 20, 40 60, 60 40 S 80 20, 100 40', // SVG path data
    trend: 'down',
  },
  {
    id: 2,
    name: 'BNB Chain',
    icon: <Hexagon fill="#F3BA2F" stroke="#F3BA2F" size={24} />,
    rewardRate: '12.72 %',
    change: '+2,956',
    chartData: 'M 0 20 C 20 40, 40 10, 60 30 S 80 50, 100 20', // SVG path data
    trend: 'up',
  },
  {
    id: 3,
    name: 'Polygon (Matic)',
    icon: <Triangle fill="#8247E5" stroke="#8247E5" size={24} />,
    rewardRate: '6.29 %',
    change: '-0,987',
    chartData: 'M 0 30 C 20 50, 40 20, 60 40 S 80 10, 100 30', // SVG path data
    trend: 'down',
  },
];

// Mock data for active stakings (moved here for HomeDashboard component)
const activeStakingsData: ActiveStaking[] = [
    { id: 1, asset: 'Ethereum', amount: '7,699.00', icon: <Circle fill="#627EEA" stroke="#627EEA" size={20} /> },
    { id: 2, asset: 'Avalanche', amount: '1,340.00', icon: <Triangle fill="#E84142" stroke="#E84142" size={20} /> },
    { id: 3, asset: 'Polygon (Matic)', amount: '540.00', icon: <Hexagon fill="#8247E5" stroke="#8247E5" size={20} /> },
    { id: 4, asset: 'BNB Chain', amount: '980.00', icon: <Square fill="#F3BA2F" stroke="#F3BA2F" size={20} /> },
];


const HomeDashboard: React.FC = () => {
  return (
    <div className={`flex flex-col lg:flex-row min-h-screen bg-[${colors.primaryBg}] font-inter`}>
      <Head>
        <title>Stakent Dashboard</title>
        <meta name="description" content="Stakent Dashboard UI" />
        <link rel="icon" href="/favicon.ico" />
        {/* Tailwind CSS CDN - In a real Next.js app, you'd usually configure Tailwind directly */}
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        {/* Google Fonts - Inter */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4">
        {/* Header */}
        <Header />

        {/* Main Dashboard Content Area */}
        <main className={`flex-1 p-4 sm:p-6 bg-[${colors.secondaryBg}] rounded-2xl shadow-lg overflow-y-auto`}>
          {/* Top Staking Assets Section */}
          <section className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <div className="flex flex-wrap space-x-3 mb-4 sm:mb-0">
                <button className={`bg-[${colors.accentColor}] text-[${colors.white}] px-5 py-2 rounded-full font-semibold mb-2 sm:mb-0`}>Staking</button>
                <button className={`bg-[${colors.secondaryBg}] text-[${colors.grayText}] px-5 py-2 rounded-full hover:bg-[${colors.hoverColor}] mb-2 sm:mb-0`}>Stablecoin</button>
              </div>
              <div className={`flex flex-wrap items-center space-x-2 sm:space-x-4 text-[${colors.grayText}] text-sm justify-end`}>
                <span className="mb-2 sm:mb-0">Recommended coins for 24 hours</span>
                <span className={`bg-[${colors.secondaryBg}] px-3 py-1 rounded-full mb-2 sm:mb-0`}>3 Assets</span>
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                  <span className={`text-[${colors.grayText}]`}>24H</span>
                  <ChevronDown size={16} />
                </div>
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                  <span className={`text-[${colors.grayText}]`}>Proof of Stake</span>
                  <ChevronDown size={16} />
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-[${colors.grayText}]`}>Desc</span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <h2 className={`text-2xl font-bold text-[${colors.white}] mb-6`}>Top Staking Assets</h2>

            <div className="flex flex-col md:flex-row justify-between -mx-2">
              {stakingAssets.map((asset: StakingAsset) => (
                <StakingAssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </section>

          {/* Liquid Staking Portfolio */}
          <section className={`bg-[${colors.cardBg}] p-6 rounded-xl shadow-md mb-8 flex flex-col md:flex-row items-start md:items-center justify-between`}>
            <div className="flex items-center mb-4 md:mb-0">
              <Star className={`text-[${colors.accentColor}] mr-3`} size={28} />
              <div>
                <h3 className={`text-xl font-bold text-[${colors.white}] flex items-center flex-wrap`}>
                  Liquid Staking Portfolio <span className={`ml-2 text-xs bg-[${colors.accentColor}] px-2 py-1 rounded-full mt-1 md:mt-0`}>New</span>
                </h3>
                <p className={`text-[${colors.grayText}] text-sm mt-1 max-w-full md:max-w-sm`}>
                  An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-4 w-full md:w-auto">
              <button className={`bg-[${colors.accentColor}] hover:bg-opacity-80 text-[${colors.white}] font-semibold py-3 px-6 rounded-full flex items-center w-full md:w-auto justify-center`}>
                <Wallet size={20} className="mr-2" />
                Connect with Wallet
              </button>
              <input
                type="text"
                placeholder="Enter a Wallet Address"
                className={`bg-[${colors.primaryBg}] text-[${colors.white}] rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-[${colors.accentColor}] w-full md:w-64`}
              />
            </div>
          </section>

          {/* Your Active Stakings */}
          <section className="mb-8">
            <h2 className={`text-2xl font-bold text-[${colors.white}] mb-6`}>Your active stakings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeStakingsData.map((staking: ActiveStaking) => (
                <ActiveStakingItem key={staking.id} asset={staking.asset} amount={staking.amount} icon={staking.icon} />
              ))}
              {/* Additional items for demonstration */}
              <ActiveStakingItem asset="Meet Sam" amount="30" icon={<User size={20} className={`text-[${colors.purpleText}]`} />} />
              <ActiveStakingItem asset="Balance MAX" amount="31.39686" icon={<CreditCard size={20} className={`text-[${colors.greenText}]`} />} />
            </div>

            <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mt-6 bg-[${colors.cardBg}] p-6 rounded-xl shadow-md`}>
                <div className="flex items-center mb-4 md:mb-0">
                    <Star className={`text-[${colors.accentColor}] mr-3`} size={28} />
                    <div>
                        <h3 className={`text-xl font-bold text-[${colors.white}]`}>Stake Avalanche (AVAX)</h3>
                        <p className={`text-[${colors.grayText}] text-sm`}>Last Update - 40 minutes ago</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
                    <button className={`bg-[${colors.accentColor}] hover:bg-opacity-80 text-[${colors.white}] font-semibold py-2 px-4 rounded-full w-full sm:w-auto`}>
                        Upgrade
                    </button>
                    <button className={`bg-[${colors.secondaryBg}] hover:bg-[${colors.hoverColor}] text-[${colors.white}] font-semibold py-2 px-4 rounded-full w-full sm:w-auto`}>
                        Unstake
                    </button>
                    <button className={`text-[${colors.purpleText}] hover:text-opacity-80 text-sm flex items-center w-full sm:w-auto justify-center sm:justify-start`}>
                        View Profile <ExternalLink size={16} className="ml-1" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className={`bg-[${colors.cardBg}] p-6 rounded-xl shadow-md`}>
                    <p className={`text-[${colors.grayText}] text-sm mb-2`}>Momentum</p>
                    <p className={`text-[${colors.white}] font-semibold`}>Growth dynamics</p>
                    <div className="flex items-center mt-4">
                        <TrendingDown className={`text-[${colors.redText}] mr-2`} size={20} />
                        <span className={`text-[${colors.redText}] text-lg font-bold`}>-0.82 %</span>
                    </div>
                </div>
                <div className={`bg-[${colors.cardBg}] p-6 rounded-xl shadow-md`}>
                    <p className={`text-[${colors.grayText}] text-sm mb-2`}>General</p>
                    <p className={`text-[${colors.white}] font-semibold`}>Overview</p>
                    <div className="flex items-center mt-4">
                        <DollarSign className={`text-[${colors.greenText}] mr-2`} size={20} />
                        <span className={`text-[${colors.greenText}] text-lg font-bold`}>$41.99</span>
                        <span className={`text-[${colors.grayText}] text-sm ml-1`}>-1.09%</span>
                    </div>
                </div>
                <div className={`bg-[${colors.cardBg}] p-6 rounded-xl shadow-md`}>
                    <p className={`text-[${colors.grayText}] text-sm mb-2`}>Risk</p>
                    <p className={`text-[${colors.white}] font-semibold`}>Risk assessment</p>
                    <div className="flex items-center mt-4">
                        <Percent className={`text-[${colors.yellowText}] mr-2`} size={20} />
                        <span className={`text-[${colors.yellowText}] text-lg font-bold`}>60.6 %</span>
                    </div>
                </div>
                <div className={`bg-[${colors.cardBg}] p-6 rounded-xl shadow-md`}>
                    <p className={`text-[${colors.grayText}] text-sm mb-2`}>Reward</p>
                    <p className={`text-[${colors.white}] font-semibold`}>Expected profit</p>
                    <div className="flex items-center mt-4">
                        <TrendingUp className={`text-[${colors.greenText}] mr-2`} size={20} />
                        <span className={`text-[${colors.greenText}] text-lg font-bold`}>2.23 %</span>
                        <span className={`text-[${colors.grayText}] text-sm ml-1`}>1.46%</span>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 bg-[${colors.cardBg}] p-6 rounded-xl shadow-md`}>
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <div className={`bg-[${colors.primaryBg}] p-3 rounded-full`}>
                        <Zap className={`text-[${colors.yellowText}]`} size={24} />
                    </div>
                    <div>
                        <p className={`text-[${colors.white}] font-semibold`}>Activate Super</p>
                        <p className={`text-[${colors.grayText}] text-sm`}>Unlock all features on Stakent</p>
                    </div>
                </div>
                <button className={`bg-[${colors.accentColor}] hover:bg-opacity-80 text-[${colors.white}] font-semibold py-2 px-4 rounded-full w-full sm:w-auto`}>
                    Upgrade
                </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomeDashboard