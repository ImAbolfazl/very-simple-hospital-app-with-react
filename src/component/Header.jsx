import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import icon from "../assets/icon.png";

const Header = () => {
  const pathname = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Login", link: "/login" },
    { name: "Dashboard", link: "/dashboard" },
  ];

  return (
    <div className='px-4 sm:px-10 py-6 bg-[#1E40AF] text-white flex flex-col sm:flex-row justify-between items-center text-3xl sm:rounded-b-3xl fixed top-0 left-0 right-0 z-50 gap-6 sm:gap-0'>
      <Link className='flex items-center gap-4' to="/">
        <img src={icon} alt="Xd" className='h-10' />
        <p className="text-2xl sm:text-3xl">Xd Hospital</p>
      </Link>
      <div className='hidden sm:flex gap-5 text-xl lg:text-3xl'>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.link}
            className={`${pathname === link.link ? "text-[#60A5FA] font-bold" : ""} hover:text-[#60A5FA] transition`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden absolute right-6 top-8"
      >
        {isOpen ? (
          <span className="text-4xl">×</span>
        ) : (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className='sm:hidden flex flex-col items-center gap-6 pt-4 pb-8 bg-[#1E40AF] w-full text-2xl'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              onClick={() => setIsOpen(false)}
              className={`${pathname === link.link ? "text-[#60A5FA] font-bold" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;