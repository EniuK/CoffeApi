import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CoffeeContext } from "../../context/coffee-context";
const SelectedRecipe = () => {
  const { recipes } = useContext(CoffeeContext);

  const { key } = useParams();



  console.log(recipes);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default SelectedRecipe;
