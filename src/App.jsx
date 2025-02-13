import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Services from './Pages/Services';

import MyCalendar from './Pages/Calendar';
import AboutPage from './Pages/About';
import RedirectOnRefresh from './components/RedirectOnRefresh';


function App() {
  return (
   
        <Router>
          <RedirectOnRefresh />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/calendar" element={<MyCalendar />} />
            
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          {/* Ensure an audio element is included */}
          
          
        </Router>

  );
}

// Separate component for the audio element


export default App;
