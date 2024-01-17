function Project(props) {
    return (

      <ul className="p-container">
        {props.portfolio.map((item) => {
          <li classname="p-item" key={item.id}>

            <img
            alt={item.title}
            className="p-img"
            src={item.url}
            />

            <div className="p-t-container">

                <h3 className="p-title">
                    {item.title}
                </h3>

                <p className="p-text">
                    {item.text}
                </p>

                <a target="_blank" className="p-link" href={item.github}>Github</a>
                <a target="_blank" className="p-link" href={item.deployment}>Deployment</a>

            </div>
          </li>
        })}
      </ul>

    );
  }


  export default Project;