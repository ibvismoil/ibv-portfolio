import { useEffect, useState } from 'react';
import { toggleTheme } from '../cods/theme.js';
import { useParams } from 'react-router-dom';
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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 shadow backdrop-blur-md border-b border-gray-300 dark:border-gray-700">
      <nav className="flex items-center justify-between containers whitespace-nowrap ">
        <div className="flex items-center gap-4 text-sm sm:text-base">
          <button className="cursor-pointer hover:underline transition" onClick={() => scrollTo('skills')}>
            Skills
          </button>
          <button className="cursor-pointer hover:underline transition" onClick={() => scrollTo('projects')}>
            Projects
          </button>
          <button className="cursor-pointer hover:underline transition" onClick={() => scrollTo('contact')}>
            Contact
          </button>
          <button className="cursor-pointer hover:underline transition" onClick={() => scrollTo('home')}>
            Home
          </button>
        </div>
        <button
          onClick={() => {
            handleToggleTheme();
            const btn = document.querySelector('.theme-toggle-btn');
            btn.classList.add('rotate');
            setTimeout(() => {
              btn.classList.remove('rotate');
            }, 600);
          }}
          className="theme-toggle-btn text-xl appearance-none transition-transform duration-300 ease-in-out hover:scale-110 hover:text-amber-300  ">
          {isDark ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
