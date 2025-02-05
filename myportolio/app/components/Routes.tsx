// App.tsx ou Routes.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout';
import About from '../about/page';
import Work from '../work/page';
import Gallery from '../gallery/page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route parent avec layout */}
        <Route path="/" element={<Layout />}>
          {/* Routes enfants */}
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="gallery" element={<Gallery />} />
          {/* Vous pouvez aussi définir une route index ou une redirection */}
          <Route index element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
