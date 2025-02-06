"use client";
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";

const Home = () => {
  // Implement Locomotive Scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll(); 
  }, []);

  return (
    <div data-scroll-container> 
      <Hero />
      <FixedMenu />
      <Service />
      <About />
      <Journey />
      <Work />
      <Contact />
      {/* Temporary div */}
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
