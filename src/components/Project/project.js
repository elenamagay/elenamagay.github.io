import "./project.css"

function Project(props) {
  
  return (
    <div className="col-lg">
      <figure>
        <a href={props.info.github} target="blank" rel="noreferrer">
          <img className="figure-img img-fluid portfolio-image" src={require(`../../Images/${props.info.thumbnail}`).default}
          alt={`${props.info.name} Thumbnail`} />
        </a>
        <figcaption className="figure-caption">
          {props.info.name}<br />          
          {props.info.deployment ? <a href={props.info.deployment} target="blank" rel="noreferrer"><button type="button" className="btn btn-link">Deployed</button></a> : ""}
        </figcaption>
      </figure>
    </div>
  );
}

export default Project;