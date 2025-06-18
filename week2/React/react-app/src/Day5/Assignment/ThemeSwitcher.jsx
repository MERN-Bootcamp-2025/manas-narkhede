// components/ThemeSwitcher.jsx
import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = ''; // reset classes
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-container">
      <h2>🎨 Theme Switcher</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <p className="theme-label">Current Theme: <strong>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</strong></p>
    </div>
  );
};

export default ThemeSwitcher;
