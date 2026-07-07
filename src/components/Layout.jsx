import React, { useState } from "react";
import Header from "./Header";
import SideDrawer from "./SideDrawer";
import Footer from "./Footer";

const Layout = ({ children, withBg }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
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
