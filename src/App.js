import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Starter from "./components/Starter";
import Random from "./components/random";


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/math" element={<Home />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </Router>
  )
}

export default App;
