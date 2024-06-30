import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import category images
import t1 from "../../public/c1.png";
import t2 from "../../public/t2.png";
import t3 from "../../public/t3.png";
import t4 from "../../public/t4.png";
import t5 from "../../public/t5.png";
import t6 from "../../public/t6.png";
import t7 from "../../public/t7.png";
import t8 from "../../public/t8.png";
import t9 from "../../public/t9.png";
import t10 from "../../public/t10.png";
import t11 from "../../public/t11.png";
import t12 from "../../public/t12.png";
import t13 from "../../public/t13.png";
import t14 from "../../public/t14.png";
import t15 from "../../public/t15.png";
import t16 from "../../public/t16.png";
import t17 from "../../public/t17.png";
import t18 from "../../public/t18.png";
import t19 from "../../public/t19.png";

 // Initialize Swiper core modules

const categories = [
  { src: t1, label: 'Automobile' },
  { src: t2, label: 'Electronics' },
  { src: t3, label: 'Boats' },
  { src: t4, label: 'B2B' },
  { src: t5, label: 'Charity' },
  { src: t6, label: 'Community' },
  { src: t7, label: 'Events' },
  { src: t8, label: 'Online Services' },
  { src: t9, label: 'Property' },
  { src: t10, label: 'Home' },
  { src: t11, label: 'Kids' },
  { src: t12, label: 'Fashion' },
  { src: t13, label: 'Pets' },
  { src: t14, label: 'Sports' },
  { src: t15, label: 'Jobs' },
  { src: t16, label: 'Job Seekers' },
  { src: t17, label: 'Trade' },
  { src: t18, label: 'Freebie' },
  { src: t19, label: 'Services' },
];

const HomeSearch = () => {
  const [swiper, setSwiper] = useState(null);

  const slidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 8; // Large screens
      else if (window.innerWidth >= 640) return 4; // Medium screens
      else return 3; // Small screens
    }
    return 8; // Default to large screen size if window size is unknown
  };

  const prevSlide = () => {
    swiper && swiper.slidePrev();
  };

  const nextSlide = () => {
    swiper && swiper.slideNext();
  };

  return (
    <section className="mt-10 bg-[#ADDDF44F] py-5" id="search">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center mb-4">
          <div className="w-1 bg-black h-full"></div>
          <h6 className="ml-2 lg text-[#2D6B66] font-bold">Categories</h6>

        </div>
        <h2 className="ml-3 flex flex-col font-bold  text-3xl">Browse By Category</h2>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={10}
          slidesPerView={slidesPerView()}
          navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
          className="mySwiper mt-5"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-24 w-24 rounded-full border border-gray-300 p-2">
                <div className="flex flex-col items-center">
                  <Image src={category.src} alt={category.label} width={20} height={20} />
                  <label className="text-sm mt-2">{category.label}</label>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="swiper-button-prev  w-10 h-10 flex items-center justify-center rounded-full cursor-pointer mr-4" onClick={prevSlide}>
            
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className="swiper-button-next  w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-4" onClick={nextSlide}>
            
          </div>
        </div>
        <div className="relative mt-10 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full shadow-md rounded-full h-12 pl-8 pr-20 text-center"
          />
          <img src="/search.png" alt="Search" className="absolute right-5 top-3 w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HomeSearch;
