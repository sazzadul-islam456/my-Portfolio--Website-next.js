import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

import { useMediaQuery } from "react-responsive";
import Nav from "./Nav";
import Socials from "./Socials";

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);
      };

      if (!isMobile) {
        window.addEventListener("scroll", handleScroll);
      } else {
        setShowMenuButton(true);
      }

      return () => {
        if (!isMobile) {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [isMobile, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-0 w-full z-50 h-[60px] font-bold flex justify-center items-center text-white pointer-events-auto">
      {/* Menu display */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: "-50%" }} // Start above the center
            animate={{ opacity: 1, y: 0 }} // Move to the center
            exit={{ opacity: 0, y: "-50%" }} // Exit back to above the center
            transition={{ type: "spring", stiffness: 400, damping: 40 }} // Smooth transition
            className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center pointer-events-auto bg-transparent"
          >
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-0 left-0 w-full h-full"
            >
              <div className="bg-white text-black shadow-custom max-w-[1170px] h-[400px] mx-auto py-12 xl:py-1 px-12 xl:px-32 flex items-center justify-center gap-12 rounded-lg">
                <Nav
                  containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left"
                  listStyles=" flex flex-col justify-center gap-4"
                  linkStyles="font-primary text-4xl text-primary cursor-pointer"
                  spy={true}
                />
                {/* info */}
                <div className="hidden md:flex mx-auto">
                  <div className="mx-auto">
                    <div className="flex gap-12 mb-12 mx-auto">
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-[28px] text-accent mb-2">
                          <FiMapPin />
                        </div>
                        <p className="text-center font-semibold text-primary text-lg">Location</p>
                        <p className="text-center">Dhaka, Bangladesh</p>
                      </div>
                      {/* social */}
                      <Socials 
                      containerStyles=" gap-2"
                      iconStyles="text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full"
                      />
                      {/* phone */}
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-[28px] text-accent mb-2">
                          <FiPhoneCall />
                        </div>
                        <p className="text-center font-semibold text-primary text-lg">Phone</p>
                        <p className="text-center font-semibold text-primary text-lg">01776424089 </p>
                      </div>
                      {/* email */}
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-[28px] text-accent mb-2">
                          <FiMail />
                        </div>
                        <p className="text-center font-semibold text-primary text-lg">E-mail</p>
                        <p className="text-center font-semibold text-primary text-lg">sazzadislam923@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu button */}
      <AnimatePresence>
        {showMenuButton && (
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            onClick={() => setShowMenu(!showMenu)}
            className="fixed z-50 bottom-16 pointer-events-auto bg-accent shadow-custom w-[54px] h-[54px] rounded-lg flex items-center justify-center"
          >
            <CgMenuGridR className="text-4xl text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FixedMenu;
