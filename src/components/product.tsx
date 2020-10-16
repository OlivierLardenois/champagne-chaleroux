import Img, { FixedObject } from "gatsby-image";
import React from "react";
import styles from "./product.module.css";

type DataProps = {
  imageFixed: FixedObject;
};

const Product: React.FC<DataProps> = ({ children, imageFixed }) => (
  <article className={styles.card}>
    <Img fixed={imageFixed} />
    <div className={styles.cardText}>{children}</div>
  </article>
);

export default Product;
