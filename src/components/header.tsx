import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link, useIntl } from "gatsby-plugin-intl";
import React, { useState } from "react";
import styles from "./header.module.css";

const PAGES = [
  { label: "home", link: "/" },
  { label: "champagnes", link: "/nos-champagnes" },
  { label: "gallery", link: "/galerie" },
];

const HeaderLinks = ({ navClassName }: any) => {
  const intl = useIntl();

  return (
    <nav className={navClassName}>
      <ul>
        {PAGES.map(({ label, link }) => (
          <li className={styles.linkWrapper}>
            <Link to={link}>
              {intl.formatMessage({ id: `pages.${label}.title` })}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

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
