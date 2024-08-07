import React from "react";
import { BsArrowRight } from "react-icons/bs";
import vrGirl from "../assets/images/girl.png";
import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";

import "../App.css";

function Home() {
  return (
    <>
      <main className="flex justify-between  py-10 items-center">
        <section className="text-white">
          <div className="left flex flex-col gap-10 w-[70%]">
            <h1 className="flex flex-col text-[3rem] font-bold">
              <span>
                <span className="textGradientLight">Dive</span> Into The Depths
              </span>

              <span>
                Of <span className="textGradientLight">Virtual Reality</span>
              </span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div className="flex items-center gap-5">
            <button class="btn-53">
              <div class="original text-gradientTextDark">build your world</div>
              <div class="letters">
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

          <div className="right"></div>
        </section>

        <section className="w-full flex justify-end">
          <div className="border-[15px] vrGirlRadius w-fit h-fit">
            <img className="w-[37rem]" src={vrGirl} alt="" />
          </div>
        </section>
      </main>

      <main className="gradientHomeDetails shadow1lg flex  py-10 my-10 text-white gap-10 px-5 rounded-full justify-evenly" >
        <section  className="flex items-center gap-4">
          <span className="text-[4rem] text-[#b19aca]">
            <IoLocationOutline />
          </span>
          <div>
            <h2 className="text-[1.6rem] font-bold">Pay Us a visit</h2>
            <p>
            Union St, Seattle, WA 98101, United States
            </p>
          </div>
        </section >
        <hr className=" h-auto border rounded-full border-[#b19aca]"/>
        <section className="flex items-center gap-4">
          <span className="text-[4rem]  text-[#b19aca]">
          <TbPhoneCall />
          </span>
          <div>
            <h2 className="text-[1.6rem] font-bold">Give Us a Call</h2>
            <p>
            (110) 1111-1010
            </p>
          </div>
        </section>
        <hr className=" h-auto border rounded-full border-[#b19aca]"/>
        <section  className="flex items-center gap-4">
          <span className="text-[4rem] text-[#b19aca]">
          <MdAlternateEmail />

          </span>
          <div>
            <h2 className="text-[1.6rem] font-bold">Send Us a Message</h2>
            <p>
            Contact@HydraVTech.com
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
