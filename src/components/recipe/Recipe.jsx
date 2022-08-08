import React, { useState, useContext, useEffect } from "react";
import "./recipes.styles.scss";

import { CoffeeContext } from "../../context/coffee-context";

const Recipe = () => {
  const { Push, handleChange, coffeVariables, handleFlood, floodsVariables } =
    useContext(CoffeeContext);

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
        min={0}
      />
      Water amount:
      <input
        name="water"
        type="number"
        placeholder="Water amount (ml)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.water}
        min={0}
      />
      Temperature of water:
      <input
        name="temp"
        type="number"
        placeholder="Temperature level (Celsius)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.temp}
        min={0}
      />
      Time of flood:
      <input
        name="flood"
        type="number"
        placeholder="Flood level (s)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.flood}
        min={0}
      />
      Coffe amount:
      <input
        name="coffe"
        type="number"
        placeholder="Coffe amount (g)"
        onChange={(e) => handleChange(e)}
        required
        value={coffeVariables.coffe}
        min={0}
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
      <h3>FILL NUMBER OF FLOODS AND TIME PER FLOOD:</h3>
      First flood:
      <input
        name="firstWater"
        required
        type="number"
        className="multiple-inputs"
        placeholder="water on first flood"
        onChange={(e) => handleFlood(e)}
        value={floodsVariables.firstWater}
        min={0}
      />
      <input
        name="firstTime"
        required
        type="number"
        className="multiple-inputs"
        placeholder="time of first flood"
        onChange={(e) => handleFlood(e)}
        value={floodsVariables.firstTime}
        min={0}
      />
      Second flood:
      <input
        name="secondWater"
        type="number"
        required
        className="multiple-inputs"
        placeholder="water on second flood"
        onChange={(e) => handleFlood(e)}
        value={floodsVariables.secondWater}
        min={0}
      />
      <input
        name="secondTime"
        type="number"
        required
        className="multiple-inputs"
        placeholder="time of second flood"
        onChange={(e) => handleFlood(e)}
        value={floodsVariables.secondTime}
        min={0}
      />
      Third flood:
      <input
        name="thirdWater"
        type="number"
        required
        className="multiple-inputs"
        placeholder="water on third flood"
        onChange={(e) => handleFlood(e)}
        value={floodsVariables.thirdWater}
        min={0}
      />
      <input
        name="thirdTime"
        type="number"
        required
        className="multiple-inputs"
        placeholder="time of third flood"
        onChange={(e) => handleFlood(e)}
        value={floodsVariables.thirdTime}
        min={0}
      />
      Fourth flood:
      <input
        name="fourthWater"
        type="number"
        required
        className="multiple-inputs"
        placeholder="water on fourth flood"
        onChange={(e) => handleFlood(e)}
        value={floodsVariables.fourthWater}
        min={0}
      />
      <input
        name="fourthTime"
        type="number"
        required
        className="multiple-inputs"
        placeholder="time of fourth flood"
        onChange={(e) => handleFlood(e)}
        value={floodsVariables.fourthTime}
        min={0}
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
      <button onClick={Push} className="button">
        PUSH RECIPE
      </button>
    </div>
  );
};

export default Recipe;
