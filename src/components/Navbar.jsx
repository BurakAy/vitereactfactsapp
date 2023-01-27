import "../styles/Navbar.css";
import reactLogo from "../assets/react.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar--logo_container">
          <img src={reactLogo} alt="React logo" className="navbar--logo" />
          <h1 className="navbar--logo_text">ReactFacts</h1>
        </div>
        <h2 className="navbar--title">React Course - Project 1</h2>
      </nav>
    </header>
  );
};

export default Navbar;
