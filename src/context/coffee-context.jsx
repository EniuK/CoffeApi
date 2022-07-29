import { createContext, useEffect, useMemo, useState } from "react";
import database from "../firebase/firebase";

export const CoffeeContext = createContext({
  recipes: [],
});

export const CoffeeContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [getRecipesFromFirebase, setGetRecipesFromFirebase] = useState([]);
  const [click, setClick] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    setFilteredRecipes(recipes);
    filteredRecipes.filter((recipe) => {
      return recipe.coffeVariables.recipeName.toLowerCase().includes(phrase);
    });
  }, [phrase, recipes]);

  useEffect(() => {
    setGetRecipesFromFirebase([]);
    const recipeFromFirebase = database
      .collection("recipes")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach(() => {
          getRecipesFromFirebase.pop();
        });
        querySnapshot.forEach((doc) => {
          getRecipesFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setRecipes(getRecipesFromFirebase);
      });
    console.log(click);

    return () => {
      recipeFromFirebase();
    };
  }, [click]);

  const obj = {
    recipeName: "",
    grind: "",
    water: "",
    temp: "",
    flood: "",
    coffe: "",
    burnRate: "",
    dishes: "",
    description: "",
  };

  const [coffeVariables, setCoffeVariables] = useState(obj);
  const [recipe, setRecipe] = useState({});
  const handleSetRecipe = (id) => {
    const item = recipes.find((recipe) => recipe.key === id);
    setRecipe(item);
  };
  
  const Push = () => {
    if (JSON.stringify(coffeVariables) === JSON.stringify(obj)) {
      return;
    } else {
      database
        .collection(`recipes`)
        .add({
          coffeVariables,
        })
        .catch(alert);
      setClick(!click);
      setCoffeVariables(obj);
    }
  };

  function handleChange(event) {
    setCoffeVariables({
      ...coffeVariables,
      [event.target.name]: event.target.value,
    });
  }

  

  const CoffeeContextProviderValue = useMemo(
    () => ({
      recipe,
      recipes,
      isSuccess,
      Push,
      handleChange,
      coffeVariables,
      handleSetRecipe,
    }),
    [
      recipes,
      recipe,
      isSuccess,
      Push,
      handleChange,
      coffeVariables,
      handleSetRecipe,
    ]
  );

  return (
    <CoffeeContext.Provider value={CoffeeContextProviderValue}>
      {children}
    </CoffeeContext.Provider>
  );
};
