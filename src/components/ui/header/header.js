import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3>Header h3</h3>

      <div className="navbar">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
