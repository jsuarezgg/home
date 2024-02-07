import React, { useEffect, useState } from 'react';
import './App.scss';
import { AppProvider } from './AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Buttons, Content, Footer, Particles, Toggle, QuestionPage, YesResponsePage } from 'components'; // Ensure YesResponsePage is also imported
import config from './config';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const init = () => {
    // Your init logic here
    if (window.matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)').matches) {
      setIsMobile(true);
    }

    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme === 'true') {
      localStorage.setItem('theme', 'dark');
    } else if (localStorageTheme === 'false') {
      localStorage.setItem('theme', 'light');
    }

    setIsReady(true);
  };

  useEffect(() => {
    if (!isReady) {
      init();
    }
  }, [isReady]);

  return isReady ? (
    <AppProvider config={config} isMobile={isMobile}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<><Toggle /><Content /><Buttons /><Footer /><Particles /></>} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/yes-response" element={<YesResponsePage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  ) : (
    <div>Loading...</div> // Added a simple loading indicator
  );
};

export default App;
