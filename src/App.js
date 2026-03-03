
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Fees from "./pages/Fees";

function App() {
  return (
    <Router>
      <nav style={{padding:20, background:"#0b1f3a"}}>
        <Link to="/" style={{color:"white", marginRight:20}}>Home</Link>
        <Link to="/school-portal/fees" style={{color:"white"}}>Fees</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school-portal/fees" element={<Fees />} />
      </Routes>
    </Router>
  );
}

export default App;
