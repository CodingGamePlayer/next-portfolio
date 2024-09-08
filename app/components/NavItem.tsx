"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text }) => {
  const [width, setWidth] = useState(56);
  const [isActive, setIsActive] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth + 56 + 40);
    }
  }, [text]);

  useEffect(() => {
    setIsActive(pathname === href || (pathname === "/" && href === "#hero"));
  }, [pathname, href]);

  return (
    <a
      href={href}
      className={` hover:text-white transition-all duration-300 flex items-center py-7 rounded-full bg-[#f2f3f5] hover:bg-[#0563bb] group relative mb-4 ${
        isActive ? "bg-[#0563bb] text-[#45505b]" : "text-[#45505b]"
      }`}
      style={{
        width: "56px",
        transition: "all 0.3s ease",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.width = `${width}px`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.width = "56px";
      }}
    >
      <div className="flex items-center absolute left-3">
        <i
          className={`bx ${icon} text-2xl transition-all duration-300 min-w-[30px] text-center`}
        ></i>
        <span
          ref={textRef}
          className="text-md font-medium transition-all duration-300 whitespace-nowrap opacity-0 group-hover:opacity-100 ml-3"
        >
          {text}
        </span>
      </div>
    </a>
  );
};

export default NavItem;
