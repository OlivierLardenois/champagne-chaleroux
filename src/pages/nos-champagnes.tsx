import { graphql, PageProps } from "gatsby";
import { FixedObject } from "gatsby-image";
import React from "react";
import Layout from "../components/layout";
import Product from "../components/product";
import SEO from "../components/seo";

type DataProps = {
  brut: { childImageSharp: { fixed: FixedObject } };
  millesime: { childImageSharp: { fixed: FixedObject } };
  rose: { childImageSharp: { fixed: FixedObject } };
};

const ProductsPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Nos Champagnes" />
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
        }}
      >
        <Product imageFixed={data.brut.childImageSharp.fixed}>
          <h2>Brut</h2>
          <p>
            100 % chardonnay et issu de la vendange 2006, notre brut présente
            une robe couleur or. Au nez on perçoit des arômes de pains grillés
            et de champignons frais. En bouche, des notes d’oxydation sont
            ressentis, on retrouve la torréfaction et le pain d’épice. Le dosage
            est de 6 g/L.
          </p>
        </Product>
        <Product imageFixed={data.millesime.childImageSharp.fixed}>
          <h2>Millésime 2008</h2>
          <p>
            Notre cuvée d’exception 100 % chardonnay. 2008 est reconnu comme un
            excellent millésime en Champagne. Malgré son âge, ce vin vous
            surprendra par sa fraîcheur. Au nez, ce sont les arômes de citron et
            de poire qui dominent. En bouche, ces arômes sont exacerbés par la
            tension du vin et le faible dosage (5g/L).
          </p>
        </Product>
        <Product imageFixed={data.rose.childImageSharp.fixed}>
          <h2>Rosé</h2>
          <p>
            Cette cuvée est un assemblage de 40 % de pinot noir, 40 % de pinot
            meunier et 20 % de chardonnay. Le vieillissement en cave est de 2 à
            3 ans. Au nez, on distingue des notes de framboises et de fraises.
            En bouche, ces arômes sont accompagnés par une belle tension. Le
            dosage est de 6 g/L.
          </p>
        </Product>
      </div>
    </Layout>
  );
};

export default ProductsPage;

export const query = graphql`
  query {
    brut: file(relativePath: { eq: "brut.jpg" }) {
      childImageSharp {
        fixed(height: 400, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    millesime: file(relativePath: { eq: "millesime.jpg" }) {
      childImageSharp {
        fixed(height: 400, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rose: file(relativePath: { eq: "rose.jpg" }) {
      childImageSharp {
        fixed(height: 400, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
