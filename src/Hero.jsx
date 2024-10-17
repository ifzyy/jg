import React, { useEffect } from "react";
import heroImage from "./assets/jg-hero.png"; // Ensure path is correct
import heroBg from "./assets/hero-bg.png";
import milkyWay from "./assets/milky-way.png";
import heroArrow from "./assets/hero-arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    // Initialize AOS for animations with a duration of 3000ms
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    // Update the document title for better SEO
    document.title = "Joseph Gbadamosi | Branding & Web Specialist";
  }, []);

  return (
    <section
      id="home"
      className="bg-center bg-no-repeat bg-cover pt-[150px] xl:p-[100px]"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "70%" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center 2xl:gap-[400px] px-[50px]">
        {/* Left Section with Text */}
        <div
          className="text-white space-y-4 max-w-lg relative z-10"
          data-aos="fade-right"
        >
          {/* Welcome Text with Yellow Highlight */}
          <div
            style={{ borderRadius: "100px / 50px" }}
            className="inline-block px-5 py-2 bg-black text-white font-bold border border-2 border-[#D19F05]"
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
            I am the <span className="text-[#D19F05]">JOSEPH GBADAMOSI</span>
            <img
              src={heroArrow}
              alt="Arrow pointing to name"
              loading="lazy"
              className="absolute right-0 top-[50%]"
            />
          </h2>
        </div>

        {/* Right Section with Image */}
        <div data-aos="fade-left">
          <img
            src={heroImage}
            alt="Branding materials"
            className=""
            loading="lazy"
          />
        </div>
      </div>

      {/* Milky Way Background */}
      <img
        src={milkyWay}
        alt="Milky Way background"
        className="w-[100vw] mt-[200px] flex justify-center items-center mx-auto"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;
