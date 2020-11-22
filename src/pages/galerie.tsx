import { graphql, PageProps } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "../styles/galerie.module.css";

type DataProps = {
  img1: { childImageSharp: { fluid: FluidObject } };
  img2: { childImageSharp: { fluid: FluidObject } };
  img3: { childImageSharp: { fluid: FluidObject } };
  img4: { childImageSharp: { fluid: FluidObject } };
  img5: { childImageSharp: { fluid: FluidObject } };
  img6: { childImageSharp: { fluid: FluidObject } };
  img7: { childImageSharp: { fluid: FluidObject } };
  img8: { childImageSharp: { fluid: FluidObject } };
  img9: { childImageSharp: { fluid: FluidObject } };
  img10: { childImageSharp: { fluid: FluidObject } };
};

const GalleryPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "pages.gallery" })} />
      <div className={styles.galerieGrid}>
        <div className={styles.columnWrapper}>
          <Img fluid={data.img1.childImageSharp.fluid} />
          <Img fluid={data.img2.childImageSharp.fluid} />
          <Img fluid={data.img3.childImageSharp.fluid} />
          <Img fluid={data.img4.childImageSharp.fluid} />
          <Img fluid={data.img5.childImageSharp.fluid} />
        </div>
        <div className={styles.columnWrapper}>
          <Img fluid={data.img6.childImageSharp.fluid} />
          <Img fluid={data.img7.childImageSharp.fluid} />
          <Img fluid={data.img8.childImageSharp.fluid} />
          <Img fluid={data.img9.childImageSharp.fluid} />
          <Img fluid={data.img10.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;

export const imageFragment = graphql`
  fragment imageFragment on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "image1.jpg" }) {
      ...imageFragment
    }
    img2: file(relativePath: { eq: "image2.jpg" }) {
      ...imageFragment
    }
    img3: file(relativePath: { eq: "image3.jpg" }) {
      ...imageFragment
    }
    img4: file(relativePath: { eq: "image4.jpg" }) {
      ...imageFragment
    }
    img5: file(relativePath: { eq: "image5.jpg" }) {
      ...imageFragment
    }
    img6: file(relativePath: { eq: "image6.jpg" }) {
      ...imageFragment
    }
    img7: file(relativePath: { eq: "image7.jpg" }) {
      ...imageFragment
    }
    img8: file(relativePath: { eq: "image8.jpg" }) {
      ...imageFragment
    }
    img9: file(relativePath: { eq: "image9.jpg" }) {
      ...imageFragment
    }
    img10: file(relativePath: { eq: "image10.jpg" }) {
      ...imageFragment
    }
  }
`;
