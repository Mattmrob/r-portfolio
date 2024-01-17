function Project(props) {
    return (
      <ul className="p-project">
        {props.project.map((project) => {
            return(
          <div key={project.id}>

            <div className="img-container">

            <img
            alt={project.title}
            className="p-img"
            src={project.url}
            />

            <div className="p-t-container">

                <h3>{project.title}</h3>
                <p>{project.text}</p>

                <a target="_blank" href={project.github}>Github</a>
                <a target="_blank" href={project.deployment}>Deployment</a>

            </div>

            </div>
          </div>
            );
        })}
      </ul>

    );
  }


  export default Project;