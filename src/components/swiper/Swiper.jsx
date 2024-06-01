import React from "react";
// import { useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/destination.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/destination2.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/destination3.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/destination4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/destination5.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/destination6.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
