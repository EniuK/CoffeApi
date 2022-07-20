import { useContext } from "react";
import { CoffeeContext } from "../../context/coffee-context";
import { Link } from "react-router-dom";

const ListOfRecipe = () => {
  const { recipes } = useContext(CoffeeContext);
  return (
    <div className="list-of-recipe">
      {recipes?.map((recipe) => {
        return (
          <div className="recipe-item">
            <Link to={`/recipeList/${recipe.key}`}>
              <h1>{recipe.coffeVariables.recipeName}</h1>
            </Link>
            <ul>Burnrate: {recipe.coffeVariables.burnRate}</ul>
            <ul>Coffe amount: {recipe.coffeVariables.coffe} gram</ul>
            <ul>Dishes: {recipe.coffeVariables.dishes}</ul>
            <ul>Flood time: {recipe.coffeVariables.flood} seconds</ul>
            <ul>Grind clicks: {recipe.coffeVariables.grind} clicks</ul>
            <ul>Water temperature: {recipe.coffeVariables.temp}°C</ul>
            <ul>Water amount: {recipe.coffeVariables.water} ml</ul>
            <ul>Desc: {recipe.coffeVariables.description}</ul>
            <div>
              {/* <p>Type number of coffe you got </p>
              <input type="number" name={recipe.coffeVariables.recipeName} />
              Water needed for this recipe: {coffeAmount} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfRecipe;
