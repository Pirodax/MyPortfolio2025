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
    maxWidth: '400px', // Pour limiter la largeur sur les grands écrans
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
      {/* About : Bonhomme */}
      <Link href="/about" style={navLinkStyle}>
        <svg width="30" height="30" viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* cercel 
          <circle cx="32" cy="30" r="25" stroke="#fff" fill="none" strokeWidth="2" /> */}
          {/* Tête */}
          <circle cx="32" cy="20" r="10" stroke="#fff" fill="none" strokeWidth="2" />
          {/* Épaules */}
          <path d="M16,50 C16,42,48,42,48,50" stroke="#fff" fill="none" strokeWidth="2" />
        </svg>
        <span style={{ marginLeft: '8px' }}>About</span>
      </Link>

      {/* Work : 4 carrés */}
      <Link href="/work" style={navLinkStyle}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="4" y="4" width="10" height="10" fill="#fff" />
          <rect x="16" y="4" width="10" height="10" fill="#fff" />
          <rect x="4" y="16" width="10" height="10" fill="#fff" />
          <rect x="16" y="16" width="10" height="10" fill="#fff" />
        </svg>
        <span style={{ marginLeft: '8px' }}>Work</span>
      </Link>

      {/* Gallery : Carré avec paysage */}
      <Link href="/gallery" style={navLinkStyle}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          {/* Carré extérieur */}
          <rect x="1" y="1" width="20" height="20" stroke="#fff" strokeWidth="2" fill="none" />
          {/* Montagne (triangle) */}
          <polygon points="0,20 10,10 20,20" fill="none" stroke="#fff" strokeWidth="2" />
          {/* Soleil */}
          <circle cx="18" cy="9" r="2" fill="#fff" />
        </svg>
        <span style={{ marginLeft: '8px' }}>Gallery</span>
      </Link>
    </nav>
  );
};

export default Navbar;
