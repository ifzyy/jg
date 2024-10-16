import React from 'react';
import { Mail, MessageCircle, Linkedin, Twitter, Instagram } from 'lucide-react';
import logo from "./assets/logo.png"
import heroBg from "./assets/hero-bg.png";
const FooterSection = ({ title, items }) => (
  <div className="mb-6 md:mb-0" >
    <h2 className="text-[#b69942] text-[20px]  font-semibold mb-3">{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <a href= "" className="text-gray-300 hover:text-yellow-500">{item}</a>
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
    <footer className="footer text-white pb-[20px]  pt-[260px] px-4 mt-[200px] relative overflow-hidden"  >
  <img src={heroBg} className=' absolute top-0  left-[10%] md:left-[-15%] md:top-[-70%]'  />
  <img src={heroBg} className='absolute bottom-0 right-[15%] md:right-[-15%] md:bottom-[-80%]'  />
      <div className="max-w-6xl mx-auto pt-[200px] ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterSection
            title="Pages"
            items={['Home', 'About us', 'Companies', 'Resources', 'Testimonial', 'Work with Joseph']}
          />
          <FooterSection
            title="Legal"
            items={['Policy', 'Complaint Handling', 'Terms and Conditions']}
          />
          <div>
            <h2 className="text-[#b69942] font-semibold mb-3">Contact</h2>
            <ContactItem 
              icon={<Mail size={18} className="text-[#b69942] " />}
              text="abadamosijoseph5@gmail.com"
            />
            <ContactItem 
              icon={<MessageCircle size={18} className="text-[#b69942] " />}
              text="Chat on whatsapp"
            />
          </div>
        </div>
        

      </div>
         
      <div className="mt-8 pt-8 border-t-2 border-t-[#b69942]  flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="JOSEPH ABADAMOSI" className="h-10" />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </a>
          </div>
        </div>
    </footer>
  );
}