"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Backend", "Web Engineer", "DevOps", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-screen bg-[url('/img/hero-bg.jpg')] bg-top bg-no-repeat bg-cover relative flex items-center justify-center lg:justify-start lg:pl-60"
    >
      <div
        className="container relative z-10 text-center lg:text-left"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1 className="text-5xl font-bold text-[#45505b] mb-4">
          김종식 포트폴리오
        </h1>
        <p className="text-[#45505b] text-2xl font-['Poppins',sans-serif] mb-4">
          I&apos;m <span ref={typedRef} className="text-[#0563bb] ml-2"></span>
        </p>
        <div className="social-links mt-8">
          <a
            href="#"
            className="github text-2xl text-[#45505b] inline-block mr-5 transition duration-300 hover:text-[#0563bb]"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="#"
            className="blog text-2xl text-[#45505b] inline-block mr-5 transition duration-300 hover:text-[#0563bb]"
          >
            <i className="bx bx-link"></i>
          </a>
          <a
            href="#"
            className="web-gis_portfolio text-2xl text-[#45505b] inline-block mr-5 transition duration-300 hover:text-[#0563bb]"
          >
            <i className="bx bxs-file-pdf"></i>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
    </section>
  );
};

export default Hero;
