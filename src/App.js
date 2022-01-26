import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';

function App() {
  // setting the default page to AboutMe
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe/>;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio/>;
    }
    if (currentPage === "Resume") {
      return <Resume/>;
    }
    return <Contact/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    

export default App;
