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
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 1, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://images.pexels.com/photos/1620675/pexels-photo-1620675.jpeg"
            alt="slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://images.pexels.com/photos/1234232/pexels-photo-1234232.jpeg"
            alt="slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://images.pexels.com/photos/796633/pexels-photo-796633.jpeg"
            alt="slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg"
            alt="slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
