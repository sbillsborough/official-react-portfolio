import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3>Hello World!</h3>

      <div className="navbar">
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
