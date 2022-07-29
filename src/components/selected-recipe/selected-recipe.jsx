import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CoffeeContext } from "../../context/coffee-context";
// file to fix
const SelectedRecipe = () => {
  const { recipe, recipes, handleSetRecipe } = useContext(CoffeeContext);
  const [recipeSelected, setRecipeSelected] = useState(0);
  const [dependency, setDependency] = useState(0);
  const [water, setWater] = useState(0);
  const { id } = useParams();
  handleSetRecipe(id);

  const waterNeeded = (e) => {
    setWater(e.target.value * dependency);
    setRecipeSelected(recipe);
  };

  useEffect(() => {
    handleSetRecipe(id);
    setDependency(recipe.coffeVariables.water / recipe.coffeVariables.coffe);
  }, [recipe, id]);

  return (
    <div className="recipe-wrapper">
      <h1>{recipe.coffeVariables.recipeName}</h1>
      <ul>Burnrate: {recipe.coffeVariables.burnRate}</ul>
      <ul>Coffe amount: {recipe.coffeVariables.coffe} gram</ul>
      <ul>Dishes: {recipe.coffeVariables.dishes}</ul>
      <ul>Flood time: {recipe.coffeVariables.flood} seconds</ul>
      <ul>Grind clicks: {recipe.coffeVariables.grind} clicks</ul>
      <ul>Water temperature: {recipe.coffeVariables.temp}°C</ul>
      <ul>Water amount: {recipe.coffeVariables.water} ml</ul>
      <ul>Desc: {recipe.coffeVariables.description}</ul>
      <p>Type number of coffe you want for this recipe</p>
      <input type="number" onChange={(e) => waterNeeded(e)} />
      <p>Water needed: {water} ml</p>
    </div>
  );
};

export default SelectedRecipe;
