import Project from '../components/Project'
import projects from '../utils/portfolioItems'


export default function PortfolioPage() {
    return (
      <div className="container pt-4">
        <h1 className="title">Web Portfolio</h1>

        <Project project={projects} />

      </div>

    );
  }

  