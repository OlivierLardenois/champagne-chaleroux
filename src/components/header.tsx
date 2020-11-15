import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import styles from "./header.module.css";

const PAGES = [
  { label: "Accueil", link: "/" },
  { label: "Nos Champagnes", link: "/nos-champagnes" },
  { label: "Gallerie", link: "/galerie" },
];

const HeaderLinks = ({ navClassName }: any) => (
  <nav className={navClassName}>
    <ul>
      {PAGES.map(({ label, link }) => (
        <li className={styles.linkWrapper}>
          <Link to={link}>{label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

const SmallScreenMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.navOpen : ""}`}
    >
      <HeaderLinks navClassName={styles.smallMenu} />
      <div className={styles.menuToggle} onClick={toogleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <Img className={styles.logo} fixed={data.logo.childImageSharp.fixed} />

      {/* Small screen menu */}
      <SmallScreenMenu />

      {/* Other screen menu */}
      <HeaderLinks navClassName={styles.largeMenu} />
    </header>
  );
};

export default Header;
