import { useEffect, useState } from 'react';
import { toggleTheme } from '../cods/theme.js';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { MoonIcon, SunIcon } from '../assets/icon.jsx';

function Navbar() {
  const { lang } = useParams();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const updateTheme = () => {
      setIsDark(html.classList.contains('dark'));
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleToggleTheme = () => {
    toggleTheme();
    setIsDark(prev => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 shadow backdrop-blur-md border-b border-gray-300 dark:border-gray-700">
      <nav className='flex containers justify-between items-center'>
        <div className='flex text-center gap-4'>
          <button className='cursor-pointer' onClick={() => { document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Scills
          </button>
          <button className='cursor-pointer' onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Project
          </button>
          <button className='cursor-pointer' onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Contact
          </button>          
          <button className='cursor-pointer' onClick={() => { document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Home
          </button>

        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => {
              handleToggleTheme();
              const btn = document.querySelector('.theme-toggle-btn');
              btn.classList.add('rotate');
              setTimeout(() => {
                btn.classList.remove('rotate');
              }, 500);
            }}
            className="theme-toggle-btn"
            style={{ fontSize: '1.4rem', transition: 'transform 0.4s ease', background: 'none', border: 'none', cursor: 'pointer', }}>
            {isDark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>

    </header>
  );
}

export default Navbar;
