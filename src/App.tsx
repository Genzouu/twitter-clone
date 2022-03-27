import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LeftPanel from "./Components/LeftPanel";
import MainPanel from "./Components/MainPanel";
import { store } from "./Redux/store";

function App() {
   return (
      <div className="App">
         <Router>
            <LeftPanel />
            <MainPanel />
         </Router>
      </div>
   );
}

export default App;
