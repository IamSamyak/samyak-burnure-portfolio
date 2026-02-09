import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="glass-nav sticky top-0 z-50 px-6 py-4 md:px-20 lg:px-40">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight">Samyak.</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors" href="#">Home</a>
          <a className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors" href="#journey">Journey</a>
          <a className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors" href="#skills">Stack</a>
          <a className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors" href="#coding">Coding</a>
          <a className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            to="/resume" 
            className="bg-primary text-background-dark px-6 py-2 rounded-lg font-bold text-sm tracking-wide hover:brightness-110 transition-all"
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
