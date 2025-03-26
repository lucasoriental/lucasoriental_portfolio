import i18n from "i18next";
import React, { useState } from "react";

const LanguageSwitcher = ({ onClick }) => {
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex gap-0">
      <button
        onClick={() => changeLanguage("en")}
        className={`p-0.5 text-md border border-slate-950 pr-3 pl-3
          ${selectedLang === "en" ? "bg-red-800 text-white" : "bg-white text-gray-950 border-spacing-1.5"}
        `}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("pt")}
        className={`p-0.5 text-md border border-slate-950 pr-3 pl-3
          ${selectedLang === "pt" ? "bg-red-800 text-white" : "bg-white text-gray-950 border-spacing-1.5"}
        `}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
