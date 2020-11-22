/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({
  description = "",
  lang = "fr",
  title,
}: {
  description?: string;
  lang?: string;
  title: string;
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang={lang} />
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
}

export default SEO;
