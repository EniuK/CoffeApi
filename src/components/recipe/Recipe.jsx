import React, { useState } from "react";
import database from "../../firebase/firebase";
import "./recipes.styles.scss";
const Recipe = () => {
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

  const handleChange = (event) => {
    setCoffeVariables({
      ...coffeVariables,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="recipe">
      <h1>Insert Recipe</h1>
      Recipe name:
      <input
        name="recipeName"
        placeholder="Recipe name"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.recipeName}
      />
      Grind clicks:
      <input
        name="grind"
        type="number"
        placeholder="grind level (number of clicks)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.grind}
      />
      Water amount:
      <input
        name="water"
        type="number"
        placeholder="Water amount (ml)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.water}
      />
      Temperature of water:
      <input
        name="temp"
        type="number"
        placeholder="Temperature level (Celsius)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.temp}
      />
      Time of flood:
      <input
        name="flood"
        type="number"
        placeholder="Flood level (s)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.flood}
      />
      Coffe amount:
      <input
        name="coffe"
        type="number"
        placeholder="Coffe amount (g)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.coffe}
      />
      Burnrate of seed:
      <input
        name="burnRate"
        placeholder="Burn rate level (light, medium, high)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.burnRate}
      />
      Types of dishes:
      <input
        name="dishes"
        placeholder="Type dishes for recipe"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.dishes}
      />
      <p>Description</p>
      <textarea
        rows="14"
        cols="14"
        name="description"
        className="desc"
        placeholder="Type description for users of this recipe (longer = better)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.description}
      />
      <button onClick={Push}>PUSH</button>
    </div>
  );
};

export default Recipe;
