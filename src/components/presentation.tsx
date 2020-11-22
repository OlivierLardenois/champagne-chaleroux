import { graphql, useStaticQuery } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import locale from "../intl/fr.json";
import styles from "./presentation.module.css";

const PresentationSection: React.FC = () => {
  const intl = useIntl();
  const data = useStaticQuery<{
    family: { childImageSharp: { fluid: FluidObject } };
  }>(graphql`
    query {
      family: file(relativePath: { eq: "family.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className={styles.sectionWrapper}>
      <h1 className={styles.sectionTitle}>
        {intl.formatMessage({ id: "presentation.title" })}
      </h1>
      <div className={styles.sectionParagraph}>
        {locale.presentation.text.map((_: any, index: number) => (
          <p>{intl.formatMessage({ id: `presentation.text.${index}` })}</p>
        ))}
      </div>
      <div className={styles.sectionImage}>
        <Img fluid={data.family.childImageSharp.fluid} />
      </div>
    </section>
  );
};

export default PresentationSection;
