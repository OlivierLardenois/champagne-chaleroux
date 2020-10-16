import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, PageProps } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import React from "react";
import Layout from "../components/layout";
import PresentationSection from "../components/presentation";
import SEO from "../components/seo";
import styles from "../styles/index.module.css";

type DataProps = {
  background: { childImageSharp: { fluid: FluidObject } };
};

const ADDRESS = "10 Rue des Gris, 51190 Avize";
const EMAIL = "earl.ghys@wanadoo.fr";
const PHONE_NUMBER = "06 48 71 50 64";

const HomePage: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxHeight: "500px" }}>
      <Img
        fluid={data.background.childImageSharp.fluid}
        style={{ maxHeight: "500px" }}
      />
    </div>
    <PresentationSection />
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <div className={styles.contactLinkWrapper}>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/maps/kuQhNUTh4LGPJDn48"
          >
            <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/maps/kuQhNUTh4LGPJDn48"
          >
            {ADDRESS}
          </a>
        </div>
        <div>
          <a href={`mailto:${EMAIL}`}>
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <div>
          <a href={`tel:+${PHONE_NUMBER}`}>
            <FontAwesomeIcon icon={faPhone} size="3x" />
          </a>
          <a href={`tel:+${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
        </div>
      </div>
      <div
        style={{
          maxWidth: 600,
          marginLeft: 60,
        }}
      >
        <h1 className={styles.sectionTitle}>N’hésitez pas à nous contacter</h1>
        <p>
          Nous serons très heureux de vous accueillir à notre domaine pour vous
          faire déguster nos vins, visiter notre cave et vous présenter notre
          métier.
        </p>
        <p>
          Notre activité commerciale est additionnelle de notre activité
          viticole. C’est pourquoi, afin de vous accueillir au mieux, nous vous
          prions de nous informer par mail ou par téléphone de votre venue.
        </p>
      </div>
    </section>
  </Layout>
);

export default HomePage;

export const query = graphql`
  query {
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
