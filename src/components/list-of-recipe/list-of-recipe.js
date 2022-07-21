import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../context/coffee-context";
import { Link } from "react-router-dom";
import "./list-of-recipe.scss";

const ListOfRecipe = () => {
  const { recipes } = useContext(CoffeeContext);

  return (
    <div className="list-of-recipe">
      {recipes?.map((recipe) => {
        return (
          <Link className="link" to={`/recipeList/${recipe.key}`}>
            <div className="recipe-item" key={recipes.key}>
              <h3>{recipe.coffeVariables.recipeName}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListOfRecipe;
