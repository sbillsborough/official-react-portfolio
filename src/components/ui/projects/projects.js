import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="page-container">
        <div className="page-content">
          <h1>Projects</h1>

          <div className="navbar">
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
