import React from "react";
import { useTranslation } from "react-i18next";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
    };

    return (
        <select value={i18n.language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">Hindi</option>
            {/* <option value="es">Español</option> */}
        </select>
    );
};

export default LanguageSwitcher;