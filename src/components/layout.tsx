import React from "react";
import Footer from "./footer";
import Header from "./header";
import "./layout.module.css";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
