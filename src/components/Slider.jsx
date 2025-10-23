import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SliderCSS() {
  return (
    <div id="app" className="w-full">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
          640: { slidesPerView: 1, spaceBetween: 20 }, // Tablet
          1024: { slidesPerView: 1, spaceBetween: 30 }, // Desktop
        }}
      >
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://i.postimg.cc/C13CcFXq/1-scaled.jpg"
            alt="slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://i.postimg.cc/8cyp15Gr/71jt-P4pt-Bl-L.jpg"
            alt="slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://i.postimg.cc/2Sdz62Cz/il-fullxfull-3496616427-m9fj.webp"
            alt="slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://i.postimg.cc/x1v5B3C9/BKKUBE1073-15223.jpg"
            alt="slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
