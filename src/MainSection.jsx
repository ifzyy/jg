import React, { useEffect } from "react";
import aboutImage from "./assets/about.png";
import ServicesGrid from "./ServiceGrid";
import TiltedLogoBar from "./TitledLogoBar";
import TestimonialCarousel from "./TestimonialCarousel";
import ResourcesGrid from "./ResourcesGrid";

export default function MainSection() {
  useEffect(() => {
    document.title = "About Joseph Gbadamosi | Direct-Response Marketing Genius";
  }, []);

  return (
    <div>
      {/* About Section */}
      <section
        id="about"
        className="md:mb-[200px] 2xl:mt-[250px] text-white flex items-center justify-center p-[50px]"
      >
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="relative max-w-lg mx-auto p-6">
                <div className="relative">
                  {/* Main Image with Lazy Loading */}
                  <img
                    src={aboutImage}
                    alt="Working with Plan"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    loading="lazy"
                  />
                  {/* Background Layer - Positioned Box */}
                  <div className="absolute inset-0 top-4 left-4 w-full h-full border border-white opacity-20 bg-black -z-10 transform translate-x-3 translate-y-3"></div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-yellow-400 mb-8">
                About Me
              </h2>
              <h3 className="text-3xl font-bold mb-4">I AM JOSEPH GBADAMOSI</h3>
              <p className="text-lg mb-4">The one you heard about.</p>
              <p className="mb-4">
                I am a Direct-response Marketing and Copywriting professional,
                famous for using deep psychology and persuasion to sell out
                brands, products, and services for some of the major brands
                across the world.
              </p>
              <p className="text-xl font-semibold">
                They say I'm a GENIUS. I agree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <ServicesGrid />
      <TiltedLogoBar />
      <TestimonialCarousel />
      <ResourcesGrid />
    </div>
  );
}
