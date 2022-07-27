import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../context/coffee-context";
import { Link } from "react-router-dom";
import "./list-of-recipe.scss";

const ListOfRecipe = () => {
  const { recipes } = useContext(CoffeeContext);
  const [phrase, setPhrase] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    setFilteredRecipes(recipes);
    filteredRecipes.filter((recipe) => {
      return recipe.coffeVariables.recipeName
        .toLocaleLowerCase()
        .includes(phrase.toLocaleLowerCase());
    });

  }, [phrase, recipes]);

  return (
    <div className="list-of-recipe">
      <div>
        <input
          type="search"
          onChange={(e) => setPhrase(e.target.value)}
          placeholder="search recipes"
        />
      </div>
      {filteredRecipes?.map((recipe) => {
        return (
          <Link
            className="link"
            to={`/recipeList/${recipe.key}`}
            key={Math.random()}
          >
            <div className="recipe-item">
              <h3>{recipe.coffeVariables.recipeName}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListOfRecipe;
