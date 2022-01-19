import React from "react";
import portrait from "../images/picofme.jpg";

function AboutMe() {
  return (
    <div>
      <h2 id="AboutMe">About Me</h2>
      <div class="aboutContents">
        <img class="portrait" src={portrait} alt="Me smiling" />

        <p>
          I am from Little Silver New Jersey and I am looking to become a master
          of coding. I graduated Manhattan College in 2015 with a Finance Degree
          but I have now just realized I want to get into coding. I know it wont
          be easy but with my work ethic and perserverence, I am confident I
          will succeed!!
        </p>
      </div>

      <h2 class="work">My Works</h2>
    </div>
  );
}

export default AboutMe;
