import React, {useEffect} from "react";
import heroImage from "./assets/jg-hero.png"; // Ensure path is correct
import heroBg from "./assets/hero-bg.png";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])

  return (
    <section
    id="home"
      className=" bg-center bg-no-repeat bg-cover h-[80vh] pt-[150px] xl:p-[100px]"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "70%" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center 2xl:gap-[400px] px-[50px]">
        {/* Left Section with Text */}
        <div className="text-white space-y-4 max-w-lg" data-aos="fade-right"    data-aos-offset="500"
     >
          {/* Welcome Text with Yellow Highlight */}
          <div
            style={{ borderRadius: "100px / 50px" }}
            className="inline-block px-5 py-2 bg-black text-white font-bold border border-2 border-[#b69942] "
          >
            Welcome
          </div>

          {/* Main Heading */}
          <h1 className="text-[40px] md:text-6xl font-bold leading-tight">
            Awww, Common! You found me too?!
          </h1>

          {/* Subtext */}
          <p className="text-lg mt-4">
            Oh well, I guess I have to introduce myself all over again.
          </p>
          <p className="text-lg mt-2">Alright, here goes.</p>

          {/* Highlighted Name */}
          <h2 className="text-4xl font-bold mt-6">
            I am the <span className="text-[#b69942] ">JOSEPH GBADAMOSI</span>
          </h2>
        </div>

        {/* Right Section with Image */}
        <div data-aos="fade-left">
          <img src={heroImage} alt="branding materials" className="" />
        </div>
      </div>

    
    </section>
  );
};

export default Hero;
