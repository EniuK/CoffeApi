import { useState, useContext } from "react";
import "./searchbar.styles.scss";
import { CoffeeContext } from "../../context/coffee-context";
const Searchbar = () => {
  const { recipes } = useContext(CoffeeContext);

  const filterRecipes = (e) => {
    recipes.filter(() => {
      return recipes.coffeVariables.recipeName.toLocaleLowerCase.includes(
        e.target.value.toLocaleLowerCase
      );
    });
  };
  return (
    <div>
      <input onChange={(e) => filterRecipes(e)} />
    </div>
  );
};

export default Searchbar;
