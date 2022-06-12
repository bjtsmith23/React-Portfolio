import React from "react";
import portrait from "../../../images/picofme.jpg";
import "./AboutMe.css"
// import Footer from "../../Footer";

export default function AboutMe() {
  return (
    <div class>

      <div class="aboutmeh">
        <h2 id="AboutMe">About Me</h2>
        <img class="pict" src={portrait} alt="Me smiling" />

        <p class="abo">
          Highly motivated technologist with a passion for Software Engineering. With a prior career in the logistics industry, I pivoted into the tech world because of my interest
          in computers and coding. As a gamer, I have always been aware of the growing market
          there is for applications, video games and mobile apps. The same can be said for all
          internet activity as well. As a result, I joined the 3-month Full-Time Rutgers Coding
          Bootcamp to sling-shot me into my coding career and I just graduated in late January
          with an A in the course. Seeking a mid-level role on a Software Development team where
          I can grow and make a lasting impact.
        </p>
      </div>
    </div>
  );
}


