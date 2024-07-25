import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Project from "./components/Projects";
import CustomCursor from "./components/CustomCursor";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <NavBar />
      <Main />
      <Quotes />
      <Project />
    </div>
  );
}

export default App;
