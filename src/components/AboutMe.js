import React from "react";
import portrait from '../images/picofme.jpg'; 

function AboutMe() {
  return (
    <div class="aboutme">
      <h2 id="AboutMe">About Me</h2>
        <img
          class="pic"
          src={portrait}
          alt="A picture of me smiling"
        />
      <p>
        I am from Little Silver New Jersey and I am looking to become a master
        of coding. I graduated Manhattan College in 2015 with a Finance Degree
        but I have now just realized I want to get into coding. I know it wont
        be easy but with my work ethic and perserverence, I am confident I will
        succeed!!
      </p>
      <h2 class="work">My Works</h2>
    </div>
  );
}

export default AboutMe;