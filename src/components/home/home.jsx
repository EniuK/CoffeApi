import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <div className="about">
        <h2>Home content</h2>
        Welcome to my aplication. Here's a list of things that you should be
        aware of
        <ul>
          <li>Do not push data with no values</li>
          <li>App cant delete or update recipes - ask creator to delete/update recipe</li>
          <li>New features in the future</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
