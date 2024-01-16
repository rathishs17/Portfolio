import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import SimplePaper from './skills';
import MediaCard from './projects';
import SimplePaper1 from './contact';
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<SimplePaper />} />
      <Route path="/projects" element={<MediaCard />} />
      <Route path="contact" element={<SimplePaper1 />} />



    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
