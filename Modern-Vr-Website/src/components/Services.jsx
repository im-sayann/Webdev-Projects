import React, { useRef, useEffect, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { vrpic3, vrpic4, vrpic5, vrpic6 } from "./index";
import "../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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


function Services() {
  const serviceData = [
    {
      img: vrpic3,
      title: "SIMULATION",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      img: vrpic4,
      title: "EDUCATION",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      img: vrpic5,
      title: "SELF-CARE",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      img: vrpic6,
      title: "OUTDOOR",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  const scrollLeft3 = useRef();
  const scrollRight3 = useRef();
  const cards = useRef();
  const [slidesPerView, setSlidesPerView] = useState(5);

  useGSAP(() => {
    
      const servicesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollLeft3.current,
          scroller: "body",
          // markers: true,
          start: "top 90%",
          end: "top 30%",
          scrub: 2,
        },
      });

      servicesTimeline
        .from(scrollLeft3.current, { x: -100, opacity: 0, duration: 0.5 }, "d")
        .from(scrollRight3.current, { x: 100, opacity: 0, duration: 0.5 }, "d")
        .from(cards.current,{ y: 100, opacity: 0})
      // scrollTl.add(servicesTimeline);
    
  })

    // Call handler right away so state gets updated with initial window size
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1500) {
          setSlidesPerView(3);
        } else {
          setSlidesPerView(4);
        }
        if (window.innerWidth < 950) {
          setSlidesPerView(2);
        }
        if (window.innerWidth < 600) {
          setSlidesPerView(1);
        }
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <main className="servicesPage">
      <main className="flex w-full px-[6rem] my-[5rem] text-white max-[850px]:flex-col max-[850px]:px-0 max-[850px]:gap-4">
        <section ref={scrollLeft3} className="flex items-center w-1/2 gap-3 max-[850px]:w-full">
          <div className="leading-10 gap-4 ">
            <h2 className="font-bold text-[2.5rem] max-[850px]:text-nowrap max-[570px]:text-[2.2rem] max-[400px]:text-[1.8rem]">WHY BUILD</h2>
            <h2 className="text-[2.5rem] max-[850px]:text-nowrap max-[570px]:text-[2.2rem] max-[400px]:text-[1.8rem]">WITH HYDRA?</h2>
          </div>
          <span className="text-[5rem] font-thin max-[400px]:text-[3rem]">
            <HiOutlineArrowLongRight />
          </span>
        </section>
        <section ref={scrollRight3} className="w-1/2 max-[850px]:w-full">
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

      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        // navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        ref={cards} 
        >
        {serviceData.map((item, idx) => (
          <SwiperSlide className="flex gap-4 w-full my-[5rem] text-white items-center justify-center">
            <div key={idx} className="flex flex-col justify-evenly items-center rounded-[2rem] max-w-[20rem] min-h-[33rem] px-8 py-3 gradientHomeDetails">
            <div className="rounded-full overflow-hidden border-[1rem] border-[#3e2947]">
              <img src={item.img} alt="" />
            </div>
            <h1 className="text-[1.7rem] font-bold">{item.title}</h1>
            <hr className="w-[70%] h-1 border-[#8d6b9b]" />
            <p className="leading-tight">{item.desc}</p>
            <button className="btn-53">
              <div className="original text-gradientTextDark">try it now</div>
              <div className="letters">
                <span>t</span>
                <span>r</span>
                <span>y</span>
                <span>&nbsp;i</span>
                <span>t&nbsp;</span>
                <span>&nbsp;n</span>
                <span>o</span>
                <span>w</span>
              </div>
            </button>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Services;
