import React from 'react';
import './Projects.css';
import Project from '../../Project';
import animalPalace from "../../../images/AnimalPalace.png";
import workday from "../../../images/DayPlanner.png";
import critic from "../../../images/critic.png";
import foodfordays from "../../../images/foodfordays.png";
import { Container } from "react-bootstrap";



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

    <div className="container text-center">
      <h1>Portfolio</h1>
      <Container>
        <div id="cards_landscape_wrap-2">
          <div className="portfolio-container row">
          {allProjects.map((project, index) => (
              <Project key={index} {...project} />
          ))}
          </div>
        </div>
      </Container>
    </div>
  );
}


