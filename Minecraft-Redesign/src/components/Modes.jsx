import React from "react";
import {commandImg, craftingImg, stoneImg, corners, survival, creative, adventure} from '../assets/index'

function Modes() {
  return (
    <>
      <section className="min-h-screen bg-zinc-900 relative md:gap-10 gap-5 z-20 flex flex-col items-center justify-center">
        <h1 className="font-[minecraftTen] capitalize text-white md:text-[15vh] text-[6vh] leading-[1] px-5 text-center">
          modes in minecraft
        </h1>
        <div className="grid md:grid-cols-3 gap-3 w-full min-h-screen">
          <div className="bg-command relative overflow-hidden flex flex-col items-center justify-between md:p-5 p-2">
            <div className="relative"></div>
            <canvas id="command" className="block max-[768px]:hidden"></canvas>
            <img loading="lazy" src={commandImg} className="scale-[1] aspect-square object-cover md:hidden block w-full h-full" alt="" />
            <img
              loading="lazy"
              src={creative}
              className="w-full h-fit"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute top-0 right-0"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute top-0 left-0 -rotate-90"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute bottom-0 left-0 -rotate-180"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute bottom-0 right-0 rotate-90"
              alt=""
            />
          </div>

          <div className="bg-table relative overflow-hidden flex flex-col items-center justify-between md:p-5 p-2">
            <div className="relative"></div>
            <canvas id="table" className="block max-[768px]:hidden"></canvas>
            <img loading="lazy" src={craftingImg} className="scale-[1] aspect-square object-cover md:hidden block w-full h-full" alt="" />
            <img
              loading="lazy"
              src={survival}
              className="w-full h-fit"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute top-0 right-0"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute top-0 left-0 -rotate-90"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute bottom-0 left-0 -rotate-180"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute bottom-0 right-0 rotate-90"
              alt=""
            />
          </div>

          <div className="bg-bedrock relative overflow-hidden flex flex-col items-center justify-between md:p-5 p-2">
            <div className="relative"></div>
            <canvas id="stone" className="block md:absolute max-[768px]:hidden"></canvas>
            <img loading="lazy" src={stoneImg} className="scale-[1] aspect-square object-cover md:hidden block w-full h-full" alt=""/>
            <img
              loading="lazy"
              src={adventure}
              className="w-full h-fit"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute top-0 right-0"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute top-0 left-0 -rotate-90"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute bottom-0 left-0 -rotate-180"
              alt=""
            />
            <img
              src={corners}
              width="20"
              height="20"
              className="absolute bottom-0 right-0 rotate-90"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Modes;
