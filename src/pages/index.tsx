import { graphql, PageProps } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import React from "react";
import ContactSection from "../components/contact";
import Layout from "../components/layout";
import PresentationSection from "../components/presentation";
import SEO from "../components/seo";

type DataProps = {
  background: { childImageSharp: { fluid: FluidObject } };
};

const HomePage: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* TODO: Not sure is it usefull */}
    <div style={{ maxHeight: "500px" }}>
      <Img
        fluid={data.background.childImageSharp.fluid}
        style={{ maxHeight: "500px" }}
      />
    </div>
    <PresentationSection />
    <ContactSection />
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
