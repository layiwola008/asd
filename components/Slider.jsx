import React, { useRef, useState } from "react";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { slides } from "./data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper slider__container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.image}
              alt="Image"
              height="600"
              className="slider__image"
            />
            <div className="slider__desc">
              <h2>{slide.header}</h2>

              <hr />

              <p>{slide.paragraph}</p>

              <div className="slider__buttons">
                <Link href={slide.fBtnLinK}>
                  <button>
                    <span className="slider__btn__icon">
                      <BsArrowRightCircleFill />
                    </span>
                    {slide.fBtnText}
                  </button>
                </Link>
                <Link href={slide.sBtnLink}>
                  <button>{slide.sBtnText}</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
