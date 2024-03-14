import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="page-container">
        <div className="page-content">
          <h1>Home Component h1</h1>
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

export default Home;
