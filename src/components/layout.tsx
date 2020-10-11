import React from "react";
import Footer from "./footer";
import Header from "./header";
import "./layout.css";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main style={{ margin: `0 auto`, maxWidth: 960 }}>{children}</main>
    <Footer />
  </>
);

export default Layout;
