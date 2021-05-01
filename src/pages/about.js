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
              My name is Elena Magay. Currently I am a student at the Coding Bootcamp at the UNC. An expected date of graduation is May 2021. 
              After graduation I will be a full stack developer efficient both at the front and back end of web development.
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
                        MySQL and MongoDB databases;
                    </li>                    
                    <li>
                        Back-end development: node.js, Express, local storage, session storage, indexedDB, User Authentication, Progressive Web Application, MERN stack;
                    </li>
                    <li>
                        Front-end development: HTML, CSS, JavaScript, jQuery, Bootstrap, handlebars, react.js;
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