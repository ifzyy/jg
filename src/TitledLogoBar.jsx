import React from 'react';
import dolapo from "./assets/dolapo-hamzat.png"
import cyberSecurity from "./assets/cybersecurity.png"
import jgVica from "./assets/jg-vica.png"
import talentHackers from "./assets/talent-hackers.png"
import progital from "./assets/progital.png"
import pw from "./assets/pw.png"
import remotingWork from "./assets/remoting-work.png"
import sourceGadget from "./assets/source-gadget.png"
import gift from "./assets/gift.png"
const Logo = ({ name }) => (
<img src={name} className=' mr-4 md:mr-8 md:h-16 h-8' />
);

const TiltedLogoBar = () => {
  const logos = [
    { name: dolapo },
    { name: talentHackers,  },
    { name: progital, },
    { name: gift, },
    { name: pw },
    { name: sourceGadget },
    { name: remotingWork },
    { name: cyberSecurity, },
    {name: jgVica}
  ];

  return (
    <div className="w-full  overflow-hidden bg-black mb-[150px]">
    <div className="bg-gradient-to-r from-[#4d3c06] via-[#dcbd58] to-[#52441d] bg-[length:100%] skewer w-[100vw] overflow-hidden">
  <div className="flex gap-[50px] justify-around animate-marquee whitespace-nowrap">
    {logos.concat(logos).map((logo, index) => (
      <Logo key={index} name={logo.name} />
    ))}
  </div>
</div>

    </div>
  );
};

export default TiltedLogoBar;