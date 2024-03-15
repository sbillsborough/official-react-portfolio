import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="page-container">
        <div className="page-content">
          <h1>Home</h1>
          <p className="intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi
            maiores quod facere! Expedita similique iusto voluptates ipsum eius
            quasi.
          </p>
          <div className="navbar">
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
            </nav>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, esse.
        </p>
      </div>
    </>
  );
}

export default Home;
