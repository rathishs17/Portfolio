import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import SimplePaper from './skills';
import MediaCard from './projects';
import SimplePaper1 from './contact';
const appstyle = {
  backgroundColor: '#101629',
  color:'white',
  minHeight: '100vh', 
};
const App = () => (
  <div style={appstyle}>

  <BrowserRouter>
  <Home/>
<About/>
<SimplePaper/>
<MediaCard/>
<SimplePaper1/>
  </BrowserRouter>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


















  {/* //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/skills" element={<SimplePaper />} />
  //     <Route path="/projects" element={<MediaCard />} />
  //     <Route path="/contact" element={<SimplePaper1 />} />



  //   </Routes> */}









// import React from 'react';
// import ReactDOM from 'react-dom';

// const Home = () => (
//   <div id="home">
//     <h1>Home</h1>
//   </div>
// );

// const About = () => (
//   <div id="about">
//     <h1>About</h1>
//   </div>
// );

// const Skills = () => (
//   <div id="skills">
//     <h1>Skills</h1>
//   </div>
// );

// const Projects = () => (
//   <div id="projects">
//     <h1>Projects</h1>
//   </div>
// );

// const Contact = () => (
//   <div id="contact">
//     <h1>Contact</h1>
//   </div>
// );

// const App = () => {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><button onClick={() => scrollToSection('home')}>Home</button></li>
//           <li><button onClick={() => scrollToSection('about')}>About</button></li>
//           <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
//           <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
//           <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
//         </ul>
//       </nav>
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </div>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

