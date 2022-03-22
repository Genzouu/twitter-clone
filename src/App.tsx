import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LeftPanel from "./Components/LeftPanel";
import MainPanel from "./Components/MainPanel";

function App() {
   return (
      <div className="App">
         <Router>
            <LeftPanel />
            <MainPanel />
            <Routes></Routes>
         </Router>
      </div>
   );
}

export default App;
