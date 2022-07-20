import React, { useEffect, useState } from "react";
import database from "../../firebase/firebase";
import db from "../../firebase/firebase";

const ListOfRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [coffeAmount, setCoffeAmount] = useState(0);

  useEffect(() => {
    const getRecipesFromFirebase = [];
    const recipeFromFirebase = db
      .collection("recipes")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getRecipesFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setRecipes(getRecipesFromFirebase);
        setIsSuccess(false);
      });

    return () => recipeFromFirebase();
  }, []);

  useState(() => {
    console.log(recipes);
  }, []);

  return (
    <div className="list-of-recipe">
      {recipes.map((recipe) => {
        return (
          <div className="recipe-item">
            <h1>{recipe.coffeVariables.recipeName}</h1>
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
