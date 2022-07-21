import "./nav-bar.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container">
      <h1>Welcome to Coffe maker</h1>
      <nav className="navbar-container">
        <div className="navbar">
          <Link className="link" to="/">
            <h2>Home</h2>
          </Link>
        </div>
        <div className="navbar">
          <Link className="link" to="/recipeList">
            <h2>Recipes</h2>
          </Link>
        </div>
        <div className="navbar">
          <Link className="link" to="/recipeAdd">
            <h2>Add recipe</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
