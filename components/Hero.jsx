"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import RotatingShape from "./RotatingShape";
import Header from './Header';
import Stats from "./Stats/Stats";


const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white" id="home">
      {/* Header */}
      <Header />

      <div className="container mx-auto h-full flex items-center">
        <div className="relative z-20 xl:max-w-[768px] text-center items-center xl:text-left animate-fadeIn">
          <h1 className="text-4xl mb-2 max-w-[320px] xl:max-w-none md:text-5xl font-bold leading-snug">
            <span className="text-accent">I Build And</span>
            <br />
            <span className="text-gray-900">Design Powerful</span>{" "}
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["WEBSITE", 2000, "APPS", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4 text-gray-900"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerful, custom websites that blend aesthetics with
            performance.
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contact me</button>
          </ScrollLink>
          <Stats />
        </div>

        {/* Image Section */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]">
            <Image
              src="/assets/hero/dev2.png"
              alt="Developer Illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
          {/* Fixed Arrow shape */}
          <div className=" hidden xl:flex absolute top-48 left-[4vw]" data-scroll data-scroll-speed="0.05">
            <Image
              src="/assets/hero/arrow.svg"
              alt="Arrow"
              width={160}
              height={160}
              
            />
          </div>
          {/* shape */}
          <div className=" absolute top-[600px] left-[3vw]" data-scroll data-scroll-speed="0.2">
            <RotatingShape content={<Image src="assets/hero/shape-1.svg"
            width={38}
            height={38}
            alt=""
            />
            }
            
            />
          </div>

          {/* shape 2*/}
          <div className=" absolute top-[240px] xl:left-[35vw]" data-scroll data-scroll-speed="0.1">
            <RotatingShape content={<Image src="assets/hero/shape-2.svg"
            width={34}
            height={34}
            alt=""
            />
            }
            
            />
          </div>

          {/* shape 3*/}
          <div className=" absolute top-[480px] xl:left-[40vw]" data-scroll data-scroll-speed="0.08">
            <RotatingShape content={<Image src="assets/hero/shape-3.svg"
            width={36}
            height={36}
            alt=""
            />
            }
            
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
