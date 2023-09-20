import "./nav.scss";
// import { a } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <a href="/countdown">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
};
export default Nav;
