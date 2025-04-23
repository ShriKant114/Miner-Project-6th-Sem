import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Analytics from './pages/Analytics';
import Traffic from './pages/Traffic';
import Alerts from './pages/Alerts';
import Threats from './pages/Threats';
import Firewall from './pages/Firewall';
import ProtectedSites from './pages/ProtectedSites';
import User from './pages/User';
import Settings from './pages/Settings';


function App() {
  return (
    <Router>
      
        <Topbar />
        
          <Sidebar />
         
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/traffic" element={<Traffic />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/threats" element={<Threats />} />
              <Route path="/firewall" element={<Firewall />} />
              <Route path="/protectedSites" element={<ProtectedSites />} />
              <Route path="/user" element={<User />} />
              <Route path="/settings" element={<Settings />} />             
            </Routes>
         
      
    </Router>
  );
}

export default App;
