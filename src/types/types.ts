// Define a color palette for consistency
export interface AppColors {
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

  background: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  accent: string;
  accentHover: string;
  divider: string;
  hover: string;
}

export const colors: AppColors = {
  primaryBg: '#111317', // Darker background for the overall page
  secondaryBg: '#191b1f', // Slightly lighter background for main content area
  // cardBg: '#212428', // Card background color
  textColor: '#e0e0e0', // Light text color
  accentColor: '#9246FF', // Primary purple accent
  secondaryAccent: '#4A4C51', // Grayish accent for some buttons/elements
  borderColor: '#33363b', // Border color for elements
  hoverColor: '#2a2d32', // Hover state color for interactive elements
  purpleText: '#9246FF',
  greenText: '#22C55E',
  redText: '#EF4444',
  yellowText: '#FACC15',
  grayText: '#A0A0A0',
  lightGrayText: '#C0C0C0',
  darkGrayText: '#606060',
  white: '#ffffff',


  background: '#0D0D0F',
  cardBg: '#17181C',
  textPrimary: '#FFFFFF',
  textSecondary: '#71717A',
  textTertiary: '#52525B',
  accent: '#7C3AED',
  accentHover: '#6D28D9',
  divider: '#27272A',
  hover: 'rgba(255, 255, 255, 0.05)'
};

// Define types for Staking Asset data
export interface StakingAsset {
  id: number;
  name: string;
  icon: React.ReactNode; // Using React.ReactNode for Lucide icons
  rewardRate: string;
  change: string;
  chartData: string; // SVG path data
  trend: 'up' | 'down';
}

// Define types for Active Staking data
export interface ActiveStaking {
  id: number;
  asset: string;
  amount: string;
  icon: React.ReactNode;
} 
