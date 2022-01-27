import React from 'react';
import codeQuiz from "../../../images/CodeQuiz.png";
import refactor from "../../../images/refactor.png";
import workday from "../../../images/DayPlanner.png"; 
import critic from "../../../images/critic.png";
import './Project.css';
import Footer from "../../Footer";

export default function Project() {
  return (
    <div className="project">
      
    <div>
      <a href="https://bjtsmith23.github.io/Code-Quiz/">
        <img class="pics" src={codeQuiz} alt="Code Quiz Project"/>
        </a>
      <h3>Code Quiz</h3>


    </div>
    <div>
      <a href="https://bjtsmith23.github.io/Refactor/">
        <img class="pics" src={refactor} alt="Refactor Project"/>
      </a>
      <h3>My Refactored Website</h3>
    </div>


    <div class="hw" id="Workday">
      <a href="https://bjtsmith23.github.io/Work-Day-Scheduler/">
        <img class="pics" src={workday} alt="Work Day Scheduler Project"/>
      </a>
      <h3>Work Day Scheduler</h3>
    </div>
    <div class="hw" id="Code">
      <a href="https://natpitt2393.github.io/Everyone-s-A-Critic/">
        <img class="pics" src={critic} alt="Everyone Critic Project"/>
      </a>
      <h3>Everyone's a Critic</h3>
    </div>
    <Footer/>
</div>
  );
}

