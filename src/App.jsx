import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "../src/styles/App.scss";
import "../src/styles/tailwind.css";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

import Hiring from "../src/pages/Hiring/hiring";
import Freelance from "../src/pages/Freelance/freelance";
import Home from "../src/pages/Home/Home";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const { t } = useTranslation("hiring");

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
