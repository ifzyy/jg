import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import dolapoTest from './assets/dolapo-test.jpeg'; // Example image
import moyin from './assets/moyin.jpeg';
import kyleBoyd from './assets/kyle-boyd.jpeg';
import olalekan from './assets/olalekan.jpeg';
import olajumoke from './assets/olajumoke.jpeg';
import osahon from './assets/osahon.jpeg'; // Make sure these paths are correct
import zhully from './assets/zhully.jpeg';
import damilare from './assets/damilare.jpeg';
import faith from './assets/faith.jpeg';
import precious from './assets/precious.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Testimonial Data with dynamic images
const testimonials = [
  {
    name: 'Kyle Boyd',
    title: 'CEO, Talent Hackers',
    quote: "I saw your pitch and was absolutely blown away. I had to let you know that I think you're a genius at what you do.",
    image: kyleBoyd,
  },
  {
    name: 'Moyinloluwa Olawale',
    title: 'HR, Progital Digital Agency',
    quote: 'Joseph is a master at his craft.',
    image: moyin,
  },
  {
    name: 'Olajumoke Oladeji',
    title: 'CEO, PageTurners International',
    quote: 'Joseph wrote a sales copy for a new product my company launched, and he used my story to sell it. I highly recommend him.',
    image: olajumoke,
  },
  {
    name: 'Olalekan Adeniyi',
    title: 'CEO, Hostel Ways Properties',
    quote: "Theres really no argument here. Joseph is great at what he does.",
    image: olalekan,
  },
  {
    name: 'Dolapo Hamzat',
    title: 'Direct-response Copywriter and Marketer',
    quote: 'Joseph, you have gotten so good at writing a sales copy.',
    image: dolapoTest,
  },
  {
    name: 'Osahon Belo-Osagie',
    title: 'Brand Manager, Credit Veto',
    quote: "Joseph is really good at his work. He's really good at setting expectations, and he never fails to over-deliver. Trust Joseph for your copy; he'll never disappoint you.",
    image: osahon,
  },
  {
    name: 'Zhully',
    title: 'Copy Chief, NBC Marketing Systems',
    quote: 'He’s Exceptional and worth the tag.',
    image: zhully,
  },
  {
    name: 'Damilare Aribisala',
    title: 'Copywriter, DaraTV',
    quote: 'There are few people I learn from when it comes to copywriting. For Joseph to make that tiny list, it says a lot about his expertise',
    image: damilare,
  },
  {
    name: 'Faith Iyilade',
    title: 'Marketing Coordinator, Dale Carnegie',
    quote: "Joseph is an exceptional copywriter and an outstanding mentor. His depth of knowledge is remarkable, and I've learnt so much from him as a fellow copywriter.",
    image: faith,
  },
  {
    name: 'Precious Ogunleye',
    title: 'Brand Storyteller',
    quote: 'If school teachers were like Joseph, students would eagerly attend classes. His ability to educate is rare, achievable by only the top 0.01%.',
    image: precious,
  },
];

// Testimonial Card Component with dynamic images
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg relative mx-4 mt-10 my-8 h-[320px]">
    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
    </div>
    <h3 className="text-[#D19F05] font-bold mt-8">{testimonial.name}</h3>
    <p className="text-gray-600 text-sm mb-4 ">{testimonial.title}</p>
    <p className="text-gray-800 italic ">{testimonial.quote}</p>
  </div>
);

const TestimonialCarousel = () => {
  const windowWidth = useRef(window.innerWidth);

  return (
    <div id="testimonial" className="flex items-center justify-center mt-[250px]">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-[#D19F05] text-center mb-4">Testimonials</h2>
        <p className="text-white text-center mb-8">What people are saying about Joseph</p>

        {/* Swiper Component */}
        <Swiper
          slidesPerView={windowWidth.current < 1024 ? 1 : 3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
