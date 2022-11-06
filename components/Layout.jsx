import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>ASD Renewables - Top Solar Company In Abjua Nigeria</title>
        <meta
          name="description"
          content="ASD is a global energy solutions provider, tapping into the opportunity in Nigeria's energy and power shortage to deliver sustainable energy."
        />
        <meta
          name="keywords"
          content="solar company in abuja nigeria, solar company in nigeria"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Topbar />
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
