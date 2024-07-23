import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Project from "./components/Projects";
import CustomCursor from "./components/CustomCursor";

function App() {
  
  return (
    <div className="App">
      <Main />
      <CustomCursor />
      <NavBar />
      <Project />
    </div>
  );
}

export default App;
