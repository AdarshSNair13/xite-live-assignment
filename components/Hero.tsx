"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SLIDER_DATA } from "@/constants";

const Hero = () => {
  return (
    <div>
      <Swiper
       style={{
        // '--swiper-navigation-color': '#fff',
        // '--swiper-pagination-color': '#fff',
      }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {SLIDER_DATA.map(({ id, image }) => (
          <div key={id}>
            <SwiperSlide>
              <div
                className="flex items-center justify-center w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-screen"
                style={{
                  background: `url(${image}) center center / cover scroll no-repeat`,
                }}
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
                <div className=" text-white z-[2] ">
                  <h2 className="text-4xl md:text-7xl font-bold">
                    Partner Webinar Series
                  </h2>
                  <p className="py-5 text-xl">
                    Coffe Conversation for Throught Leaders
                  </p>
                  <button
                    type="button"
                    className="inline-block rounded bg-red-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
