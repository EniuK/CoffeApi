import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CoffeeContext } from "../../context/coffee-context";
// file to fix
const SelectedRecipe = () => {
  const { recipes } = useContext(CoffeeContext);
  const [recipe, setRecipe] = useState({}); //added

  const [dependency, setDependency] = useState(0);
  const [water, setWater] = useState(0);
  const [help, setHelp] = useState(false);
  const { id } = useParams();

  const handleSetRecipe = (id) => {
    const item = recipes.find((recipe) => recipe.key === id);
    setRecipe(item);
  };

  const waterNeeded = (e) => {
    setWater(e.target.value * dependency);
  };
  useEffect(() => {
    if (typeof recipe === "undefined") {
      setHelp(!help);
    }
    handleSetRecipe(id);
    console.log(recipe);
  }, [recipes, help]);
  console.log("hej");
  return (
    <div className="recipe-wrapper">
      {JSON.stringify(recipe) === JSON.stringify({}) && <div>Please W8</div>}
      {JSON.stringify(recipe) !== JSON.stringify({}) &&
        typeof recipe !== "undefined" && (
          <div>
            <h1>{recipe.coffeVariables.recipeName}</h1>
            <ul>Burnrate: {recipe.coffeVariables.burnRate}</ul>
            <ul>Coffe amount: {recipe.coffeVariables.coffe} gram</ul>
            <ul>Dishes: {recipe.coffeVariables.dishes}</ul>
            <ul>Flood time: {recipe.coffeVariables.flood} seconds</ul>
            <ul>Grind clicks: {recipe.coffeVariables.grind} clicks</ul>
            <ul>Water temperature: {recipe.coffeVariables.temp}°C</ul>
            <ul>Water amount: {recipe.coffeVariables.water} ml</ul>
            <ul>Desc: {recipe.coffeVariables.description}</ul>
            <ul>
              First flood: Water: {recipe.floodsVariables.firstTime} ml || Time:{" "}
              {recipe.floodsVariables.firstTime}
            </ul>
            <p>Type number of coffe you want for this recipe</p>
            <input type="number" onChange={(e) => waterNeeded(e)} />
            <p>Water needed: {water} ml</p>
          </div>
        )}
    </div>
  );
};

export default SelectedRecipe;
