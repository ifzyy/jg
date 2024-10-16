import React from 'react';
import copyWriting from "./assets/copywriting.png"
import mastermind from "./assets/mastermind.png"
import messageing from "./assets/messaging.png"
import consulting from "./assets/consulting.png"
import branding from "./assets/branding.png"
import marketing from "./assets/marketing.png"
import heroBg from "./assets/hero-bg.png";


const ServiceCard = ({ title, description, imageSrc }) => (
  <div className="bg-transparent  border-[#2d2c30] border rounded-lg overflow-hidden p-[10px]">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4 border  border-[#2d2c30] m-2 rounded-[10px]">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const ServicesGrid = () => {
  const services = [
    {
      title: "Copywriting",
      description: "Whether it's landing page copy, website copy, email campaigns, or ad copy, I'll help you communicate your value proposition in a way that turns readers into customers.",
      imageSrc: copyWriting
    },
    {
      title: "Marketing",
      description: "Boost your brand and grow your business with smart marketing that works. Strategies that'll grow your online presence and attract customers.",
      imageSrc:marketing
    },
    {
      title: "Branding",
      description: "Stand out in a crowded marketplace with a powerful, cohesive brand identity. My branding service helps you create and communicate a unique value proposition.",
      imageSrc: branding
    },
    {
      title: "Consulting",
      description: "Think of me as your business's best friend—one who happens to be a marketing expert. Stuck on a problem? Not sure how to grow? I'm here to help.",
      imageSrc: consulting
    },
    {
      title: "Brand Messaging",
      description: "Craft compelling brand messaging that resonates with your audience. Develop a unique voice and language that sparks growth and differentiation.",
      imageSrc:messageing
    },
    {
      title: "The copywriting mastermind",
      description: "Unlock persuasive writing secrets to drive business success. Master customer psychology and craft irresistible offers.",
      imageSrc:mastermind
    }
  ];

  return (
    <div id="services" className=" bg-center bg-no-repeat bg-contain mb-[150px]"
     >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our <span className="text-[#b69942] ">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"  style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "200%",backgroundPosition: "50% 20%" }}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;