import React from "react";
import Navigation from "./Navigation";

function Header() {
    return (
    
    <header class="header">
      <h1>Brian Smith</h1>
          <Navigation handlePageChange={handlePageChange} currentPage={currentPage} />
    
    </header>
    );
    }

export default Header;