import React from "react";
import linkedIn from "../images/linkedin.jfif";
import github from "../images/github.png";

// import linkedin from "../images/linkedin.png";

function Footer() {
    return (

        <footer id="contact">
            
        <div class="container">

        <div>
          <a href="https://www.linkedin.com/in/brian-smith-092509103/" target="_blank">
              <img class="yes" src={linkedIn} alt="Linkedin Logo" />
              </a>
            <div class="figcaption">
              <strong>Linkedin</strong>
            </div>
        </div>
  
        <div class="feet">
            <a href="https://github.com/bjtsmith23" target="_blank">
              <img class="yes" src={github} alt="Github Logo"/>
            </a>
            <h4 class="figcaption"><strong>Github</strong></h4>
        </div>
        </div>

        <div class="end">
        <h4 class="email">EMAIL ME @ bjtsmith23@gmail.com</h4>
        </div>
      </footer>
     
    );

}

export default Footer;