import React from "react";
import Container from "../components/Container/container"
import photo from "../Images/photo.jpg"
import "./about.css";

function About() {
    document.title = "About me";
    return (
      <Container>
        <section>
          <h1 className="section-header">About Me</h1>
          <hr />
          <div className="row">
            <div className="col-md-6 col-lg-5 text-center">
              <img className="img-fluid photo" src={photo} alt="My photograph" />              
            </div>
            <div className="col-md-6 col-lg-7">
              <p>
                My name is Elena Magay and I live in Morrisville, NC.
              </p>
              <p>
                I am a highly motivated Web Developer with an ability of logical thinking and grasping new concepts 
                quickly and efficiently.
                I graduated with a Bachelor's degree in Management and Finance and worked as a financier and an accountant in 
                a construction company participating in the implementation of several projects (local and international).
              </p>
              <p>
                Later I decided to make a change into Web Development and design. And recently I have graduated a Coding Bootcamp 
                from UNC Chapel Hill.
              </p>
              <button className="icon-button">
                  <a href="https://www.linkedin.com/in/elena-magay-73b50a1bb/" target="blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin about-icon"></i> <span className="sr-only">LinkedIn</span>
                  </a>
                </button>
                <button className="icon-button">
                  <a href="https://github.com/elenamagay" target="blank" rel="noreferrer" aria-label="GitHub">
                    <i className="fab fa-github about-icon"></i> <span className="sr-only">GitHub</span>
                  </a>
                </button> 
              <p>
              My resume is available <a href="https://drive.google.com/file/d/1s5JnTMw2GD0NJ5WmQ1SbfWx4LdjJiAr3/view?usp=sharing" target="blank" rel="noreferrer">here</a>.
              </p>
              <ul class="card-text">
                My skills:
                  <li>
                      Front-end development: HTML, CSS, SCSS, JavaScript, jQuery, Bootstrap, handlebars, React, Reactstrap;
                  </li>
                  <li>
                      Back-end development: node.js, Express, local storage, session storage, indexedDB, User Authentication, Progressive Web Application, MERN stack;
                  </li>
                  <li>
                      MySQL and MongoDB databases;
                  </li>
                  <li>
                      API: json, ajax;
                  </li>
                  <li>
                      Deployment/ command-line: Heroku, Git Bash, GitHub Pages
                  </li>
                    
                </ul>
            </div>
          </div>
        </section>
      </Container>
    );
  
};

export default About;