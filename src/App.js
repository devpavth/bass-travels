import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import ImageWithText from "./components/imagewithText/ImageWithText";
import InfoColumns from "./components/infoCoulmns/InfoColumns";
// import DistanceFlatToggle from "./components/distanceFlatToggle/DistanceFlatToggle";
import AboutSection from "./components/aboutSection/AboutSection";
import BookOnline from "./components/bookOnline/BookOnline";
import Footer from "./components/footer/Footer";
import './App.css';

function App() {
  return (
    <Router> 
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <ImageWithText /> 
            <InfoColumns />  
            <AboutSection />
            <BookOnline />
            <Footer />
          </>
        } 
        /> 
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/fleet" element={<div>Fleet Page</div>} />
        <Route path="/fares" element={<div>Fares Page</div>} />
        <Route path="/booking" element={<div>Booking Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
