// components/Navbar.tsx
'use client';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  const navStyle: React.CSSProperties = {
    backgroundColor: 'rgba(128,128,128,0.8)',
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '10px 0',
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  };

  const navLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  };

  return (
    <nav style={navStyle}>
      <Link href="/about" style={navLinkStyle}>
        {/* Exemple de logo géométrique */}
        <svg width="30" height="30">
          <polygon points="15,0 30,30 0,30" fill="#fff" />
        </svg>
        <span style={{ marginLeft: '8px' }}>About</span>
      </Link>
      <Link href="/work" style={navLinkStyle}>
        <svg width="30" height="30">
          <rect x="5" y="5" width="20" height="20" fill="#fff" />
        </svg>
        <span style={{ marginLeft: '8px' }}>Work</span>
      </Link>
      <Link href="/gallery" style={navLinkStyle}>
        <svg width="30" height="30">
          <circle cx="15" cy="15" r="10" fill="#fff" />
        </svg>
        <span style={{ marginLeft: '8px' }}>Gallery</span>
      </Link>
    </nav>
  );
};

export default Navbar;
