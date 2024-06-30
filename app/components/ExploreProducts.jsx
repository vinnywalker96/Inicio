import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import Image from 'next/image';

// Import images (replace with your actual image imports)
import Starfill from "../../public/starfill.png";
import Star from "../../public/star.png"
import p1 from "../../public/p1.png"
import p2 from "../../public/p2.png"
import p3 from "../../public/p3.png"



const ExploreProducts = () => {
  const [swiper, setSwiper] = useState(null);

  const prevSlide = () => {
    swiper && swiper.slidePrev();
  };

  const nextSlide = () => {
    swiper && swiper.slideNext();
  };

  return (
    <section className="home_section_two py-10 bg-gray-100 relative">
      <div className="container mx-auto">
        <div className="subtitle flex items-center mb-4">
          <div className="left_border w-1 h-full bg-black"></div>
          <label className="ml-2 font-semibold text-lg">Our Products</label>
        </div>
        <h3 className="title text-3xl font-bold mb-6">Explore Our Products</h3>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
          className="mySwiper mb-8"
        >
          <SwiperSlide>
            <div className="home_sec2_card_body_div border-2 border-gray-300 rounded-lg p-6">
              <div className="home_sec2_card_img">
                <Image src={p1} alt="Product 1" className="mx-auto" />
              </div>
              <h5 className="text-lg font-semibold mt-4 mb-2">Car Model 2023</h5>
              <div className="home_sec2_card_rating_main flex items-center gap-2">
                <label className="text-red-500">$100</label>
                <div className="flex gap-1">
                  <Image src={Starfill} alt="Star" className="w-4 h-4" />
                  <Image src={Starfill} alt="Star" className="w-4 h-4" />
                  <Image src={Starfill} alt="Star" className="w-4 h-4" />
                  <Image src={Star} alt="Star" className="w-4 h-4" />
                  <Image src={Star} alt="Star" className="w-4 h-4" />
                </div>
                <span>(35)</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home_sec2_card_body_div border-2 border-gray-300 rounded-lg p-6">
              <div className="home_sec2_card_img">
                <Image src={p2} alt="Product 2" className="mx-auto" />
              </div>
              <h5 className="text-lg font-semibold mt-4 mb-2">Car Model 2023</h5>
              <div className="home_sec2_card_rating_main flex items-center gap-2">
                <label className="text-red-500">$100</label>
                <div className="flex gap-1">
                  <Image src={Starfill} alt="Star" className="w-4 h-4" />
                  <Image src={Starfill} alt="Star" className="w-4 h-4" />
                  <Image src={Starfill} alt="Star" className="w-4 h-4" />
                  <Image src={Star} alt="Star" className="w-4 h-4" />
                  <Image src={Star} alt="Star" className="w-4 h-4" />
                </div>
                <span>(35)</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home_sec2_card_body_div border-2 border-gray-300 rounded-lg p-6">
              <div className="home_sec2_card_img">
                <Image src={p3} alt="Product 3" className="mx-auto" />
              </div>
              <h5 className="text-lg font-semibold mt-4 mb-2">Car Model 2023</h5>
              <div className="home_sec2_card_rating_main flex items-center gap-2">
                <label className="text-red-500">$100</label>
                <div className="flex gap-1">
                  <Image src={Starfill} alt="Star" className="w-4 h-4" />
                  <Image src={Starfill} alt="Star" className="w-4 h-4" />
                  <Image src={Starfill} alt="Star" className="w-4 h-4" />
                  <Image src={Star} alt="Star" className="w-4 h-4" />
                  <Image src={Star} alt="Star" className="w-4 h-4" />
                </div>
                <span>(35)</span>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="swiper-button-prev  w-10 h-10 flex items-center justify-center rounded-full cursor-pointer mr-4" onClick={prevSlide}>
            
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className="swiper-button-next bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-4" onClick={nextSlide}>
            
          </div>
        </div>
        <div className="view_btn mt-8">
          <button className="bg-teal-600 text-white rounded-md px-4 py-2 hover:bg-teal-700 focus:outline-none">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
