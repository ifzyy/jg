import React from "react";
import aboutImage from "./assets/about.png";
import ServicesGrid from "./ServiceGrid";
import TiltedLogoBar from "./TitledLogoBar";
import TestimonialCarousel from "./TestimonialCarousel";
import ResourcesGrid from "./ResourcesGrid";
import NewsletterSubscription from "./NewsLetterSub";
import { Watch } from "lucide-react";
import ContactForm from "./Contact";
export default function MainSection() {
  return (
    <div>
      <div className="mb-[200px]  mt-[250px] text-white  flex items-center justify-center p-[50px] ">
        <div className="max-w-7xl w-full">
          <h2 id="about" className="text-4xl font-bold text-yellow-400 mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Workspace with laptop and plant"
                  className=""
                />
                <div className="absolute inset-0 border-2 border-white rounded-lg transform translate-x-4 translate-y-4 -z-10 p-10"></div>
              </div>
            </div>
            <div className="md:w-1/2">
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
      </div>
      <ServicesGrid/>
      <TiltedLogoBar />
      <TestimonialCarousel />
      <ResourcesGrid />
      <NewsletterSubscription />
   <ContactForm />
    </div>
  );
}
