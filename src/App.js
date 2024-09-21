import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CourseCarousel from './components/CourseCarousel';
import SingleLineSection from './components/SingleLineSection';
import IBScienceSection from './components/IBScienceSection';
import FAQ from './components/FAQ';
import Footer from './components/footer';

function LearnMore() {
  return <div className="text-center py-20">Learn More about our courses!</div>;
}

function FindYourCourse() {
  return <div className="text-center py-20">Discover courses tailored for you!</div>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <SingleLineSection />
            <CourseCarousel />
          </>
        } />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/find-your-course" element={<FindYourCourse />} />
      </Routes>
      <IBScienceSection/>
      <FAQ/>
      <Footer/>
    </Router>
    
  );
}

export default App;
