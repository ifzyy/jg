import React, {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Testimonial Data
const testimonials = [
    {
      "name": "Kyle Boyd",
      "title": "CEO, Talent Hackers",
      "quote": "I saw your pitch and was absolutely blown away. I had to let you know that I think you're a genius at what you do."
    },

    {
      "name": "Moyinloluwa Olawale",
      "title": " HR,Progibd Digital Agency",
      "quote": "Joseph is a master at his craft."
    },
  
    {
      "name": "Olajumoke Oladeji",
      "title": "CEO,PageTurners International.",
      "quote": "Joseph wrote a sales copy for a new product my company launched, and he used my story to sell it I highly recommend him."
    },

    {
      "name": "Olalekan Adeniyi",
      "title": "CEO, Hostel Ways Properties",
      "quote": "There are few people I learn from when it comes to copywriting. For Joseph to make that list, it says a lot about his expertise."
    },
    {
      "name": "Dolapo Hamzat",
      "title": "Direct-response Copywriter and Marketer",
      "quote": "Joseph, you have gotten so good at writing a sales copy."
    },


  ]

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div  className="bg-white p-6 rounded-lg shadow-lg relative mx-4 my-8 h-[300px]">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md"></div>
    <h3 className="text-[#D19F05]  font-bold">{testimonial.name}</h3>
    <p className="text-gray-600 text-sm mb-4">{testimonial.title}</p>
    <p className="text-gray-800 italic">{testimonial.quote}</p>
  </div>
);

const TestimonialCarousel = () => {
    const windowWidth = useRef(window.innerWidth);   
  return (
    <div id='testimonial' className=" flex items-center justify-center  mt-[250px]">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-[#D19F05]  text-center mb-4">Testimonials</h2>
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
