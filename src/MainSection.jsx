import React, { useEffect } from "react";
import aboutImage from "./assets/about.png";
import ServicesGrid from "./ServiceGrid";
import TiltedLogoBar from "./TitledLogoBar";
import TestimonialCarousel from "./TestimonialCarousel";
import ResourcesGrid from "./ResourcesGrid";
export default function MainSection() {
  return (
    <div>
      <section
        id="about"
        className=" md:mb-[200px]  2xl:mt-[250px] text-white  flex items-center justify-center p-[50px] "
      >
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="">
                <div className="relative max-w-2xl w-full">
                  {/* White border effect */}
                  <div className="absolute inset-0 bg-white rounded-3xl transform translate-x-2 translate-y-2"></div>

                  {/* Image container */}
                  <div className="relative rounded-3xl overflow-hidden">
                    <img
                      src={aboutImage}
                      alt="Workspace with laptop, hands typing, plant, and notepad"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
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
      <ServicesGrid />
      <TiltedLogoBar />
      <TestimonialCarousel />
      <ResourcesGrid />
    </div>
  );
}
