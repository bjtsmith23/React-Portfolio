import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";



function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar expand="lg">
    <Container>
        <Navbar.Brand>Brian Smith</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
    
          <Nav.Link
          href="#about-me"
          onClick={() => handlePageChange('AboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Nav.Link>
      
      <Nav.Link
          href="#project"
          onClick={() => handlePageChange('Project')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Projects
          </Nav.Link>
      

        <Nav.Link
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
          </Nav.Link>
          
          </Nav>
      </Navbar.Collapse>
      </Container>  
    </Navbar> 
    
  );
}

export default Navigation;
