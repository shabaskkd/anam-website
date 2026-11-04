import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import SideDrawer from "./SideDrawer";
import Footer from "./Footer";

const Layout = ({ children, withBg }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Helmet>
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} withBg={withBg} />
      {children}
      <Footer />
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Layout;
