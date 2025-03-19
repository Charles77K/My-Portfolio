"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { FaCode } from "react-icons/fa";

const navData = [
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "code", href: "https://github.com/Charles77K/My-Portfolio" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="bg-black bg-opacity-95 py-6 fixed top-0 left-0 right-0 text-base md:text-lg z-40">
        <nav className="px-4 md:px-8 lg:px-12 flex justify-between md:max-w-2xl lg:max-w-[75rem] items-center mx-auto text-primary-foreground">
          <aside
            className="flex gap-1 items-center"
            onClick={() => setIsOpen(false)}
          >
            <Logo />
            <Link href={"/"} className="font-bold text-2xl">
              Charles Obiora
            </Link>
          </aside>
          <div className="block md:hidden">
            <motion.button
              whileTap={{
                scale: 0.8,
              }}
              animate={{
                rotateX: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              onClick={handleToggle}
            >
              {isOpen ? <X size={40} /> : <Menu size={40} />}
            </motion.button>
          </div>
          <ul className="hidden md:flex gap-10 items-center">
            {navData.map((nav, idx) => (
              <motion.li
                key={idx}
                className="underline-offset-8"
                whileHover={{
                  scale: 1.1,
                  color: "#ffff",
                  textDecoration: "underline",
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                {nav.label === "code" ? (
                  <Link
                    href={nav.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode size={25} color="white" />
                  </Link>
                ) : (
                  <Link href={nav.href}>{nav.label}</Link>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex md:hidden flex-col rounded-l-3xl text-2xl fixed top-16 right-0 bg-card-foreground text-white 
              h-screen w-2/3 z-50 shadow-lg px-6 py-8 gap-8 font-medium"
          >
            {navData.map((nav, idx) => (
              <motion.nav
                key={idx}
                className="underline-offset-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.4 }}
              >
                {nav.label === "code" ? (
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={nav.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode size={25} color="white" />
                  </Link>
                ) : (
                  <Link onClick={() => setIsOpen(false)} href={nav.href}>
                    {nav.label}
                  </Link>
                )}
              </motion.nav>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
