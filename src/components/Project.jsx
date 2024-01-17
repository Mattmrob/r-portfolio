function Project(props) {
    return (
      <ul className="p-container">
        {props.project.map((project) => {
            return(
          <li classname="p-project" key={project.id}>
            <p>{project.title}</p>

            <img
            alt={project.title}
            className="p-img"
            src={project.url}
            />

            <div className="p-t-container">

                <h3 className="p-title">
                    {project.title}
                </h3>

                <p className="p-text">
                    {project.text}
                </p>

                <a target="_blank" className="p-link" href={project.github}>Github</a>
                <a target="_blank" className="p-link" href={project.deployment}>Deployment</a>

            </div>
          </li>
            );
        })}
      </ul>

    );
  }


  export default Project;