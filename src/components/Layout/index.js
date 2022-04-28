import React from "react";
import Footer from "../Footer";
import NavigationBar from "../NavBar";

const Layout = ({ title, children }) => (
  <div className="site">
    <NavigationBar />
    <title>{title}</title>
    <main className="site-content">{children}</main>
    <Footer />
  </div>
)
export default Layout;