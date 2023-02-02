import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
};

export default App;
