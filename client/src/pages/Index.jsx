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
            <header className="flex p-2 justify-between items-center bg-blue-300 w-full sm:w-screen sm:p-4 md:w-screen">
                <Logo />
                <Navbar />
            </header>
            <section className="flex flex-col gap-2 p-2 bg-slate-100 w-full sm:gap-4 sm:w-screen sm:p-4 md:w-screen">
                <ContentCard id={id} />
            </section>
        </>
    );
}

export default Index;
