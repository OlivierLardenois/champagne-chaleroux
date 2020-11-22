import { changeLocale, useIntl } from "gatsby-plugin-intl";
import React from "react";
import styles from "./language.module.css";

const languageName = {
  en: "English",
  fr: "Français",
};

const Language: React.FC = () => {
  const intl = useIntl();
  const onClick = (lang: "fr" | "en") => {
    if (intl.locale !== lang) changeLocale(lang);
  };

  return (
    <div>
      <span
        className={`${intl.locale === "fr" ? styles.active : styles.link}`}
        onClick={() => onClick("fr")}
      >
        {languageName.fr}
      </span>
      <span> / </span>
      <span
        className={`${intl.locale === "en" ? styles.active : styles.link}`}
        onClick={() => onClick("en")}
      >
        {languageName.en}
      </span>
    </div>
  );
};

export default Language;
