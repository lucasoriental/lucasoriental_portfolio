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
    <div className="flex gap-2">
      <select
        value={selectedLang}
        onChange={(e) => changeLanguage(e.target.value)}
        className="px-2 py-1 rounded w-fit text-sm font-semibold"
      >
        <option value="en">EN</option>
        <option value="pt">PT</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
