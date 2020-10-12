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
import SEO from "../components/seo";
import styles from "../styles/index.module.css";

type DataProps = {
  background: { childImageSharp: { fluid: FluidObject } };
  family: { childImageSharp: { fluid: FluidObject } };
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
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          marginRight: 40,
          position: "relative",
          top: "-25px",
        }}
      >
        <h1 className={styles.sectionTitle}>
          Venez visiter notre vignoble et notre cave!
        </h1>
        <p>
          Notre vignoble s'étend sur 4 hectares autour des villages « Grands
          Cru » Avize et Oger où le seul cépage cultivé est le chardonnay. Dans
          les vignes, dont l'âge moyen est de 50 ans, nous réalisons une
          agriculture raisonnée qui concilie la tradition viticole champenoise
          et le respect de l’environnement.
        </p>
        <p>
          Dans notre cellier et dans notre cave, le travail du vin est artisanal
          (pas de filtration, très peu d’automatisation…). De plus, nous
          effectuons un long « élevage sur lattes » de 10 ans minimum. En effet,
          durant cette longue période ( 15 mois minimum pour un champagne) les
          levures mortes présentent dans les bouteilles vont se dégrader et
          reléguer de nombreux composés au vins (protéines et polysaccharides).
          Ces composés vont apporter du corps au vin, de nouveaux arômes et une
          meilleure mousse.
        </p>
        <p>
          Nous proposons ainsi à la vente des vieux champagnes atypiques «
          blancs de blancs » aux arômes briochés et toastés.
        </p>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          position: "relative",
          top: "-50px",
        }}
      >
        <Img fluid={data.family.childImageSharp.fluid} />
      </div>
    </section>
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
    family: file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
