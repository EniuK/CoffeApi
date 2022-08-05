import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <div className="about">
        <h2>How to use app</h2>
        Welcome to my aplication. Here's a list of things that you should be
        aware of
        <ul>
          <li>
            App cant delete or update recipes - ask creator to delete/update
            recipe
          </li>
          <h3>
            I'll fix everything and add new features in future. Just be patient
            :D
          </h3>
        </ul>
        <h4>Also, I'm gonna train here some features in react. </h4>
      </div>
      <div className="fun">
        <Button>bootstrap button</Button>
      </div>
    </div>
  );
};

export default Home;
