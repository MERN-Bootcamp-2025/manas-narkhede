import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Sidebar from './components/SIdebar';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-layout">
        <section className="main-content">
          <Hero />
          <Features />
        </section>
        <Sidebar showTips={true} />
      </main>
      <Footer />
    </>
  );
}

export default App;
