import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);

    // Reset the form
    setEmail('');

    // Redirect to the newsletter page
    navigate('/newsletter');
  };

  return (
    <div className="p-[50px] h-[50vh] flex items-center justify-center relative overflow-hidden newsletter" id="work">
      {/* Decorative dots */}
      <div className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full top-10 left-10 sm:top-20 sm:left-20"></div>
      <div className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-400 rounded-full top-8 right-20 sm:top-16 sm:right-40"></div>
      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-pink-400 rounded-full top-4 right-10 sm:top-8 sm:right-20"></div>
      <div className="absolute w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-400 rounded-full bottom-20 left-20 sm:bottom-40 sm:left-40"></div>
      <div className="absolute w-1 h-1 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-blue-400 rounded-full bottom-10 right-30 sm:bottom-20 sm:right-60"></div>

      <div className="text-center z-10">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Want to learn from Joseph</h2>
     
          <a href="/newsletter"
           
            className="bg-[#b69942] text-black px-6 py-2 underline font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Subscribe to my newsletter here
          </a>
    
      </div>
    </div>
  );
};

export default NewsletterSubscription;
