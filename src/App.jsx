import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import ABCMemory from './components/ABCMemory';
import Instructor from './components/Instructor';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Stats />
              <Testimonials />
              <Benefits />
              <ABCMemory />
              <Instructor />
              <FAQ />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
