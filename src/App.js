import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';

// Components
import CustomCursor from './components/ui/CustomCursor';

function App() {
  useEffect(() => {
    const smoothPageScroll = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' && e.target.href) {
        const href = e.target.getAttribute('href');

        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.slice(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', smoothPageScroll);

    return () => {
      document.removeEventListener('click', smoothPageScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
