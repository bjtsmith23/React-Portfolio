import React from "react";
import Navigation from "./Navigation";

function Header({ handlePageChange, currentPage }) {
    return (

        <header class="header">
            <Navigation handlePageChange={handlePageChange} currentPage={currentPage} />

        </header>
    );
}

export default Header;