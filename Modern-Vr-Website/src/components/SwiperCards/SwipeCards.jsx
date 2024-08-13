import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./SwiperCards.css";
import { EffectCards } from "swiper/modules";

import one from "./images/1.jpg";
import two from "./images/10.jpg";
import three from "./images/3.jpg";
import four from "./images/4.jpg";
import five from "./images/5.jpeg";
import six from "./images/6.jpg";
import seven from "./images/7.jpg";
import eight from "./images/8.jpg";
import nine from "./images/9.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function SwipeCards() {

  useGSAP(() => {

    let newTl = gsap.timeline({
      scrollTrigger:{
        trigger: ".mainContainer",
        scroller: "body",
        // markers: true,
        start: "top: 90%",
        end: "top: 50%",
        scrub: 2,
      },
      });
      newTl
      .from(".mySwiperTexts", {x: 100, opacity: 0}, "ae")
      .from(".mySwiper", {x: -100, opacity: 0}, "ae")

  });

  return (
    <main className="mainContainer w-full flex justify-between my-[13rem] gap-20 max-[900px]:flex-col max-[900px]:items-center">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eight} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nine} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="mySwiperTexts text-white w-1/2 flex flex-col justify-evenly py-10 max-[900px]:w-full gap-5">
        <h1 className="text-[2.5rem] font-bold">
          <span className="textGradientLight">Cross</span> the limit into{" "}
          <span className="textGradientLight">VR</span>
        </h1>

        <p>
          orem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          similique ipsa, non id minima molestiae reprehenderit amet distinctio
          officiis rerum voluptates et labore unde saepe! Neque ratione
          reiciendis animi eligendi ipsum, nam minus laborum dolorum voluptatem
          necessitatibus non velit, expedita eum excepturi unde odit recusandae
          blanditiis facere, nisi omnis sint.
        </p>

        <button className="btn-53 w-min">
          <div className="original text-gradientTextDark">build your world</div>
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
      </div>
    </main>
  );
}

export default SwipeCards;
