import React, { useRef, useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import vrGirl from "../assets/images/girl.png";
import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import "../App.css";
import { useGSAP } from "@gsap/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home({ tl1 }) {
  const leftH1 = useRef(null);
  const rightImage1 = useRef();
  const leftP = useRef();
  const leftBtn1 = useRef();
  const gradientHomeDetails1 = useRef();
  const [slidesPerView, setSlidesPerView] = useState(3);
  

  useGSAP(() => {

    tl1.from(leftH1.current, { y: 80, opacity: 0 }, "a");
    tl1.from(rightImage1.current, { x: 100, opacity: 0 }, "a");
    tl1.from(leftP.current, { x: -100, opacity: 0 });
    tl1.from(leftBtn1.current, { x: -100, opacity: 0 });
    tl1.from(gradientHomeDetails1.current, { y: 100, opacity: 0 });
  }, );

  

    // Call handler right away so state gets updated with initial window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <main className="flex justify-between py-10 items-center max-[1000px]:flex-col-reverse">
        <section className="text-white w-fit">
          <div className="left flex flex-col gap-10 ">
            <h1 ref={leftH1} className="flex flex-col text-[3rem] font-bold max-[1600px]:items-center max-[1600px]:mt-10 max-[570px]:text-[2.2rem]">
              <span>
                <span className="textGradientLight mr-1">Dive</span> 
                Into The Depths
              </span>

              <span>
                Of <span className="textGradientLight">Virtual Reality</span>
              </span>
            </h1>
            <p ref={leftP} className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div ref={leftBtn1} className="flex items-center gap-5">
              <button className="btn-53">
                <div className="original text-gradientTextDark">
                  build your world
                </div>
                <div className="letters">
                  <span>b</span>
                  <span>u</span>
                  <span>i</span>
                  <span>l</span>
                  <span>d&nbsp;</span>
                  <span>y</span>
                  <span>o</span>
                  <span>u</span>
                  <span>r&nbsp;</span>
                  <span>w</span>
                  <span>o</span>
                  <span>r</span>
                  <span>l</span>
                  <span>d</span>
                </div>
              </button>
              <span className="text-[3rem] text-purple-300 font-thin">
                <BsArrowRight />
              </span>
            </div>
          </div>

          {/* <div className="right"></div> */}
        </section>

        <section ref={rightImage1} className="w-full flex justify-end max-[1000px]:justify-center">
          <div className="border-[15px] vrGirlRadius w-fit h-fit">
            <img className="w-[37rem]" src={vrGirl} alt="" />
          </div>
        </section>
      </main>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        // navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        ref={gradientHomeDetails1}
        className="gradientHomeDetails shadow1lg flex  py-10 my-10 text-white gap-10 px-5 rounded-full justify-evenly max-[570px]:py-6 text-nowrap overflow-x-hidden"
      >
        <SwiperSlide className="flex items-center gap-4 max-[1000px]:justify-center">
          <span className="text-[4rem] max-[400px]:text-[2.8rem] text-[#b19aca]">
            <IoLocationOutline />
          </span>
          <div>
            <h2 className="text-[1.6rem] font-bold max-[400px]:text-[1.1rem]">Pay Us a visit</h2>
            <p className="max-[400px]:text-[12px]">Union St, United States</p>
          </div>
        </SwiperSlide>
        <hr className=" h-auto border rounded-full border-[#b19aca]" />
        <SwiperSlide className="flex items-center gap-4 max-[1000px]:justify-center">
          <span className="text-[4rem]  max-[400px]:text-[2.8rem] text-[#b19aca]">
            <TbPhoneCall />
          </span>
          <div>
            <h2 className="text-[1.6rem] font-bold max-[400px]:text-[1.1rem]">Give Us a Call</h2>
            <p className="max-[400px]:text-[12px]">(110) 1111-1010</p>
          </div>
        </SwiperSlide>
        <hr className=" h-auto border rounded-full border-[#b19aca]" />
        <SwiperSlide className="flex items-center gap-4 max-[1000px]:justify-center">
          <span className="text-[4rem] max-[400px]:text-[2.8rem] text-[#b19aca]">
            <MdAlternateEmail />
          </span>
          <div>
            <h2 className="text-[1.6rem] font-bold max-[400px]:text-[1.1rem]">Send Us a Msg</h2>
            <p className="max-[400px]:text-[12px]">@HydraVTech.com</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
