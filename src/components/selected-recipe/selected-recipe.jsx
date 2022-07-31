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
    setDependency(recipe.coffeVariables.water / recipe.coffeVariables.coffe);

    setWater(e.target.value * dependency);
  };
  useEffect(() => {
    if (typeof recipe === "undefined") {
      setHelp(!help);
    }
    handleSetRecipe(id);
  }, [recipes, help]);
  return (
    <div className="recipe-wrapper">
      {JSON.stringify(recipe) === JSON.stringify({}) && <div>Please W8</div>}
      {JSON.stringify(recipe) !== JSON.stringify({}) &&
        typeof recipe !== "undefined" && (
          <div>
            <h1>{recipe.coffeVariables.recipeName}</h1>
            <ul>Burnrate: {recipe.coffeVariables.burnRate}</ul>
            <ul>Coffee amount: {recipe.coffeVariables.coffe} gram</ul>
            <ul>Dishes: {recipe.coffeVariables.dishes}</ul>
            <ul>Flood time: {recipe.coffeVariables.flood} seconds</ul>
            <ul>Grind clicks: {recipe.coffeVariables.grind} clicks</ul>
            <ul>Water temperature: {recipe.coffeVariables.temp}°C</ul>
            <ul>Water amount: {recipe.coffeVariables.water} ml</ul>
            <ul>Desc: {recipe.coffeVariables.description}</ul>
            {typeof recipe.floodsVariables !== "undefined" && (
              <div>
                <ul>
                  First flood: Water: {recipe.floodsVariables.firstWater} ml ||
                  Time: {recipe.floodsVariables.firstTime} s
                </ul>
                {recipe.floodsVariables.secondTime !== "" && (
                  <ul>
                    Second flood: Water: {recipe.floodsVariables.secondWater} ml
                    || Time: {recipe.floodsVariables.secondTime} s
                  </ul>
                )}
                {recipe.floodsVariables.thirdTime !== "" && (
                  <ul>
                    Third flood: Water: {recipe.floodsVariables.thirdWater} ml
                    || Time: {recipe.floodsVariables.thirdTime} s
                  </ul>
                )}
                {recipe.floodsVariables.fourthTime !== "" && (
                  <ul>
                    Fourth flood: Water: {recipe.floodsVariables.fourthWater} ml
                    || Time: {recipe.floodsVariables.fourthTime} s
                  </ul>
                )}
              </div>
            )}

            <h4>Type amount of coffe you want to use it for this recipe</h4>
            <input type="number" onChange={(e) => waterNeeded(e)} />
            <p>Water needed: {water} ml</p>
            {typeof recipe.floodsVariables !== "undefined" && (
              <div>
                {recipe.floodsVariables.firstWater !== "" && (
                  <p>
                    First flood:{" "}
                    {(recipe.floodsVariables.firstWater /
                      recipe.coffeVariables.water) *
                      water}{" "}
                    ml
                  </p>
                )}
                {recipe.floodsVariables.secondWater !== "" && (
                  <p>
                    Second flood:{" "}
                    {(recipe.floodsVariables.secondWater /
                      recipe.coffeVariables.water) *
                      water}{" "}
                    ml
                  </p>
                )}
                {recipe.floodsVariables.thirdWater !== "" && (
                  <p>
                    Third flood:{" "}
                    {(recipe.floodsVariables.thirdWater /
                      recipe.coffeVariables.water) *
                      water}{" "}
                    ml
                  </p>
                )}
                {recipe.floodsVariables.fourthWater !== "" && (
                  <p>
                    Fourth flood:{" "}
                    {(recipe.floodsVariables.fourthWater /
                      recipe.coffeVariables.water) *
                      water}{" "}
                    ml
                  </p>
                )}
              </div>
            )}
          </div>
        )}
    </div>
  );
};

export default SelectedRecipe;
