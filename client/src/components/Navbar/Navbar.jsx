import { useState } from "react";

import mobileMenu from "./mobileMenu.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen(prev) {
        setIsOpen((prev) => !prev);
        const myNav = document.querySelector("#myNav");

        myNav.classList.toggle("isOpen");
    }

    return (
        <>
            <div>
                <div className="p-2 sm:hidden">
                    <button onClick={handleOpen}>
                        <img src={mobileMenu} alt="" />
                    </button>
                </div>
                <div
                    id="myNav"
                    className="flex justify-between isOpen bg-blue-400 p-4 w-full absolute top-0 right-0 transition-transform"
                >
                    <ul className="[&>li>a]:border-b [&>li>a]:border-black">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Genre</a>
                        </li>
                        <li>
                            <a href="#">Tambah Anime</a>
                        </li>
                    </ul>
                    <div className="mt-1">
                        <button onClick={handleOpen}>
                            <img src={mobileMenu} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block">
                <ul className="flex p-2 gap-4">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Genre</a>
                    </li>
                    <li>
                        <a href="#">Tambah Anime</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
