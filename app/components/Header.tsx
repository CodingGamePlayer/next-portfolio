"use client";

import React from "react";
import NavItem from "./NavItem";

const Header: React.FC = () => {
  const navItems = [
    { href: "#hero", icon: "bx-home", text: "Home" },
    { href: "#about", icon: "bx-user", text: "About" },
    { href: "#resume", icon: "bx-file-blank", text: "Resume" },
    { href: "#portfolio", icon: "bx-book-content", text: "Portfolio" },
    { href: "#study", icon: "bx-server", text: "Study" },
    { href: "#contact", icon: "bx-envelope", text: "Contact" },
  ];

  return (
    <header
      id="header"
      className="fixed top-0 left-0 bottom-0 z-50 w-24 flex flex-col justify-center ms-3"
    >
      <nav id="navbar" className="nav-menu">
        <ul className="flex flex-col items-center">
          {navItems.map((item, index) => (
            <li key={index} className="w-full">
              <NavItem href={item.href} icon={item.icon} text={item.text} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
