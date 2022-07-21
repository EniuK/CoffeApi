import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CoffeeContext } from "../../context/coffee-context";
const SelectedRecipe = () => {
  const { recipes } = useContext(CoffeeContext);
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const handleSetRecipe = () => {
    const item = recipes.find((recipe) => recipe.key === id);
    setRecipe(item);
  };
  useEffect(() => {
    handleSetRecipe();
  }, [recipe, id, setRecipe, handleSetRecipe]);
  console.log(recipe);
  console.log(id);

  return <div className="recipe-wrapper"></div>;
};

export default SelectedRecipe;
