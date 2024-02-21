"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Blog",
    path: "https://medium.com/@diyavijay",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-30 bg-[#0d0d0d] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text=2xl md:text-2xl text-white font-semibold"
        >
          DV
        </Link>
        <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? 
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 hover:text-white">
                            <Bars3Icon className="h-5 w-5" />
                        </button> : 
                       <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 text-slate-200 hover:text-white">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    }
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-1">
                        {navLinks.map((link,index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
  );
};

export default Navbar;
