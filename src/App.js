import Nav from "./views/Navigation";
import Component from "./views/Component";
import "./App.scss";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="container">
        <Component />
      </div>
    </div>
  );
};

export default App;
