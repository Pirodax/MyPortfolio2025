'use client';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  const navStyle: React.CSSProperties = {
    backgroundColor: 'rgba(128,128,128,0.8)',
    position: 'fixed',
    top: '20px', // Décalage depuis le haut pour un effet "flottant"
    left: '50%',
    transform: 'translateX(-50%)', // Centre horizontalement la navbar
    width: '90%',
    maxWidth: '800px', // Pour limiter la largeur sur les grands écrans
    padding: '10px 20px',
    zIndex: 1000,
    transition: 'background-color 0.3s ease',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '30px',
    borderRadius: '50px', // Bord fortement arrondi pour un effet pillule
    backdropFilter: 'blur(10px)', // Légère transparence et flou pour un effet moderne
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Ombre subtile pour du relief
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
        {/* Logo géométrique : triangle */}
        <svg width="30" height="30">
          <polygon points="15,0 30,30 0,30" fill="#fff" />
        </svg>
        <span style={{ marginLeft: '8px' }}>About</span>
      </Link>
      <Link href="/work" style={navLinkStyle}>
        {/* Logo géométrique : carré */}
        <svg width="30" height="30">
          <rect x="5" y="5" width="20" height="20" fill="#fff" />
        </svg>
        <span style={{ marginLeft: '8px' }}>Work</span>
      </Link>
      <Link href="/gallery" style={navLinkStyle}>
        {/* Logo géométrique : cercle */}
        <svg width="30" height="30">
          <circle cx="15" cy="15" r="10" fill="#fff" />
        </svg>
        <span style={{ marginLeft: '8px' }}>Gallery</span>
      </Link>
    </nav>
  );
};

export default Navbar;
