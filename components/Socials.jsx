import React from "react";
import Link from "next/link"; // ✅ Correct import for Next.js links
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const social = [
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/",
  },
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/",
  },
  {
    icon: <FaTwitter />,
    path: "https://www.twitter.com/",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link href={item.path} key={index} target="_blank" rel="noopener noreferrer" className={iconStyles}>
          {item.icon} 
        </Link>
      ))}
    </div>
  );
};

export default Socials;
