import React from 'react';
import codeQuiz from "../images/CodeQuiz.png";
import refactor from "../images/refactor.png";
import workday from "../images/DayPlanner.png"; 

function Works() {
  return (
    <div class="Works" id="MyWorks">
    <div class="hw" id="Code">
      <a href="https://bjtsmith23.github.io/Code-Quiz/"/>
        <img src={codeQuiz} alt="Code Quiz Project"/>
      <h3>Code Quiz</h3>
    </div>
    <div class="hw" id="Refactor">
      <a href="https://bjtsmith23.github.io/Refactor/">
        <img src={refactor} alt="Refactor Project"/>
      </a>
      <h3>My Refactored Website</h3>
    </div>
    <div class="hw" id="Workday">
      <a href="https://bjtsmith23.github.io/Work-Day-Scheduler/">
        <img src={workday} alt="Work Day Scheduler Project"/>
      </a>
      <h3>Work Day Scheduler</h3>
    </div>
    <div class="hw" id="Code">
      <a href="https://natpitt2393.github.io/Everyone-s-A-Critic/">
        <img src="assets/images/critic.png"/>
      </a>
      <h3>Project 1</h3>
    </div>
</div>
  );
}

export default Works;