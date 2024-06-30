"use client";
import { useRef, useEffect } from 'react';
import Image from 'next/image';
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

const TopBar = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else {
          sliderRef.current.scrollBy({
            left: clientWidth, // Scroll by one full view width
            behavior: 'smooth',
          });
        }
      }
    }, 10000); // Change 5000 to the desired interval in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white shadow-custom py-2.5 w-full">
      <div ref={sliderRef} className="flex gap-4 justify-between w-full overflow-x-auto whitespace-pre scrollbar-hide">
        {[t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19].map((src, index) => (
          <div key={index} className="flex min-w-[40px] h-10 bg-[#9AD7F3] justify-center items-center text-center rounded-full">
            <Image src={src} alt={`t${index + 1}`} className="w-4.5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
