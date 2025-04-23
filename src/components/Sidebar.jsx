import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BarChart, TrendingUp, Bell, Settings,User,Lock, Globe } from 'lucide-react';


export default function Sidebar() {
  return (
    <div className="fixed w-64 h-screen bg-gray-900 text-white flex flex-col border-r border-gray-700">
      {/* Sidebar Header with Logo + Name */}
      <div className="flex flex-col">
  <div className="flex items-center gap-3 px-4 py-3">
    <div className="bg-gray-800 p-2 rounded-lg">
      <Shield className="h-6 w-6 text-blue-400" />
    </div>
    <h1 className="text-lg font-bold tracking-wide">Aegis Eye</h1>
  </div>
  <hr className="border-t border-gray-700 w-full" />
</div>





      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2 text-sm px-4">
      <div className="mt-5 text-x text-gray-500">Dashboard</div>
        <Link to="/" className="flex items-center hover:bg-gray-800 px-3 py-2 rounded">
          <BarChart className="h-5 w-5 mr-2" />
          Overview
        </Link>
        <Link to="analytics" className="flex items-center hover:bg-gray-800 px-3 py-2 rounded">
          <TrendingUp className="h-5 w-5 mr-2" />
          Analytics
        </Link>
        <Link to="traffic" className="flex items-center hover:bg-gray-800 px-3 py-2 rounded">
          <Shield className="h-5 w-5 mr-2" />
          Traffic
        </Link>
        <Link to="alerts" className="flex items-center hover:bg-gray-800 px-3 py-2 rounded">
          <Bell className="h-5 w-5 mr-2" />
          Alerts
        </Link>

        <div className="mt-4 text-x text-gray-400">Security</div>
        <Link to="threats" className="flex items-center hover:bg-gray-800 px-3 py-2 rounded">
          <Shield className="h-5 w-5 mr-2" />
          Threats
        </Link>
        <Link to="/firewall" className="flex items-center hover:bg-gray-800 px-3 py-2 rounded">
          <Shield className="h-5 w-5 mr-2" />
          Firewall
        </Link>
        <Link to="protectedSites" className="flex items-center hover:bg-gray-800 px-3 py-2 rounded">
          <Shield className="h-5 w-5 mr-2" />
          Protected Sites
        </Link>

        <div className="mt-4 text-x text-gray-400">Management</div>
        <Link to="user" className="flex items-center hover:bg-gray-800 px-3 py-2 rounded">
        <User className="h-5 w-5 mr-2" />
          user
        </Link>
        <Link to="settings" className="flex items-center hover:bg-gray-800 px-3 py-2 rounded">
          <Settings className="h-5 w-5 mr-2" />
          Settings
        </Link>
      </nav>

      {/* Footer */}
      
      <div className="flex mt-auto border-t border-gray-700 px-4 py-4 text-xs text-gray-500">
      <div><Shield className="h-6 w-6 mt-1 text-blue-400"/></div>
      <div className='ml-3 mt-0 text-x text-gray-100'>Protected by<br />Aegis Eye v1.0</div>
      
      </div>
    </div>
  );
}
