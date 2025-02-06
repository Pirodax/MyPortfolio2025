// PortfolioLayout.tsx
'use client';
import React, { useEffect, useState } from 'react';

const PortfolioLayout: React.FC = () => {
  const [time, setTime] = useState(new Date());
  
  // Met à jour l'heure chaque minute
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Formatage de l'heure en HH:MM
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      className="relative min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center"
      // Utilisation d'une police moderne (Inter)
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Contenu principal en deux colonnes */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Image (25-30% de la largeur) */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="./public/avatar-ludo.jpg"  // Chemin de l'image de profil
            alt="Profile" 
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full" 
          />
        </div>

        {/* Section Texte (70-75% de la largeur), centrée verticalement et horizontalement */}
        <div className="w-full md:w-2/3 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Ludovic Bergeron
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-2xl">
            Software Engineer | Passionné par l’innovation et le design minimaliste.
            J’élabore des solutions élégantes alliant forme et fonctionnalité.
          </p>
          {/* Liens interactifs */}
          <div className="mt-6 space-x-4">
            <a 
              href="https://github.com" 
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:example@example.com" 
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 underline"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLayout;
