import React from 'react';
import { ChevronRight } from 'lucide-react';
import aboutImage from "./assets/about.png";
import imageFour from "./assets/4.png"
import copyWriting from "./assets/copywriting.png"
import heroBg from "./assets/hero-bg.png";
import imageFive from "./assets/5.png"
import rightArrow from "./assets/right-arrow.png"
const ResourceCard = ({ title, description, imageSrc }) => (
    <div className="bg-transparent overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 p-[15px] courtroom object-cover" />
      <div className="p-4">
        <h3 className="text-white text-lg flex items-center font-semibold mb-2">
          {title}
          <a href="">
            <img 
              src={rightArrow} 
              className="hover:scale-110 transition-transform duration-300" 
              alt="arrow" 
            />
          </a>
        </h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      </div>
    </div>
  );
  

const ResourcesGrid = () => {
  const resources = [
    {
      title: "Understanding Market Sophistication and Awareness levels",
      description: "Your marketing campaign will keep falling if you don't know this powerful information. And no matter how powerful your marketing is, this must be the bedrock.",
      imageSrc: aboutImage
    },
    {
      title: "The Power of Personalization: Tailoring Your Message (With Infographics)",
      description: "A visually engaging guide explaining the impact of personalization in marketing and how to implement it effectively.",
      imageSrc: imageFour
    },
    {
      title: "The Direct-Response Copywriting Checklist (Downloadable Checklist)",
      description: "A practical checklist for ensuring all essential elements are included in direct-response copy, from headline to call-to-action. Use this to refine your next marketing message.",
      imageSrc:copyWriting
    },
    {
      title: "Crafting Irresistible Headlines: A Step-by-Step Approach",
      description: "An easy-to-understand guide exploring key psychological triggers used in effective copywriting and how to implement them.",
      imageSrc: imageFour
    },
    {
      title: "Mastering Persuasion: Key Psychological Secrets That Fuel Consumer Action",
      description: "An easy-to-understand guide exploring key psychological triggers used in effective copywriting and how to implement them.",
      imageSrc: imageFive
    },
    {
      title: "Decoding Consumer Behavior: Insights for Marketers",
      description: "A detailed guide discussing the latest trends in consumer behavior and how to leverage them in marketing strategies.",
      imageSrc:imageFour
    },
    {
      title: "Emotional Storytelling in Marketing: (With case Studies)",
      description: "A collection of case studies showcasing how emotional storytelling has been used effectively in various marketing campaigns and how you can do the same.",
      imageSrc:imageFour
    },
    {
      title: "The Direct-Response Copywriting Checklist (Downloadable Checklist)",
      description: "A practical checklist for ensuring all essential elements are included in direct-response copy, from headline to call-to-action. Use this to refine your next marketing message.",
      imageSrc:copyWriting
    },
    {
      title: "Mastering the Art of Persuasive Emails (A short guide)",
      description: "A short guide focusing on crafting emails that persuade and convert, from subject lines to email body and signature.",
      imageSrc:imageFour
    },
  ];

  return (
    <div id='resources'  className=" bg-center bg-no-repeat bg-contain mb-[150px] mt-[250px] p-[20px]"
      >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our <span className="text-[#D19F05] ">Resources</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "200%",backgroundPosition: "50% 10%"  }}>
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesGrid;