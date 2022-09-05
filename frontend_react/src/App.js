import React from 'react';
import './App.scss';

import {About, Footer, Header, Skills, Projects, Work } from './container'; 
import { Navbar } from './components';

const App = () => {
  return (
    <div className="app">
        <Navbar/>
        <Header />
        <About />
        <Skills />
        {/* <Work /> */}
        <Projects />  
        <Footer />
    </div>
  );
}

export default App