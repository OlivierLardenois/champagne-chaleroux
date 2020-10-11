import { graphql, PageProps } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

type DataProps = {
  background: { childImageSharp: { fluid: FluidObject } };
  family: { childImageSharp: { fluid: FluidObject } };
};

const HomePage: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <div style={{ maxHeight: "500px" }}>
      <Img
        fluid={data.background.childImageSharp.fluid}
        style={{ maxHeight: "500px" }}
      />
    </div>
    <article
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
        <h1 style={{ fontSize: "2.5rem", color: "#AE7743" }}>
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
    </article>
  </Layout>
);

export default HomePage;

export const query = graphql`
  query {
    background: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    family: file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
