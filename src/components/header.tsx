import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styles from "./header.module.css";

const PAGES = [
  { label: "Accueil", link: "/" },
  { label: "Nos Champagnes", link: "/nos-champagnes" },
  { label: "Gallerie", link: "/galerie" },
];

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
      <nav>
        <ul>
          {PAGES.map(({ label, link }) => (
            <li className={styles.linkWrapper}>
              <Link to={link} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
