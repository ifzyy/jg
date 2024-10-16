import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className=" p-[100px] h-[50vh] flex items-center justify-center relative overflow-hidden newsletter">
      {/* Decorative dots */}
      <div className="absolute w-8 h-8 bg-yellow-400 rounded-full top-20 left-20"></div>
      <div className="absolute w-4 h-4 bg-purple-400 rounded-full top-16 right-40"></div>
      <div className="absolute w-6 h-6 bg-pink-400 rounded-full top-8 right-20"></div>
      <div className="absolute w-5 h-5 bg-green-400 rounded-full bottom-40 left-40"></div>
      <div className="absolute w-3 h-3 bg-blue-400 rounded-full bottom-20 right-60"></div>

      <div className="text-center z-10">
        <h2 className="text-white text-4xl font-bold mb-8">Want to learn from Joseph</h2>
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Subscribe to my newsletter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#b69942]  text-black px-6 py-2 rounded-r-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;