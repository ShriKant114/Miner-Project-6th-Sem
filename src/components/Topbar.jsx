import React, { useState } from 'react';
import { Bell, Sun, Moon } from 'lucide-react';

export default function Topbar() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className={`fixed left-64 right-0 top-0 h-16 py-8 flex items-center justify-end px-6 border-b ${darkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-white text-black border-gray-200'}`}>
      <div className="flex items-center gap-5">
        {/* Notification Bell */}
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-400 hover:text-white" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <Moon className="w-5 h-5 text-white" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>
      </div>
    </header>
  );
}
