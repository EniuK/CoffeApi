import { createContext, useEffect, useMemo, useState } from "react";
import database from "../firebase/firebase";

export const CoffeeContext = createContext({
  recipes: [],
});

export const CoffeeContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const getRecipesFromFirebase = [];
    const recipeFromFirebase = database
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


const obj = {
  recipeName: "",
  grind: "",
  water: 0,
  temp: 0,
  flood: 0,
  coffe: 0,
  burnRate: "",
  dishes: "",
  description: "",
};

const [coffeVariables, setCoffeVariables] = useState(obj);

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
    recipes,
    isSuccess,
    Push,
    handleChange,
    coffeVariables,
  }),
  [recipes, isSuccess, Push, handleChange, coffeVariables]
);

  return (
    <CoffeeContext.Provider value={CoffeeContextProviderValue}>
      {children}
    </CoffeeContext.Provider>
  );
};
