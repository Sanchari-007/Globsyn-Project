import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Destinations />
      <Features />
      <Footer />
    </Router>
  );
}

export default App;

// This code defines the main App component for a React application.
// It sets up routing using React Router and includes a navigation bar, routes for different components, and a toast notification container.
// The App component uses the ProtectedRoute component to ensure that certain routes are only accessible to authenticated users.