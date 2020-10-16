import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./contact.module.css";

const ADDRESS = "10 Rue des Gris, 51190 Avize";
const EMAIL = "earl.ghys@wanadoo.fr";
const PHONE_NUMBER = "06 48 71 50 64";

const ContactSection: React.FC = () => (
  <section className={styles.sectionWrapper}>
    <div className={styles.sectionParagraph}>
      <h1>N’hésitez pas à nous contacter</h1>
      <p>
        Nous serons très heureux de vous accueillir à notre domaine pour vous
        faire déguster nos vins, visiter notre cave et vous présenter notre
        métier.
      </p>
      <p>
        Notre activité commerciale est additionnelle de notre activité viticole.
        C’est pourquoi, afin de vous accueillir au mieux, nous vous prions de
        nous informer par mail ou par téléphone de votre venue.
      </p>
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

export default ContactSection;
