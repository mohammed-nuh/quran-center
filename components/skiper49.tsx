"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, BookIcon } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "../lib/utils";
import { BG_COLOR1, BRAND_COLOR, COLOR2 } from "../config/brand";

const Skiper49 = () => {
  const images = [
    {
      src: "/courses/course1.png",
      alt: "course-1",
    },
    {
      src: "/courses/course2.png",
      alt: "course-2",
    },
    {
      src: "/courses/course3.png",
      alt: "course-3",
    },
    {
      src: "/courses/course4.png",
      alt: "course-4",
    },
    {
      src: "/courses/course5.png",
      alt: "course-4",
    },
  ];

  return (
    <div className="w-full py-12 flex flex-col items-center justify-center overflow-hidden bg-white">
      <h2
        className="text-4xl md:text-5xl font-extrabold tracking-widest text-center rounded-3xl px-8 py-4 shadow-lg mb-10 flex items-center gap-3"
        style={{
          fontFamily: "TuskerGrotesk, sans-serif",
          background: BG_COLOR1,
          display: "inline-block",
        }}
      >
        <BookIcon size={40} style={{ color: COLOR2 }} className="inline-block mr-3" />
        <span style={{ color: "#fff", background: "transparent" }}>OUR </span>
        <span
          style={{
            color: BRAND_COLOR,
            borderRadius: "0.25em",
          }}
        >
          COURSES
        </span>
      </h2>
      <Carousel_003 className="w-full" images={images} showPagination loop />
    </div>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 350px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
  }

  .swiper-pagination-bullet {
    background-color: #000 !important;
  }

`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn(
        "relative w-full max-w-4xl md:px-5 md:py-10 scale-100 md:scale-[1.3] origin-center",
        className,
      )}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 1500,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
              <img
                className="h-full w-full object-cover"
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };

/**
 * Skiper 49 Carousel_003 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
