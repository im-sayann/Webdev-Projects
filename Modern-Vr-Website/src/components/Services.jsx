import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { vrpic3, vrpic4, vrpic5, vrpic6 } from "./index";
import "../App.css";

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

  return (
    <>
      <main className="flex w-full px-[6rem] my-[5rem] text-white">
        <section className="flex items-center w-1/2 gap-3">
          <div className="leading-10">
            <h2 className="font-bold text-[2.5rem]">WHY BUILD</h2>
            <h2 className="text-[2.5rem]">WITH HYDRA?</h2>
          </div>
          <span className="text-[5rem] font-thin ">
            <HiOutlineArrowLongRight />
          </span>
        </section>
        <section className="w-1/2">
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

      <section className="flex gap-4 w-full my-[5rem] text-white items-center justify-center">
        {serviceData.map((item) => (
          <div className="flex flex-col justify-evenly items-center rounded-[2rem] max-w-[20rem] min-h-[33rem] px-8 py-3 gradientHomeDetails">
            <div className="rounded-full overflow-hidden border-[1rem] border-[#3e2947]">
              <img src={item.img} alt="" />
            </div>
            <h1 className="text-[1.7rem] font-bold">{item.title}</h1>
            <hr className="w-[70%] h-1 border-[#8d6b9b]" />
            <p className="leading-tight">{item.desc}</p>
            <button class="btn-53">
              <div class="original text-gradientTextDark">try it now</div>
              <div class="letters">
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
        ))}
      </section>
    </>
  );
}

export default Services;
