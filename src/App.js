import React from 'react';
import './App.css';
import Gallery from './Gallery';
import Navbar from './components/Navbar/Navbar';
// import { render } from 'react-dom';
import Footer from './Footer';
// import Popup from './components/Popup'
// import { useState } from 'react';
// import NewGallery from './components/NewGallery';
// import Modal from './components/Modal';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <main>
        <Router>
          <Navbar />
        </Router>
        <Gallery />
        {/* <NewGallery /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
