import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="page-container">
        <div className="page-content">
          <h1>Projects</h1>
          <p className="intro">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quae eaque totam in obcaecati, accusamus perspiciatis. Quas eveniet
            sed molestias.
          </p>
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
