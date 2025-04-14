import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Footer />
    </>
  );
}

export default App;