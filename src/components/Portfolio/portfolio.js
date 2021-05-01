import React from "react";
import Project from "../Project/project"
// import "./portfolio.css"

function Portfolio(props){
    return (
        <div className="row">
          <Project info={props.projectA} />
          <Project info={props.projectB} />
        </div>
      );
}

export default Portfolio;