import React, { useState } from 'react';
import '../App.css';
import Navigation from './Navigation'
import AboutMe from './pages/AboutMe/AboutMe';
import Project from './pages/Projects/Projects';
// import Footer from './Footer';
import Contact from './pages/Contact/Contact';
// import bootstrap from ''

export default function PortfolioContainer() {
  // setting the default page to AboutMe
  const [currentPage, setCurrentPage] = useState("AboutMe");


  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe/>;
    }
    if (currentPage === "Project") {
      return <Project/>;
    }
      return <Contact/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}

