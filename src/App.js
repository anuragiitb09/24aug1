import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Hero from './components/Homepage/Hero';
import Navbar from './components/Navbar';
import News from './components/News';
import Query from './components/Query/Query';
import Photo from './components/Homepage/Photo'; 
import Login from './components/Login';
import AccountingAndAuditing from './components/Homepage/Diff/AccountingAndAuditing';
import Service from './components/Homepage/Service';
import Other from './components/Homepage/Diff/Other';  
import Indirect from './components/Homepage/Diff/Indirect';  
import Income from './components/Homepage/Diff/Income';
//import Reach from './components/Reach';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} exact />
          <Route path="/news" element={<News />} />
          <Route path="/query" element={<Query />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/service" element={<Service />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/service/accounting-auditing" element={<AccountingAndAuditing />} />
          <Route path="/service/other" element={<Other />} />
          <Route path="/service/indirect" element={<Indirect />} />
          <Route path="/service/income" element={<Income />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
