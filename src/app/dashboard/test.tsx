import React, { ReactNode } from 'react';
import Head from 'next/head';
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
  LucideProps,
} from 'lucide-react';

// Mock data for staking assets
const stakingAssets = [
  {
    id: 1,
    name: 'Ethereum (ETH)',
    icon: <Circle fill="#627EEA" stroke="#627EEA" size={24} />,
    rewardRate: '13.62 %',
    change: '-2,956',
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

// Mock data for active stakings
const activeStakings = [
  { id: 1, asset: 'Ethereum', amount: '7,699.00', icon: <Circle fill="#627EEA" stroke="#627EEA" size={20} /> },
  { id: 2, asset: 'Avalanche', amount: '1,340.00', icon: <Triangle fill="#E84142" stroke="#E84142" size={20} /> },
  { id: 3, asset: 'Polygon (Matic)', amount: '540.00', icon: <Hexagon fill="#8247E5" stroke="#8247E5" size={20} /> },
  { id: 4, asset: 'BNB Chain', amount: '980.00', icon: <Square fill="#F3BA2F" stroke="#F3BA2F" size={20} /> },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-gray-300 flex flex-col p-6 rounded-2xl shadow-lg h-[96vh] my-4 ml-4">
      {/* Logo and Stakent */}
      <div className="flex items-center mb-10">
        <Star className="text-purple-500 mr-3" size={32} />
        <span className="text-2xl font-bold text-white">Stakent</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center p-3 rounded-lg text-white bg-purple-700">
              <LayoutDashboard className="mr-4" size={20} />
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
              <Coins className="mr-4" size={20} />
              Assets
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
              <Shield className="mr-4" size={20} />
              Staking Providers
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
              <Calculator className="mr-4" size={20} />
              Staking Calculator
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
              <Database className="mr-4" size={20} />
              Data API
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
              <GitFork className="mr-4" size={20} />
              Liquid Staking <span className="ml-2 text-xs bg-purple-500 px-2 py-1 rounded-full">Beta</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800">
              <Activity className="mr-4" size={20} />
              Active Staking
            </a>
          </li>
        </ul>
      </nav>

      {/* Active Staking Summary */}
      <div className="mt-auto bg-gray-800 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">Your active stakings</h3>
        {activeStakings.map((staking) => (
          <div key={staking.id} className="flex items-center mb-2">
            {staking.icon}
            <div className="ml-3">
              <p className="text-sm text-white">{staking.asset}</p>
              <p className="text-xs text-gray-400">Amount: ${staking.amount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activate Super Feature */}
      <div className="mt-6 p-4 bg-purple-800 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          <Zap className="text-yellow-300 mr-3" size={20} />
          <div>
            <p className="text-white font-semibold">Activate Super</p>
            <p className="text-xs text-gray-200">Unlock all features on Stakent</p>
          </div>
        </div>
        <ChevronRight className="text-white" size={20} />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 rounded-2xl shadow-lg my-4 mr-4">
      {/* Left section: Stakent Logo and Top Staking Assets */}
      <div className="flex items-center">
        <Star className="text-purple-500 mr-2" size={28} />
        <span className="text-xl font-bold text-white mr-6">Stakent</span>
        <span className="text-gray-400 text-sm">Top Staking Assets</span>
      </div>

      {/* Middle section: User Info and Deposit Button */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-800 p-2 rounded-full">
          <img
            src="https://placehold.co/30x30/e94560/ffffff?text=RC"
            alt="Ryan Crawford"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-white text-sm">Ryan Crawford</span>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full flex items-center">
          <Plus size={16} className="mr-2" />
          Deposit
        </button>
      </div>

      {/* Right section: Search, Notifications, Settings */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
          <Bell className="text-gray-300" size={20} /> {' '}
        </button>
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
          <Settings className="text-gray-300" size={20} /> {' '}
        </button>
      </div>
    </header>
  );
};

const StakingAssetCard = ({ asset }:{asset:any}) => {
  const isUp = asset.trend === 'up';
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-start w-1/3 mx-2">
      <div className="flex items-center mb-4">
        {asset.icon}
        <span className="ml-3 text-lg font-semibold text-white">Proof of Stake</span>
        <span className="ml-2 text-lg font-bold text-white">{asset.name}</span>
        <ChevronRight className="text-gray-400 ml-auto" size={20} />
      </div>
      <div className="mb-4">
        <p className="text-gray-400 text-sm">Reward Rate</p>
        <p className="text-2xl font-bold text-white">{asset.rewardRate}</p>
        <p className={`text-sm ${isUp ? 'text-green-500' : 'text-red-500'}`}>
          {isUp ? <TrendingUp size={16} className="inline-block mr-1" /> : <TrendingDown size={16} className="inline-block mr-1" />}
          {asset.change}
        </p>
      </div>
      {/* Simple SVG for chart visualization */}
      <svg width="100%" height="60" viewBox="0 0 100 60" className="mt-auto">
        <path
          d={asset.chartData}
          fill="none"
          stroke={isUp ? '#22C55E' : '#EF4444'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const ActiveStakingItem = ({ asset, amount, icon }:{asset:string, amount:string,icon:ReactNode}) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-3">
      <div className="flex items-center">
        {icon}
        <div className="ml-3">
          <p className="text-white font-medium">{asset}</p>
          <p className="text-gray-400 text-sm">Amount: ${amount}</p>
        </div>
      </div>
      <button className="text-purple-400 hover:text-purple-300 text-sm">
        View Profile
      </button>
    </div>
  );
};

export default function HomeDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-950 font-inter">
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
        <main className="flex-1 p-6 bg-gray-900 rounded-2xl shadow-lg overflow-y-auto">
          {/* Top Staking Assets Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-3">
                <button className="bg-purple-600 text-white px-5 py-2 rounded-full font-semibold">Staking</button>
                <button className="bg-gray-800 text-gray-300 px-5 py-2 rounded-full hover:bg-gray-700">Stablecoin</button>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>Recommended coins for 24 hours</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full">3 Assets</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">24H</span>
                  <ChevronDown size={16} />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Proof of Stake</span>
                  <ChevronDown size={16} />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Desc</span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Top Staking Assets</h2>

            <div className="flex justify-between -mx-2">
              {stakingAssets.map((asset) => (
                <StakingAssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </section>

          {/* Liquid Staking Portfolio */}
          <section className="bg-gray-800 p-6 rounded-xl shadow-md mb-8 flex items-center justify-between">
            <div className="flex items-center">
              <Star className="text-purple-500 mr-3" size={28} />
              <div>
                <h3 className="text-xl font-bold text-white flex items-center">
                  Liquid Staking Portfolio <span className="ml-2 text-xs bg-purple-500 px-2 py-1 rounded-full">New</span>
                </h3>
                <p className="text-gray-400 text-sm mt-1 max-w-sm">
                  An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full flex items-center">
                <Wallet size={20} className="mr-2" />
                Connect with Wallet
              </button>
              <input
                type="text"
                placeholder="Enter a Wallet Address"
                className="bg-gray-900 text-white rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
              />
            </div>
          </section>

          {/* Your Active Stakings */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your active stakings</h2>
            <div className="grid grid-cols-2 gap-4">
              {activeStakings.map((staking) => (
                <ActiveStakingItem key={staking.id} asset={staking.asset} amount={staking.amount} icon={staking.icon} />
              ))}
              {/* Additional items for demonstration */}
              <ActiveStakingItem asset="Meet Sam" amount="30" icon={<User size={20} className="text-blue-400" />} />
              <ActiveStakingItem asset="Balance MAX" amount="31.39686" icon={<CreditCard size={20} className="text-green-400" />} />
            </div>

            <div className="flex items-center justify-between mt-6 bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                    <Star className="text-purple-500 mr-3" size={28} />
                    <div>
                        <h3 className="text-xl font-bold text-white">Stake Avalanche (AVAX)</h3>
                        <p className="text-gray-400 text-sm">Last Update - 40 minutes ago</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full">
                        Upgrade
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-full">
                        Unstake
                    </button>
                    <button className="text-purple-400 hover:text-purple-300 text-sm flex items-center">
                        View Profile <ExternalLink size={16} className="ml-1" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                    <p className="text-gray-400 text-sm mb-2">Momentum</p>
                    <p className="text-white font-semibold">Growth dynamics</p>
                    <div className="flex items-center mt-4">
                        <TrendingDown className="text-red-500 mr-2" size={20} />
                        <span className="text-red-500 text-lg font-bold">-0.82 %</span>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                    <p className="text-gray-400 text-sm mb-2">General</p>
                    <p className="text-white font-semibold">Overview</p>
                    <div className="flex items-center mt-4">
                        <DollarSign className="text-green-500 mr-2" size={20} />
                        <span className="text-green-500 text-lg font-bold">$41.99</span>
                        <span className="text-gray-400 text-sm ml-1">-1.09%</span>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                    <p className="text-gray-400 text-sm mb-2">Risk</p>
                    <p className="text-white font-semibold">Risk assessment</p>
                    <div className="flex items-center mt-4">
                        <Percent className="text-yellow-500 mr-2" size={20} />
                        <span className="text-yellow-500 text-lg font-bold">60.6 %</span>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                    <p className="text-gray-400 text-sm mb-2">Reward</p>
                    <p className="text-white font-semibold">Expected profit</p>
                    <div className="flex items-center mt-4">
                        <TrendingUp className="text-green-500 mr-2" size={20} />
                        <span className="text-green-500 text-lg font-bold">2.23 %</span>
                        <span className="text-gray-400 text-sm ml-1">1.46%</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-6 bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4">
                    <div className="bg-gray-900 p-3 rounded-full">
                        <Zap className="text-yellow-300" size={24} />
                    </div>
                    <div>
                        <p className="text-white font-semibold">Activate Super</p>
                        <p className="text-gray-400 text-sm">Unlock all features on Stakent</p>
                    </div>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full">
                    Upgrade
                </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
