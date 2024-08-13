import React, { useRef, useEffect, useLayoutEffect } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import vrpic2 from "../assets/images/vrpic2.png";
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const scrollMain = useRef(null);
  const scrollLeft1 = useRef(null);
  const scrollRight1 = useRef(null);
  const scrollRight2 = useRef(null);

  // useEffect(() => {
    useGSAP(() => {
      
        let aboutTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: scrollMain.current,
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 40%",
            scrub: 2,
          },
        });
  
        aboutTimeline
          .from(scrollLeft1.current, { x: -100, opacity: 0, duration: 0.5 }, "b")
          .from(scrollRight1.current, { x: 100, opacity: 0, duration: 0.5 }, "b")
          .from(".vrpic2", { x: -100, opacity: 0, duration: 0.5 }, "c")
          .from(scrollRight2.current, { x: 100, opacity: 0, duration: 0.5 }, "c");
    })


  return (
    <>
      <main ref={scrollMain} className="flex w-full my-[5rem] text-white max-[850px]:flex-col">
        <section ref={scrollLeft1} className="flex items-center w-1/2 gap-3 max-[850px]:w-full">
          <div className="leading-10 max-[400px]:leading-7">
            <h2 className="font-bold text-[2.5rem] max-[570px]:text-[2.2rem] max-[400px]:text-[1.8rem]">INTRODUCTION</h2>
            <h2 className="text-[2.5rem] max-[570px]:text-[2.2rem] max-[400px]:text-[1.8rem]">To Hydra VR</h2>
          </div>
          <span className="text-[5rem] font-thin max-[400px]:text-[3rem]">
            <HiOutlineArrowLongRight />
          </span>
        </section>
        <section ref={scrollRight1} className="w-1/2 max-[850px]:w-full mt-5">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            assumenda unde? Omnis similique facere dicta debitis modi voluptatem
            harum nihil quae ex quisquam ad temporibus reiciendis, architecto
            tempore, optio sapiente nesciunt ab vel dolorem mollitia voluptatum,
            eaque dolor natus atque! Tempore nostrum ex similique numquam odit
            commodi nulla corporis autem.
          </p>
        </section>
      </main>

      <main className="flex w-full my-[5rem] text-white items-center gap-[2rem] max-[850px]:flex-col">
        <section className="w-1/2 max-[850px]:w-full">
          <img className="vrpic2 max-[850px]:mx-auto" src={vrpic2} alt="" />
        </section>
        <section ref={scrollRight2} className="flex flex-col gap-10 w-1/2 max-[850px]:w-full">
          <div className="leading-10 max-[850px]:flex gap-3">
            <h1 className="font-bold text-[2.5rem] max-[570px]:text-[2.2rem] max-[400px]:text-[1.8rem]">ABOUT</h1>
            <h1 className="text-[2.5rem] max-[400px]:text-[1.8rem]">HYDRA VR</h1> 
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse
            animi cupiditate praesentium nostrum tempore minus amet, nesciunt
            sapiente et magnam debitis qui laudantium ipsum consequatur quas,
            rem deleniti quam rerum a? Illum nemo excepturi saepe suscipit
            nostrum quae cumque dignissimos perferendis neque laboriosam rem,
            accusantium incidunt necessitatibus autem repudiandae.
          </p>
          <button className="btn-53 w-fit">
            <div className="original text-gradientTextDark">
              let's get in touch
            </div>
            <div className="letters">
              <span>l</span>
              <span>e</span>
              <span>t</span>
              <span>s</span>
              <span>&nbsp;g</span>
              <span>e</span>
              <span>t&nbsp;</span>
              <span>i</span>
              <span>n&nbsp;</span>
              <span>t</span>
              <span>o</span>
              <span>u</span>
              <span>c</span>
              <span>h</span>
            </div>
          </button>
        </section>
      </main>
    </>
  );
}

export default About;
