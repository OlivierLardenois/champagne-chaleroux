import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import locale from "../intl/fr.json";
import styles from "./contact.module.css";

const ADDRESS = "10 Rue des Gris, 51190 Avize";
const EMAIL = "earl.ghys@wanadoo.fr";
const PHONE_NUMBER = "06 48 71 50 64";

const ContactSection: React.FC = () => {
  const intl = useIntl();

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.sectionParagraph}>
        <h1>{intl.formatMessage({ id: `contact.title` })}</h1>
        {locale.contact.text.map((_: any, index: number) => (
          <p>{intl.formatMessage({ id: `contact.text.${index}` })}</p>
        ))}
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/kuQhNUTh4LGPJDn48"
        className={styles.card}
      >
        <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" color="#ae7743" />
        <div>{ADDRESS}</div>
      </a>
      <a href={`tel:+${PHONE_NUMBER}`} className={styles.card}>
        <FontAwesomeIcon icon={faPhone} size="3x" />
        <div>{PHONE_NUMBER}</div>
      </a>
      <a href={`mailto:${EMAIL}`} className={styles.card}>
        <FontAwesomeIcon icon={faEnvelope} size="3x" />
        <div>{EMAIL}</div>
      </a>
    </section>
  );
};

export default ContactSection;
