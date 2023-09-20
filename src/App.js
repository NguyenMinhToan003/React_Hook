import Nav from "./views/Navigation";
import Component from "./views/Component";
import { Countdown, CountDownHook } from "./views/countdown";

import "./App.scss";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="container">
        <Countdown />
        <CountDownHook />
        <Component />
      </div>
    </div>
  );
};

export default App;
