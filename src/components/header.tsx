import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styles from "./header.module.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const pages = [
    { label: "Accueil", link: "/" },
    { label: "Nos Champagnes", link: "/products" },
    { label: "Gallerie", link: "/gallery" },
  ];

  return (
    <header className={styles.header}>
      <Img
        className={styles.logo}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
      <nav>
        <ul style={{ margin: 0 }}>
          {pages.map(({ label, link }) => (
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
