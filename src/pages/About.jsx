export default function AboutPage() {
    return (

      <div className="container-fluid pt-4">

        <div className='row align-center'>

          <div className="col-3 test d-flex justify-content-center">
            <img className="profileimg" src="./src/assets/imgs/profileimg.jpg" alt="A picture of myself" />
          </div>

          <div className="d-flex flex-column justify-content-center col-9">
            <h1 className="title">About Me</h1>
            <p className="bodytxt">
              My name is Matthew Michael Roberts and I am a creative with expertise in Full-stack Web Developement and Graphic Design.
              
            </p>
          </div>

        </div>

      </div>
    );
  }