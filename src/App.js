import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Recipe from "./components/recipe/Recipe";
import ListOfRecipe from "./components/list-of-recipe/list-of-recipe";
import Home from "./components/home/home";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/recipeList" element={<ListOfRecipe />} />
      <Route path="/recipeAdd" element={<Recipe />} />
    </Routes>
  );
}

export default App;
