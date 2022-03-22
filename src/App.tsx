import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LeftPanel from "./Components/LeftPanel";

function App() {
   return (
      <div className="App">
         <Router>
            <LeftPanel />
            <Routes></Routes>
         </Router>
      </div>
   );
}

export default App;
