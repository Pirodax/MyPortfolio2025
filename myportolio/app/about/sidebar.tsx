"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "studies", "skills"];
      let currentSection = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-[#121212] text-white flex flex-col items-center p-6 shadow-lg border-r border-gray-400/10">
      {/* Photo de profil avec effet de bordure amélioré */}
      <div className="relative">
        <Image 
          src="/avatar_Ludo.jpg"
          alt="Profile Picture" 
          width={100} 
          height={100} 
          className="rounded-full border-4 border-gray-600 hover:border-gray-400 transition-all duration-300 shadow-xl"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800" />
      </div>
      
      <p className="mt-6 text-lg font-semibold">Europe/Paris</p>

      {/* Bouton English */}
      <div className="relative group">
        <button className="lang-button">Anglais</button>
        <span className="tooltip">Avancé</span>
      </div>

      {/* Bouton chinois */}
      <div className="relative group">
        <button className="lang-button">Chinois</button>
        <span className="tooltip">débutant</span>
      </div>

      {/* Bouton françai */}
      <div className="relative group">
          <button className="lang-button">Français</button>
          <span className="tooltip">Native</span>
        </div>

      {/* Liens de navigation internes */}
      <nav className="mt-8 w-full">
        {["about", "studies", "skills"].map((id) => (
          <Link 
            key={id} 
            href={`#${id}`} 
            className={`
              block
              w-full
              px-4
              py-2
              mb-2
              rounded
              transition-all
              hover:bg-gray-800
              ${activeSection === id ? "bg-gray-800 font-bold text-white" : "text-gray-300"}
            `}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

