'use client';

import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-gray-200">
      {/* 
        Neon/Cyberpunk Accents
        You can enhance this by adding custom fonts or a Tailwind plugin
        for neon glow effects. We’ll define some inline styles below to 
        showcase the neon text style.
      */}
      <style jsx>{`
        .neon-text {
          color: #0ff;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #00f,
            0 0 30px #08f;
        }
        .neon-border {
          box-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff;
        }
        .transition-glow:hover {
          text-shadow:
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 30px #08f;
          transition: text-shadow 0.3s ease-in-out;
        }
      `}</style>

      {/* Header */}
      <header className="w-full max-w-4xl py-8">
        <h1
          className="text-3xl md:text-5xl font-bold neon-text tracking-wide mb-4"
          style={{ letterSpacing: "0.05em" }}
        >
          Ludovic Bergeron - Software Engineer
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm md:text-base">
          {/* Contact Information */}
          <div className="space-y-1">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:bergeron@et.esiea.fr"
                className="transition-glow hover:text-teal-300"
              >
                bergeron@et.esiea.fr
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +33 6 47 47 11 45
            </p>
            <p>
              <span className="font-semibold">Address:</span> 17 rue d’hauteville, 75010 Paris
            </p>
          </div>
          {/* Portfolio Link */}
          <div>
            <p>
              <span className="font-semibold">Portfolio:</span>{" "}
              <a
                href="https://ludovicbergeron.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-glow hover:text-teal-300"
              >
                ludovicbergeron.com
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="w-full max-w-4xl space-y-8">
        {/* Profile Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold neon-text">Profile Summary</h2>
          <p className="leading-relaxed">
            I am passionate about creation, innovation, and software development, 
            always seeking new ways to bring ideas to life. I aim to contribute 
            to the field of programming with innovative projects and will be 
            available from September 2025 after completing a semester in Taiwan.
          </p>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold neon-text">Education</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>ESIEA, Paris:</strong> 3rd Year Student in Engineering (Expected Graduation: 2027)
            </li>
            <li>
              <strong>Exchange at Tamkang University, Taiwan:</strong> 2024-2025, Computer Science &amp; Information Engineering
            </li>
          </ul>
        </section>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold neon-text">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "C",
              "JavaScript",
              "TypeScript",
              "Java",
              "Python",
              "Dart",
              "Next.js",
              "React",
              "Docker",
              "Nginx",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-800 rounded neon-border text-sm md:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold neon-text">Experience</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              Current Projects
            </h3>
            <p>
              <strong>Mobile and Web Application Development:</strong> 
              Developing a cross-platform solution utilizing Next.js, TypeScript, 
              JavaScript, Docker, HTML/CSS, and Nginx.
            </p>
            <p>
              Involved in diverse projects at ESIEA, including building a social 
              network, simulating a bee hive, creating an intelligent robot, and 
              developing an autonomous vehicle.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Awards and Recognition</h3>
            <p>
              Received an internal award at ESIEA for a project promoting Sustainable 
              Development Goals.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Links to Work</h3>
            <p>
              Check out my GitHub for repositories and technical contributions:{" "}
              <a
                href="https://github.com/Pirodax"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-glow hover:text-teal-300"
              >
                github.com/Pirodax
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mt-8 py-4 text-center border-t border-gray-700">
        <h2 className="text-xl font-semibold neon-text mb-2">Languages</h2>
        <p>
          Advanced English, Beginner Chinese, Elementary Spanish, Native French
        </p>
      </footer>
    </div>
  );
}
