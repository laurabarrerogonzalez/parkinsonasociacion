import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './View/About us/Aboutus';
import Home from './View/Home/Home';
import Symptoms from './View/Parkinson/Symptoms';
import Evolution from './View/Parkinson/Evolution';
import Resources from './View/Parkinson/Resources';
import Myths from './View/Parkinson/Myths';
import Daycarecenter from './View/Services_/Daycarecenter';
import Revitalization from './View/Services_/Revitalization';
import Stimulation from './View/Services_/Stimulation';
import Help from './View/Services_/Help';
import News from './View/CurrentNews/News';
import Activities from './View/CurrentNews/Activities';
import Proyects from './View/CurrentNews/Proyects';
import Voluntary from './View/Collaborate/Voluntary';
import Members from './View/Collaborate/Members';
import Donations from './View/Collaborate/Donations';
import Work from './View/Work with us/Work';
import Find from './View/Find us/Find'; 
import '../src/View/Parkinson/Myths.css';
import Navbar from './Components/Navbar/Navbar';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <React.StrictMode>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/evolution" element={<Evolution />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/myths" element={<Myths />} />
        <Route path="/daycarecenter" element={<Daycarecenter />} />
        <Route path="/revitalization" element={<Revitalization />} />
        <Route path="/stimulation" element={<Stimulation />} />
        <Route path="/help" element={<Help />} />
        <Route path="/news" element={<News />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/voluntary" element={<Voluntary />} />
        <Route path="/members" element={<Members />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/work" element={<Work />} />
        <Route path="/find" element={<Find />} />
      </Routes>
    </React.StrictMode>
  </Router>
);
