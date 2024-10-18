import React, { useState } from 'react';
import { Send, User, Mail, Briefcase } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Include default styles
import watch from './assets/watch.png';

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

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white p-6 lg:p-[100px]" id='contact'>
      {/* Left Section */}
      <div className="lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Let's Work <span className="text-[#D19F05]">together</span>
        </h1>
        <p className="mb-4">Do you want to work with me or directly learn from me?</p>
        <p className="mb-4">You can send an email or fill the form below:</p>
        <div className="flex items-center mb-4">
          <Mail className="mr-2 text-[#D19F05]" />
          <span>gbadamosijoseph5@gmail.com</span>
        </div>
        <img src={watch} alt="Smart watch" className="mt-8 hidden lg:block" />
      </div>

      {/* Right Section - Contact Form */}
      <div className="lg:w-1/2 w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border-[0.5px] border-[#D19F05] rounded p-[20px]">
            <User className="text-[#D19F05] mr-3" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-black outline-none border-none text-white placeholder-gray-400"
              placeholder="Richard Boyd"
            />
          </div>

          <div className="flex items-center border-[0.5px] border-[#D19F05] rounded p-[20px]">
            <Mail className="text-[#D19F05] mr-3" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black outline-none border-none text-white placeholder-gray-400"
              placeholder="richardboyd@gmail.com"
            />
          </div>

          <div className="flex items-center border-[0.5px] border-[#D19F05] rounded p-[20px]">
            <Briefcase className="text-[#D19F05] mr-3" />
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-black outline-none border-none text-white placeholder-gray-400"
              placeholder="Developer, Designer, Manager, etc."
            />
          </div>

          {/* Phone Input */}
          <div className="flex items-center border-[0.5px] border-[#D19F05] rounded p-[20px]">
            <PhoneInput
              country={'us'}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              inputStyle={{
                backgroundColor: 'black !important',
                color: 'white',
                border: 'none',
                width: '100%',
                outline: 'none'
              }}
              buttonStyle={{
                backgroundColor: 'black',
                border: 'none'
              }}
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black rounded p-[20px] border border-[0.1px] border-[#D19F05] text-white placeholder-gray-400 h-32"
              placeholder="Message"
            ></textarea>
          </div>

          <button type="submit" className="bg-[#D19F05] text-black rounded px-4 py-2 flex items-center">
            Submit <Send className="ml-2" size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
