import Image from "next/image"
import{ motion } from "framer-motion";
import AnimateedText from "./AnimateedText";


const About = () => {
  return (
    <section className=" relative pt-12 pb-24" id="about">
      <div className=" container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shape */}
          <div className=" hidden xl:flex flex-1 pl-8">
            <div className=" relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className=" rounded-tl-[8px] rounded-tr-[120pc] w-full bg-[#e5f8f6] min-h-[489px] flex items-end justify-center">
                <Image
                src="/assets/about/img.png"
                width={350}
                height={478}
                quality={100}
                priority
                alt=""
                />
              </div>
              {/* rotating shape */}
              <div className=" absolute top-2/4 -right-[65px] flex items-center justify-center">
              <motion.div animate={{
                rotate: [0, 360],
              }}transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                }}
                >
              <Image 
                src="/assets/about/shape-1.svg"
                width={160}
                height={160}
                alt=""
                />
              </motion.div>
                <div className="absolute text-center text-white">
                  <div className="text-5xl font-bold leading-none">2+</div>
                  <div className=" leading-none text-center">
                      Years of<br /> Exprience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center md:text-left w-full xl:w-[60%] mx-auto xl:mx-0 flex flex-col gap-6 md:gap-8">
  <div>
    <AnimateedText text="My Name is Sazzad" textStyles="h2 mb-2" />
    <p className="text-lg">Frontend Developer & Designer</p>
  </div>
  <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
    I create visually stunning and functional websites using modern frontend technologies and design principles. Explore my work to see how I combine creativity with technical skill to deliver exceptional digital experiences.
  </p>

  {/* Info Items - Responsive Layout */}
  <div className="flex flex-col md:flex-row gap-6 md:gap-8 xl:gap-12 pt-[70px] md:pt-10 lg:pt-12 max-w-full mx-auto xl:mx-0 items-center md:items-start justify-center md:justify-start xl:justify-between">
    {/* Age */}
    <div className="max-w-max text-center md:text-left">
      <div className="uppercase font-bold text-primary">Age</div>
      <p>30 Years</p>
    </div>

    {/* Born in */}
    <div className="max-w-max text-center md:text-left">
      <div className="uppercase font-bold text-primary">Born in</div>
      <p>Dhaka, Bangladesh</p>
    </div>

    {/* Phone */}
    <div className="max-w-max text-center md:text-left">
      <div className="uppercase font-bold text-primary">Phone</div>
      <p>01776424089</p>
    </div>

    {/* Email */}
    <div className="max-w-max text-center md:text-left">
      <div className="uppercase font-bold text-primary">Email</div>
      <p>sazzadislam923@gmail.com</p>
    </div>
  </div>
</div>




        </div>
      </div>
    </section>
  )
}

export default About