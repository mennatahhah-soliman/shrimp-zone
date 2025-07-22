
import './App.css';
import  { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from "./pages/Home";
import Menu from './pages/Menu.js';
import Contact from "./pages/contact.js";
import About from "./pages/about.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scroll from "./components/Scroll";



function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,      
  });
}, []);
  return (
    
    <Router>
      <Scroll /> 
    <div className="App">
    <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />

      </Routes>
    <Footer />

    </div>
    </Router>
  );
}

export default App;
