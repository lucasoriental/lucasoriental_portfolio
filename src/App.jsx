import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "./App.scss";
import "./tailwind.css";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

import Hiring from "./components/pages/hiring";
import Freelance from "./components/pages/freelance";
import Home from "./components/pages/Home";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const { t } = useTranslation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hiring" element={<Hiring />} />{" "}
        {/* Portfólio para empresas */}
        <Route path="/Freelance" element={<Freelance />} />{" "}
        {/* Portfólio para clientes */}
      </Routes>
    </Router>
  );
}

export default App;
