import React from "react";
import styles from "./footer.module.css";

const EXTERNAL_FRANCE_LINK = [
  { label: "Domaine Nicolas", link: "http://www.domaine-nicolas.fr" },
  { label: "Domaine Bouhelier", link: "http://www.bouhelier.com" },
  { label: "Domaine Pons Gralet", link: "http://www.ponsgralet.com" },
  { label: "Domaine Mittnacht Frères", link: "http://www.mittnachtfreres.fr" },
  { label: "Domaine de Ferrussac", link: "http://www.ferrussac.fr" },
  { label: "Bader-Mimeur", link: "http://www.bader-mimeur.com/fr" },
  { label: "Fontesole", link: "https://www.lesvigneronsdefontes.com/fr" },
  {
    label: "Cave de Saint Chinian",
    link: "https://www.vin-saintchinian.com/fr",
  },
  {
    label: "Domaine de Moulines-Figueirasse",
    link: "http://www.domaines-moulines-figueirasse.fr",
  },
];

const EXTERNAL_EUROPA_LINK = [
  { label: "Skouras", link: "http://www.skouras.gr" },
  { label: " Castel Ruggero", link: "http://www.castelruggero.com" },
];

const ExternalLink = ({ label, link }: { label: string; link: string }) => {
  return (
    <li className={styles.link}>
      <a href={link}>{label}</a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h2 className={styles.title}>Autres domaines à découvrir</h2>
        <div className={styles.linkWrapper}>
          <h3 className={styles.subtitle}>En France</h3>
          <ul>
            {EXTERNAL_FRANCE_LINK.map(({ label, link }) => (
              <ExternalLink label={label} link={link} />
            ))}
          </ul>
        </div>
        <div className={styles.linkWrapper} style={{ marginLeft: "10px" }}>
          <h3 className={styles.subtitle}>En Europe</h3>
          <ul>
            {EXTERNAL_EUROPA_LINK.map(({ label, link }) => (
              <ExternalLink label={label} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
