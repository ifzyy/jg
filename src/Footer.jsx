import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import logo from "./assets/logo.png";
import heroBg from "./assets/hero-bg.png";
import instagram from "./assets/instagram.png";
import x from "./assets/x.png";
import linkedIn from "./assets/linkedin.png";

const FooterSection = ({ title, items, links }) => (
  <div className="mb-6 md:mb-0">
    <h2 className="text-[#b69942] text-[20px] font-semibold mb-3">{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <a href={links[index]} className="text-gray-300 hover:text-yellow-500">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center mb-2">
    {icon}
    <span className="ml-2 text-gray-300">{text}</span>
  </div>
);

export default function Footer() {
  return (
    <footer className="footer text-white pb-[20px] pt-[260px] px-4 mt-[200px] relative z-10 overflow-hidden">
      {/* Set z-index for the background images to be lower */}
      <img src={heroBg} className="absolute top-0 left-[10%] md:left-[-15%] md:top-[-70%] z-0" alt='hue bg'/>
      <img src={heroBg} className="absolute bottom-0 right-[15%] md:right-[-15%] md:bottom-[-80%] z-0" alt='hue bg'/>

      {/* Footer content with higher z-index */}
      <div className="max-w-6xl mx-auto pt-[200px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterSection
            title="Pages"
            items={['Home', 'About us', 'Companies', 'Resources', 'Testimonial', 'Work with Joseph']}
            links={['#home', '#about', '#companies', '#resources', '#testimonial', '#work']}
          />
          <FooterSection
            title="Legal"
            items={['Policy', 'Complaint Handling', 'Terms and Conditions']}
            links={['#policy', '#complaint', '#terms']}
          />
          <div>
            <h2 className="text-[#b69942] font-semibold mb-3">Contact</h2>
            <ContactItem 
              icon={<Mail size={18} className="text-[#b69942]" />}
              text="gbadamosijoseph5@gmail.com"
            />
            <ContactItem 
              icon={<MessageCircle size={18} className="text-[#b69942]" />}
              text="Chat on whatsapp"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t-2 border-t-[#b69942] flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="JOSEPH ABADAMOSI" className="h-10" />
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
            <img src={linkedIn} className='h-8' alt="LinkedIn" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src={x} className='h-8' alt="Twitter/X" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
            <img src={instagram} className='h-8' alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
