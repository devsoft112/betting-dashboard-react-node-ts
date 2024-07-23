import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import OfflinePage from './pages/OfflinePage';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Router>
      <Layout>
        {isOnline ? (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        ) : (
          <OfflinePage />
        )}
        <ToastContainer />
      </Layout>
    </Router>
  );
};

export default App;
