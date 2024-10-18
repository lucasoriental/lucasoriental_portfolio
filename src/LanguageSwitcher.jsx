import i18n from "i18next";
import React, { useState } from "react";

const LanguageSwitcher = ({onClick}) => {
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
    if(onClick){
      onClick();
    }
  };

  return (
    <div className="div-languageSwitcher">
      <button
        onClick={() => changeLanguage("en")}
        className={
          selectedLang === "en"
            ? "languageSwitcher-en-button selected"
            : "languageSwitcher-en-button"
        }
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("pt")}
        className={
          selectedLang === "pt"
            ? "languageSwitcher-pt-button selected"
            : "languageSwitcher-pt-button"
        }
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
