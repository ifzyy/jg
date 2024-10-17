import React from 'react';
import dolapo from "./assets/dolapo-hamzat.png";
import cyberSecurity from "./assets/cybersecurity.png";
import jgVica from "./assets/jg-vica.png";
import talentHackers from "./assets/talent-hackers.png";
import progital from "./assets/progital.png";
import pw from "./assets/pw.png";
import remotingWork from "./assets/remoting-work.png";
import sourceGadget from "./assets/source-gadget.png";
import gift from "./assets/gift.png";

const Logo = ({ name, altText }) => (
  <img 
    src={name} 
    alt={altText} 
    className="mr-4 md:mr-8 md:h-16 h-8" 
    loading="lazy"  // Lazy loading for performance
  />
);

const TiltedLogoBar = () => {
  const logos = [
    { name: dolapo, altText: "Dolapo Hamzat" },
    { name: talentHackers, altText: "Talent Hackers" },
    { name: progital, altText: "Progital" },
    { name: gift, altText: "Gift" },
    { name: pw, altText: "PW" },
    { name: sourceGadget, altText: "Source Gadget" },
    { name: remotingWork, altText: "Remoting Work" },
    { name: cyberSecurity, altText: "Cyber Security" },
    { name: jgVica, altText: "JG Vica" }
  ];

  return (
    <div className="w-full overflow-hidden bg-black mb-[150px]">
      <div className="bg-gradient-to-r from-[#4d3c06] via-[#dcbd58] to-[#52441d] bg-[length:100%] skewer w-[100vw] overflow-hidden">
        <div className="flex gap-[50px] justify-around animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <Logo 
              key={index} 
              name={logo.name} 
              altText={logo.altText} // Provide meaningful alt text for each logo
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiltedLogoBar;
