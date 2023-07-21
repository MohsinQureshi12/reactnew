import React from 'react';
import Home from './components/Home';
import About from "./components/About";
// import './App.css';
import'./index.css'
import Contact from './components/Contact';
import Porject from './components/Porject';
import { Routes,Route } from 'react-router';







function App() {
  return (
    // <div className="App">
    //   <>hi</>
    //   <Home/>
    //   <About/>
    //   <Project/>
    //   <Contact/>
    // </div>

    <>
    
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/project" element={<Porject/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
