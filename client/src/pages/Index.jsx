import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Logo from "../components/Logo/Logo.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import ListBy from "../components/ListBy/ListBy.jsx";
import ContentCard from "../components/ContentCard/ContentCard.jsx";

function Index() {
  const { id } = useParams();

  return (
    <>
      <header className="flex p-4 justify-between items-center bg-blue-300">
        <Logo />
        <Navbar />
      </header>
      <section className="flex flex-col gap-4 p-4 bg-slate-100">
        {/* <ListBy /> */}
        <ContentCard id={id} />
      </section>
    </>
  );
}

export default Index;
