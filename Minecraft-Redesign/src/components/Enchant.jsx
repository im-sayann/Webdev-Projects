import React from "react";
import { enchantImg } from "../assets/index";
function Enchant() {
  return (
    <>
      <section
        id="enchantSection"
        className="w-full relative bg-zinc-900 z-40 flex flex-col items-center justify-center min-h-screen md:p-10 p-5"
        style={
          {
            /* maxHeight: '100vh' */
          }
        }
      >
        <div className="flex items-center justify-center relative md:mt-0 mt-20">
          <h1 className="font-[minecraftTen] max-[350px]:text-[6vh] text-white relative z-10 md:-top-40 xl:text-[12vh] lg:text-[12vh] md:text-[8vh] text-[8vh] capitalize md:w-[60%] leading-[1] md:text-center text-left max-[400px]:text-[5vh]">
            <span className="md:whitespace-nowrap">Keep imagining.</span> the
            end isnt the end
          </h1>
          <div className="md:w-[52%] w-[70%] md:h-[350px] h-[200px] bg-[#9979cf] absolute z-30 md:top-20 top-[120%] blur-[100px] md:opacity-[0.7] rounded-full"></div>
        </div>

        <div className="md:block hidden z-30 h-[800px] w-[600px] pt-[5rem] absolute">
          <canvas
            id="enchant"
            width="660"
            height="792"
            style={{ display: "block", width: "100%", height: "100%" }}
          ></canvas>
        </div>

        <img
          src={enchantImg}
          className="aspect-square object-cover md:hidden block relative scale-[1] z-30"
          alt=""
        />
      </section>
    </>
  );
}

export default Enchant;
