import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUserTie,
  FaCalendarAlt,
  FaComments,
  FaEnvelope,
  FaLock,
  FaUserCog,
  FaBars,
} from "react-icons/fa";

const sections = [
  {
    heading: null, // For Dashboard at the top (no heading)
    items: [
      { path: "/", icon: <FaUserTie />, label: "Dashboard" },
    ],
  },
  {
    heading: "My Activities",
    items: [
      { path: "/messages", icon: <FaEnvelope />, label: "Messages" },
      { path: "/calendar", icon: <FaCalendarAlt />, label: "Calendar" },
      { path: "/info-session", icon: <FaComments />, label: "Info Session" },
    ],
  },
  {
    heading: "Account Settings",
    items: [
      { path: "/personal-info", icon: <FaUserCog />, label: "Personal Info" },
      { path: "/login-security", icon: <FaLock />, label: "Login & Security" },
    ],
  },
];

function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded transition-all duration-300 transform hover:scale-105"
        style={{ 
          background: 'var(--color-primary)',
          color: 'var(--color-bg)',
          boxShadow: '0 2px 4px rgba(var(--color-primary), 0.2)'
        }}
      >
        <FaBars className="text-xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 min-h-screen w-64 p-6 z-40 transition-all duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ 
          background: 'var(--color-bg)',
          color: 'var(--color-text)',
          borderRight: '1px solid var(--color-secondary)',
          boxShadow: '2px 0 4px rgba(var(--color-primary), 0.1)'
        }}
      >
        {/* Close Button (Mobile) */}
        <div className="md:hidden flex justify-end">
          <button 
            onClick={() => setOpen(false)} 
            className="text-xl mb-4 p-2 rounded transition-all duration-300 transform hover:scale-105"
            style={{ color: 'var(--color-primary)' }}
          >
            <FaBars />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Mentor"
              className="w-20 h-20 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
              style={{ 
                border: '4px solid var(--color-primary)',
                boxShadow: '0 2px 4px rgba(var(--color-primary), 0.2)'
              }}
            />
            <div 
              className="absolute bottom-0 right-0 w-4 h-4 rounded-full"
              style={{ 
                background: 'var(--color-accent)',
                border: '2px solid var(--color-bg)'
              }}
            ></div>
          </div>
          <h2 className="mt-3 text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>Hardik Singh</h2>
          <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>Mentor</p>
        </div>

        {/* Grouped Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            {section.heading && (
              <h4 
                className="uppercase text-xs font-semibold px-2 mb-2"
                style={{ color: 'var(--color-secondary)' }}
              >
                {section.heading}
              </h4>
            )}
            <ul className="space-y-2">
              {section.items.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-4 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-[1.02] ${
                        isActive ? 'shadow-md' : ''
                      }`}
                      style={{ 
                        background: isActive ? 'var(--color-primary)' : 'var(--color-bg)',
                        color: isActive ? 'var(--color-bg)' : 'var(--color-text)',
                        border: `1px solid ${isActive ? 'var(--color-primary)' : 'var(--color-secondary)'}`,
                        boxShadow: isActive ? '0 2px 4px rgba(var(--color-primary), 0.2)' : 'none'
                      }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
