import { PageProps } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "../styles/mentions-legales.module.css";

const LegalPage: React.FC<PageProps> = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "pages.legal.title" })}
        description={intl.formatMessage({ id: "pages.legal.description" })}
        lang={intl.locale}
      />
      <div className={styles.sectionWrapper}>
        <h1>{intl.formatMessage({ id: "legal.editor.title" })}</h1>
        <p>{intl.formatMessage({ id: "legal.editor.address" })}</p>
        <p>SIRET : 38136642600017</p>
        <p>Code APE : 0121Z</p>
        <p>TVA : FR04381366426</p>
        <p>{intl.formatMessage({ id: "legal.editor.phoneNumber" })}</p>
        <p>{intl.formatMessage({ id: "legal.editor.mail" })}</p>
        <p>{intl.formatMessage({ id: "legal.editor.chief" })}</p>

        <h1>{intl.formatMessage({ id: "legal.hosting.title" })}</h1>
        <p>
          Vercel Inc.
          <br />
          340 S Lemon Ave #4133
          <br />
          Walnut, CA 91789
        </p>
      </div>
    </Layout>
  );
};

export default LegalPage;
