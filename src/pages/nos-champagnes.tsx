import { graphql, PageProps } from "gatsby";
import { FixedObject } from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";
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
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "pages.champagnes" })} />
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
        }}
      >
        <Product imageFixed={data.brut.childImageSharp.fixed}>
          <h2>{intl.formatMessage({ id: "champagnes.brut.title" })}</h2>
          <p>{intl.formatMessage({ id: "champagnes.brut.text" })}</p>
        </Product>
        <Product imageFixed={data.millesime.childImageSharp.fixed}>
          <h2>{intl.formatMessage({ id: "champagnes.millesime.title" })}</h2>
          <p>{intl.formatMessage({ id: "champagnes.millesime.text" })}</p>
        </Product>
        <Product imageFixed={data.rose.childImageSharp.fixed}>
          <h2>{intl.formatMessage({ id: "champagnes.rose.title" })}</h2>
          <p>{intl.formatMessage({ id: "champagnes.rose.text" })}</p>
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
