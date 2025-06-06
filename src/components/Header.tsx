"use client"

import React, { useState, useRef } from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  ChevronDown, 
  Plus,
  LogOut,
  User,
  Wallet,
  HelpCircle,
  ExternalLink,
  Check,
  Clock,
  CreditCard,
  PlusCircle,
  ChevronsUpDown,
  MenuIcon
} from 'lucide-react';
import useClickOutside from '@/hooks/useClickOutside';
import { IconButton } from '@mui/material';
import { Drawer } from '@mui/material';
import Sidebar from './Sidebar';

const notifications = [
  {
    id: 1,
    title: 'Staking Successful',
    description: 'Your stake of 32 ETH has been confirmed',
    time: '2 min ago',
    isRead: false,
    type: 'success'
  },
  {
    id: 2,
    title: 'Reward Received',
    description: 'You received 0.0512 ETH in staking rewards',
    time: '1 hour ago',
    isRead: false,
    type: 'success'
  },
  {
    id: 3,
    title: 'Pending Withdrawal',
    description: 'Your withdrawal request is being processed',
    time: '3 hours ago',
    isRead: true,
    type: 'pending'
  }
];

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [menu,setMenu]=useState<boolean>(false)
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLDivElement>(null);
  const notificationsMenuRef = useRef<HTMLDivElement>(null);
  const notificationsButtonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(profileMenuRef, () => setShowProfileMenu(false), profileButtonRef);
  useClickOutside(notificationsMenuRef, () => setShowNotifications(false), notificationsButtonRef);

  return (
    <div className="h-16 p-4 py-7 pb-[2.25em] bg-[#0D0D0F] flex items-center justify-between border-b border-[#27272A] sticky top-0 z-50">

      {/* Center section - User Profile & Deposit */}
      <div className="flex items-center md:space-x-10">
        {/*Logo  */}
        <div className="ml-2 md:hidden flex items-center justify-between text-white flex-1">
          <p className='cursor-pointer'>
            <span className="font-semibold flex items-start">Stakent <span className="text-xs text-[#71717A] ml-1">®</span></span>
            <div className="text-xs text-[#71717A]">Top Staking Assets</div>
          </p>
          
          <span>
            <ChevronsUpDown size={16} className="ml-1 text-[#71717A] hover:text-white transition-colors duration-200 cursor-pointer" />
          </span>
        </div>
        {/* User Profile */}
        <div className="relative md:flex hidden">
          <div 
            ref={profileButtonRef}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center pl-1 pr-3 py-1 cursor-pointer hover:bg-[#27272A] transition-colors gap-x-2"
          >
            <div className="w-9 h-9 rounded-full flex items-center border border-[#7C3AED] justify-center mr-2">
              {/* <span className="text-white text-sm font-medium">RC</span> */}
              <img src="/user.png" alt="user" className="h-8 w-8 rounded-full" />
            </div>
            <div className='lg:block hidden'>
              <span className="flex text-[#71717A] text-[10px] items-end justify-start">@ryan997 <span className="text-white ml-2 bg-[#5e5e5e3b] p-2 py-1 rounded-md text-[7px]">PRO</span></span>
              <span className="text-white text-sm">Ryan Crawford</span>
            </div>
            <ChevronDown 
              size={16} 
              className={`ml-1 text-[#71717A] transition-transform duration-200 ${showProfileMenu ? 'transform rotate-180' : ''}`} 
            />
          </div>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div ref={profileMenuRef} className="absolute right-0 mt-2 w-64 bg-[#17181C] border border-[#27272A] rounded-xl shadow-lg py-2 animate-fadeIn">
              <div className="px-4 py-3 border-b border-[#27272A]">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center">
                    <span className="text-white text-sm font-medium">RC</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-white text-sm font-medium">Ryan Crawford</p>
                    <p className="text-[#71717A] text-xs">ryan@stakent.com</p>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <button className="w-full px-4 py-2 flex items-center text-[#E4E4E7] hover:bg-[#27272A] text-sm">
                  <User size={16} className="mr-2" />
                  Profile Settings
                </button>
                <button className="w-full px-4 py-2 flex items-center text-[#E4E4E7] hover:bg-[#27272A] text-sm">
                  <Wallet size={16} className="mr-2" />
                  Wallet Settings
                </button>
                <button className="w-full px-4 py-2 flex items-center text-[#E4E4E7] hover:bg-[#27272A] text-sm">
                  <HelpCircle size={16} className="mr-2" />
                  Help Center
                </button>
                <div className="border-t border-[#27272A] mt-2 pt-2">
                  <button className="w-full px-4 py-2 flex items-center text-[#EF4444] hover:bg-[#27272A] text-sm">
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Deposit Button */}
        <button className="md:flex hidden items-center px-4 py-2 bg-[#9370db] hover:bg-[#6D28D9] transition-all duration-200 rounded-xl text-black text-sm font-semibold hover:scale-105 active:scale-95">
          {/* <Plus size={16} className="mr-1" /> */}
          Deposit
          <PlusCircle size={16} className="ml-1" />
        </button>
      </div>

      {/* Right section - Search & Actions */}
      <div className="flex items-center md:space-x-3">
        {/* User Profile */}
        <div className="relative md:hidden flex">
          <div 
            ref={profileButtonRef}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center pl-1 pr-3 py-1 cursor-pointer hover:bg-[#27272A] transition-colors gap-x-2"
          >
            <div className="w-9 h-9 rounded-full flex items-center border border-[#7C3AED] justify-center mr-2">
              {/* <span className="text-white text-sm font-medium">RC</span> */}
              <img src="/user.png" alt="user" className="h-8 w-8 rounded-full" />
            </div>
            <div className='md:flex hidden'>
              <span className="flex text-white text-[10px] items-end justify-start">@ryan997 <span className="text-white text-[#71717A] ml-2 bg-[#5e5e5e3b] p-2 rounded-md text-[7px]">PRO</span></span>
              <span className="text-white text-sm">Ryan Crawford</span>
            </div>
            <ChevronDown 
              size={16} 
              className={`ml-1 text-[#71717A] transition-transform duration-200 ${showProfileMenu ? 'transform rotate-180' : ''}`} 
            />
          </div>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div ref={profileMenuRef} className="absolute right-0 mt-2 w-64 bg-[#17181C] border border-[#27272A] rounded-xl shadow-lg py-2 animate-fadeIn">
              <div className="px-4 py-3 border-b border-[#27272A]">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center">
                    <span className="text-white text-sm font-medium">RC</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-white text-sm font-medium">Ryan Crawford</p>
                    <p className="text-[#71717A] text-xs">ryan@stakent.com</p>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <button className="w-full px-4 py-2 flex items-center text-[#E4E4E7] hover:bg-[#27272A] text-sm">
                  <User size={16} className="mr-2" />
                  Profile Settings
                </button>
                <button className="w-full px-4 py-2 flex items-center text-[#E4E4E7] hover:bg-[#27272A] text-sm">
                  <Wallet size={16} className="mr-2" />
                  Wallet Settings
                </button>
                <button className="w-full px-4 py-2 flex items-center text-[#E4E4E7] hover:bg-[#27272A] text-sm">
                  <HelpCircle size={16} className="mr-2" />
                  Help Center
                </button>
                <div className="border-t border-[#27272A] mt-2 pt-2">
                  <button className="w-full px-4 py-2 flex items-center text-[#EF4444] hover:bg-[#27272A] text-sm">
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Notifications */}
        <div className="relative">
          <button 
            ref={notificationsButtonRef}
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative w-9 h-9 text-white flex items-center justify-center rounded-full bg-black border-l border-t border-[#27272A] hover:bg-[#27272A] transition-colors"
          >
            <Bell size={18} className="text-white" />
            <span className="absolute top-0 right-0 p-1 px-2 rounded-xl text-[6px] text-center bg-[#7C3AED]">2</span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div ref={notificationsMenuRef} className="absolute right-0 mt-2 w-96 bg-[#17181C] border border-[#27272A] rounded-xl shadow-lg animate-fadeIn">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272A]">
                <h3 className="text-white text-sm font-medium">Notifications</h3>
                <button className="text-[#7C3AED] text-xs hover:underline">Mark all as read</button>
              </div>
              <div className="py-2 max-h-[400px] overflow-y-auto">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className="px-4 py-3 hover:bg-[#27272A] cursor-pointer flex items-start"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      notification.type === 'success' ? 'bg-[#059669]/10' : 'bg-[#EAB308]/10'
                    }`}>
                      {notification.type === 'success' ? (
                        <Check size={16} className="text-[#059669]" />
                      ) : (
                        <Clock size={16} className="text-[#EAB308]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-white text-sm font-medium">{notification.title}</p>
                        <span className="text-[#71717A] text-xs">{notification.time}</span>
                      </div>
                      <p className="text-[#71717A] text-sm mt-1">{notification.description}</p>
                    </div>
                    {!notification.isRead && (
                      <span className="w-2 h-2 rounded-full bg-[#7C3AED] mt-2 ml-2"></span>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-[#27272A] flex items-center justify-center">
                <button className="text-[#7C3AED] text-sm hover:underline flex items-center">
                  View All
                  <ExternalLink size={14} className="ml-1" />
                </button>
              </div>
            </div>
          )}
        </div>
        <IconButton sx={{display:{sm:'none',xs:'flex'}}} onClick={()=>setMenu(!menu)} >
          <MenuIcon color='white' />
        </IconButton>
        <Drawer anchor='right' variant='temporary' open={menu} onClose={()=>setMenu(false)} >
          <Sidebar />
        </Drawer>
        {/* Search */}
        <div className="relative md:flex hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-48 bg-black text-white pl-4 pr-9 py-2 rounded-xl text-sm placeholder-white border-t border-l border-[#27272A] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
          <Search
            size={16}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="md:flex hidden items-center space-x-2">
          <button className=" p-2 px-3 flex text-white items-center justify-between gap-x-2 text-sm rounded-2xl bg-black border border-l border-t border-[#27272A] hover:bg-[#27272A] transition-colors">
            Settings
            <Settings size={18} className="text-white" />{" "}
          </button>
          <IconButton sx={{display:{md:'none' ,sm:'flex',xs:'none'}}} onClick={()=>setMenu(!menu)} >
            <MenuIcon color='white' />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header; 