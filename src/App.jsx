import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../src/styles/App.scss";
import "../src/styles/tailwind.css";

import Freelance from "../src/pages/Freelance/freelance";
import Hiring from "../src/pages/Hiring/hiring";
import Home from "../src/pages/Home/Home";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hiring" element={<Hiring />} />
        <Route path="/Freelance" element={<Freelance />} />
      </Routes>
    </Router>
  );
}

export default App;
