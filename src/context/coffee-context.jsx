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
  const floodNumber = {
    firstWater: "",
    firstTime: "",
    secondWater: "",
    secondTime: "",
    thirdWater: "",
    thirdTime: "",
    fourthWater: "",
    fourthTime: "",
  };

  const [coffeVariables, setCoffeVariables] = useState(obj);
  const [floodsVariables, setFloodsVariables] = useState(floodNumber);

  function handleFlood(event) {
    setFloodsVariables({
      ...floodsVariables,
      [event.target.name]: event.target.value,
    });
  }

  function handleChange(event) {
    setCoffeVariables({
      ...coffeVariables,
      [event.target.name]: event.target.value,
    });
  }

  const Push = () => {
    if (JSON.stringify(coffeVariables) === JSON.stringify(obj)) {
      return;
    } else {
      database
        .collection(`recipes`)
        .add({
          coffeVariables,
          floodsVariables,
        })
        .catch(alert);
      setClick(!click);
      setCoffeVariables(obj);
      setFloodsVariables(floodNumber);
    }
  };

  const CoffeeContextProviderValue = useMemo(
    () => ({
      recipes,
      isSuccess,
      Push,
      handleChange,
      coffeVariables,
      handleFlood,
      floodsVariables,
    }),
    [
      recipes,
      isSuccess,
      Push,
      handleChange,
      coffeVariables,
      handleFlood,
      floodsVariables,
    ]
  );

  return (
    <CoffeeContext.Provider value={CoffeeContextProviderValue}>
      {children}
    </CoffeeContext.Provider>
  );
};
