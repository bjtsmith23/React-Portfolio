import React from 'react';
import './Projects.css';
import Project from '../../Project';
import animalPalace from "../../../images/AnimalPalace.png";
import workday from "../../../images/DayPlanner.png"; 
// import codeQuiz from "../../../images/CodeQuiz.png";
import critic from "../../../images/critic.png";
import foodfordays from "../../../images/foodfordays.png";
// import '../../../App.css';
// import Footer from "../../Footer";



export default function Projects(props) {
  const allProjects = [
    {
      image: animalPalace,
      title: "Animal Palace",
      description: "React, MongoDB/Mongoose, GraphQL, Node.js, Javascript, CSS, Express.js, Heroku, Stripe",
      github: "https://github.com/bjtsmith23/Animal-Palace",
      deployed: "https://animal-palace.herokuapp.com/",
    },
    {
      image: workday,
      title: "Work Day Scheduler",
      description: "HTML, CSS, jQuery, Moment.js, Bootstrap",
      github: "https://github.com/bjtsmith23/Work-Day-Scheduler",
      deployed: "https://bjtsmith23.github.io/Work-Day-Scheduler/",
    },
    {
      image: foodfordays,
      title: "Food For Days",
      description: "HTML, CSS, Javascript, Express JS, Heroku",
      github: "https://github.com/quynhndinh/Food-For-Days",
      deployed: "https://food-for-days.herokuapp.com/",
    },
    {
      image: critic,
      title: "Everyone's A Critic",
      description: "HTML, CSS, Javascript, REST API",
      github: "https://github.com/bjtsmith23/Animal-Palace",
      deployed: "https://animal-palace.herokuapp.com/",
    },
  ];
  return (

    <div className="container">
      <div className="row">
        {allProjects.map((app) => {
          return (
            <Project
              image={app.image}
              title={app.title}
              description={app.description}
              github={app.github}
              deployed={app.deployed}
            />
          );
        })}
      </div>
    </div>
  );
}


