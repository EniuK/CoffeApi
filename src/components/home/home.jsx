import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <div className="about">
        <h2>How to use app</h2>
        Welcome to my aplication. Here's a list of things that you should be
        aware of
        <ul>
          <li>Do not refresh site when you are in single recipe</li>
          <li>App cant delete or update recipes - ask creator to delete/update recipe</li>
          <h3>I'll fix everything and add new features in future. Just be patient :)</h3>
        </ul>
      </div>
    </div>
  );
};

export default Home;
