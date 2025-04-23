import React from "react";
import { Shield, Lock, Globe, Network } from "lucide-react";


const Firewall = () => {
  return (

    <div className="ml-64 pt-20 px-8 pb-12 bg-[#0f172a] min-h-screen text-white">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Shield className="text-cyan-400" />
        Firewall Settings
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <StatCard icon={<Shield />} title="Active Rules" value="12" subtitle="Rules enabled" />
        <StatCard icon={<Lock />} title="Blocked IPs" value="234" subtitle="Last 24 hours" />
        <StatCard icon={<Network />} title="Protected Ports" value="45" subtitle="Active monitoring" />
        <StatCard icon={<Globe />} title="Threat Level" value="Medium" subtitle="Current status" />
      </div>

      {/* Rules Section */}
      <div className="bg-[#0f172a] rounded-xl p-6 shadow-lg border border-gray-700">
  <h2 className="text-3xl font-semibold mb-4 text-white-100">Firewall Rules</h2>
  <div className="flex flex-col gap-5">
    <RuleToggle className="bg-pink-500" name="Block Suspicious IPs" enabled />
    <RuleToggle className="bg-pink-500" name="DDoS Protection" enabled />
    <RuleToggle className="bg-pink-500" name="Port Scanning Prevention" enabled />
    <RuleToggle className="bg-pink-500" name="SQL Injection Protection" enabled />
    <RuleToggle className="bg-pink-500" name="XSS Protection" enabled />
  </div>
</div>

    </div>
  );
};

const StatCard = ({ icon, title, value, subtitle }) => (
  <div className="border border-gray-700 rounded-xl px-5 py-6 h-full bg-[#1e293b] hover:border-cyan-400 transition-colors">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-400">{title}</h3>
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <div className="text-cyan-400">{icon}</div>
    </div>
  </div>
);

const RuleToggle = ({ name, enabled }) => (
  <div className="flex justify-between items-center py-4 px-4 bg-[#334155] hover:bg-[#475569] transition-colors rounded-lg border border-gray-600">
    <span className="text-base font-medium text-white">{name}</span>
    <label className="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" defaultChecked={enabled} className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
    </label>
  </div>
);

export default Firewall;
