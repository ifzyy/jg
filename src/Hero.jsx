import React from "react";
import heroImage from "./assets/jg-hero.png"; // Ensure path is correct
import heroBg from "./assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      className=" bg-center bg-no-repeat bg-cover h-[100vh]"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "70%" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center 2xl:gap-[400px] px-[50px]">
        {/* Left Section with Text */}
        <div className="text-white space-y-4 max-w-lg">
          {/* Welcome Text with Yellow Highlight */}
          <div
            style={{ borderRadius: "100px / 50px" }}
            className="inline-block px-5 py-2 bg-black text-white font-bold border border-2 border-[#b69942] "
          >
            Welcome
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl font-bold leading-tight">
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
        <div>
          <img src={heroImage} alt="branding materials" className="" />
        </div>
      </div>

    
    </section>
  );
};

export default Hero;
