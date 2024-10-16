import React, { useState } from 'react';
import { Send } from 'lucide-react';
import watch from "./assets/watch.png";
import { Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white p-6 lg:p-[100px]">
      {/* Left Section */}
      <div className="lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Let's Work <span className="text-[#b69942]">together</span>
        </h1>
        <p className="mb-4">Do you want to work with me or directly learn from me?</p>
        <p className="mb-4">You can send an email or fill the form below:</p>
        <div className="flex items-center mb-4">
          <Mail className="mr-2 text-[#b69942]" />
          <span>abadamosijoseph5@gmail.com</span>
        </div>
        <div className="flex items-center mb-4">
          <Phone className="mr-2 text-[#b69942]" />
          <span>09031416243</span>
        </div>
        <img src={watch} alt="Smart watch" className="mt-8 hidden lg:block" />
      </div>

      {/* Right Section - Contact Form */}
      <div className="lg:w-1/2 w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-black outline-[#b69942] rounded border-[0.5px] p-[20px] border border-[#b69942]"
              placeholder="Ganiyat Femi"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black outline-[#b69942] border-[0.5px] rounded p-[20px] border border-[#b69942]"
              placeholder="gyalfemity@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-black outline-[#b69942] rounded border-[0.5px] p-[20px] border border-[#b69942]"
              placeholder="+2345656656"
            />
          </div>
          <div>
            <label htmlFor="role" className="block mb-1">Your role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-black outline-[#b69942] rounded p-[20px] border border-[0.5px] border-[#b69942]"
            >
              <option value="">Select Role...</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black rounded p-[20px] border border-[0.1px] border-[#b69942] h-32"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="bg-[#b69942] text-black rounded px-4 py-2 flex items-center">
            Submit <Send className="ml-2" size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
