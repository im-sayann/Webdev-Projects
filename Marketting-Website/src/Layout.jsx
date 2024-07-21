import React, { useRef } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const handleScrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      // Attempt 1: Using block: "start" and inline: "nearest"
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };


  return (
    <>
      <Header
        onAboutClick={handleScrollToAbout}
        onServicesClick={handleScrollToServices}
      />
      <div>
        <Outlet context={{ aboutRef, servicesRef }} />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
