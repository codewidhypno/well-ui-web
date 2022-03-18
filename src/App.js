import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
