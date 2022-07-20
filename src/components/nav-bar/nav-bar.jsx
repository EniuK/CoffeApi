import "./nav-bar.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container">
      <h2>Welcome to Coffe maker</h2>
      <nav className="navbar-container">
        <div className="navbar">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar">
          <Link to="/recipeList">Recipes</Link>
        </div>
        <div className="navbar">
          <Link to="/recipeAdd">Add recipe</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
