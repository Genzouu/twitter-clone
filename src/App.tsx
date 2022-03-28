import { BrowserRouter as Router } from "react-router-dom";

import LeftPanel from "./Components/LeftPanel";
import MainPanel from "./Components/MainPanel";
import RightPanel from "./Components/RightPanel";
import "./App.css";

function App() {
   return (
      <div className="App">
         <Router>
            <LeftPanel />
            <MainPanel />
            <RightPanel />
         </Router>
      </div>
   );
}

export default App;
