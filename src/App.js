import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skill from "./Components/Skill/Skill";

import "./App.css";
import Coding from "./Components/Coding/Coding";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skill/>
    <Coding/>
    </div>
  );
}

export default App;
