import Navbar from './components/Navbar';
import Background from './components/background'; 

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <Background />
        <main style={{ padding: '20px', marginTop: '60px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
