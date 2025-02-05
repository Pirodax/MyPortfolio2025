'use client';

import { useState, useEffect } from 'react';

interface BackgroundProps {
  children?: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(
      circle 600px at ${mousePosition.x}px ${mousePosition.y}px,
      transparent 0%,
      rgba(0, 0, 0, 0.20) 100%
    )`,
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none' as const,
    zIndex: 2,
  };

  const gridStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `radial-gradient(#00ff9580 1px, transparent 1px)`,
    backgroundSize: '30px 30px',
    opacity: '0.2',
    pointerEvents: 'none' as const,
    zIndex: 1,
  };

  return (
    <div className="relative w-full h-full bg-gray-900">
      <div style={gridStyle} />
      {children}
      <div style={spotlightStyle} />
    </div>
  );
}
