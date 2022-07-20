import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Recipe from "./components/recipe/Recipe";
import ListOfRecipe from "./components/list-of-recipe/list-of-recipe";
import Home from "./components/home/home";
import SelectedRecipe from "./components/selected-recipe/selected-recipe";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/recipeList" element={<ListOfRecipe />} />
      <Route path="/recipeList/:id" element={<SelectedRecipe />} />

      <Route path="/recipeAdd" element={<Recipe />} />
    </Routes>
  );
}

export default App;
