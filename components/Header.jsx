"use client";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const Header = () => {
  return (
    <div className="w-full absolute top-0 py-8 xl:py-[48px] z-30">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 justify-between">
          {/* Logo */}
          <Logo />
          <div className=" flex items-center gap-12">
            {/* Nav & Social */}
          <Nav 
            containerStyles="hidden xl:flex" 
            listStyles="flex gap-6"
            linkStyles="text-primary font-primary text-lg tracking-[1.4px] transition-all duration-300 cursor-pointer"
          />

          {/* Social (Placeholder for Now) */}
          <Socials containerStyles="flex items-center gap-2"
          iconStyles="text-base w-[32px] h-[32px] bg-primary text-white flex items-center justify-center rounded-full" />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Header;
