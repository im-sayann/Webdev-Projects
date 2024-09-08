import React from "react";
import {
  autumn,
  cave,
  jungle,
  nether,
  ocean,
  plains,
  snow,
  swamp,
  endImg,
  closure,
  fantasize,
  lost,
  sun,
  theline,
} from "../assets/index";
import "./Biomes/biomes.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Biome() {
  const biomeArray = [
    {
      cardImg: plains,
      cardH1: "Plains",
      biomeTitle: "Biome",
      cardP:
        "A flat, grassy area with a few scattered trees and abundant wildlife.",

      biomeDesc:
        "A flat, grassy area with a few scattered trees and abundant wildlife, where the gentle rustling of leaves and the chirping of birds create a peaceful and serene ",
      musicImg: lost,
      musicName: "Lost",
      musicAuthor: "hayd",
    },
    {
      cardImg: jungle,
      cardH1: "Jungle",
      biomeTitle: "Biome",
      cardP:
        "A dense, tropical forest with tall trees, vines, and exotic animals.",
      biomeDesc:
        "A dense, tropical forest teeming with life, where towering trees stretch high into the canopy, their leaves creating a lush green tapestry. Thick vines dra",
      musicImg: closure,
      musicName: "Closure",
      musicAuthor: "hayd",
    },
    {
      cardImg: snow,
      cardH1: "Snow",
      biomeTitle: "Biome",
      cardP:
        "An icy, snowy landscape with snow-covered terrain and cold villages.",
      biomeDesc:
        "An icy, snowy landscape where the ground is blanketed in a pristine layer of snow, creating a vast, white expanse that sparkles under the pale sunlight. The terrain is ",
      musicImg: fantasize,
      musicName: "Fantasize",
      musicAuthor: "ariana",
    },
    {
      cardImg: swamp,
      cardH1: "Swamp",
      biomeTitle: "Land",
      cardP:
        "A wet, muddy terrain featuring lily pads, dark oak trees, and swamp creatures.",
      biomeDesc:
        "A wet, muddy terrain where the ground is perpetually damp and squelchy, with puddles forming in the low-lying areas. The landscape is dotted with lily pads floating on",
      musicImg: lost,
      musicName: "Lost",
      musicAuthor: "hayd",
    },
    {
      cardImg: ocean,
      cardH1: "Ocean",
      biomeTitle: "Explore",
      cardP:
        "A vast, underwater expanse with coral reefs, marine life, and shipwrecks.",
      biomeDesc:
        "A vast, underwater expanse where the ocean floor stretches into a boundless blue horizon. The area is adorned with vibrant coral reefs that teem with  ",
      musicImg: sun,
      musicName: "The Sun",
      musicAuthor: "billie",
    },
    {
      cardImg: cave,
      cardH1: "Cave",
      biomeTitle: "Area",
      cardP:
        "Dark, underground tunnels filled with ores, minerals, and dangerous mobs.",
      biomeDesc:
        "Dark, underground tunnels where the air is cool and musty, with the faint echo of dripping water reverberating through the cavernous passag.",
      musicImg: closure,
      musicName: "Closure",
      musicAuthor: "hayd",
    },
    {
      cardImg: nether,
      cardH1: "Nether",
      biomeTitle: "World",
      cardP:
        "A fiery, dangerous realm with lava lakes, hostile creatures, and rare resources.",
      biomeDesc:
        "Dark, underground tunnels where the air is cool and musty, with the faint echo of dripping water reverberating through the cavernous passag.",
      musicImg: theline,
      musicName: "The Line",
      musicAuthor: "rob",
    },
    {
      cardImg: endImg,
      cardH1: "The",
      biomeTitle: "End",
      cardP:
        "A void-like, barren world with the Ender Dragon and unique end materials.",
      biomeDesc:
        "Dark, underground tunnels where the air is cool and musty, with the faint echo of dripping water reverberating through the cavernous passag.",
      musicImg: fantasize,
      musicName: "Fantasize",
      musicAuthor: "ariana",
    },
  ];

  useGSAP(() => {
    const biomeSections = gsap.utils.toArray(".biomeSection");

    const mainBiomeAnimationContainer = () => {
      gsap.fromTo(
        biomeSections,
        {
          scale: 0.8,
          width: "90vw",
          borderRadius: "20px",
        },
        {
          xPercent: -99.3 * (biomeSections.length - 1),
          ease: "none",
          scrollTrigger: {
            delay: 1,
            trigger: ".biomeContainer",
            scroller: "body",
            pin: true,
            scrub: 2,
            end: "+=3000",
            // markers: true,
          },
        }
      );
    };

    mainBiomeAnimationContainer();

   
  }, []);

  return (
    <div className="  max-[900px]:hidden relative z-[33] overflow-hidden bg-zinc-900 ">
      <h1 className="font-[minecraftTen] text-white md:text-[15vh] text-[8vh] max-[400px]:text-[5vh] leading-[1] pt-[20rem] text-center">Biomes in minecraft</h1>
      <div className="biomeContainer bg-zinc-900 flex min-w-[800vw]">
        <h1 className="scrollText font-[anton] uppercase text-[30rem] absolute left-0">
          reimagine
        </h1>

        {biomeArray.map((biome, index) => {
          return (
            <section
              key={index} // Make sure each section has a unique key
              id="sec1"
              className="biomeSection pin w-full overflow-hidden h-screen relative flex border border-[#3b3b3b]"
            >
              <img
                loading="lazy"
                id="bgBiomeImg"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-[10px] brightness-[40%]" // Fix the z-0x issue
                src={biome.cardImg}
                alt=""
              />

              <section className="w-[40vw] h-full flex items-center justify-center relative z-10">
                <div className="biomeImg w-[500px] border border-[#00000060] h-[500px] bg-[#ffffff1a] rounded-[30px] object-cover overflow-hidden dropShadow">
                  <img
                    loading="lazy"
                    className="object-cover w-full h-full cursor-pointer"
                    src={biome.cardImg}
                    alt=""
                  />
                  <h1 className="absolute bottom-[5rem] text-white z-[1] text-[4vh] font-[helvetica] font-extrabold">
                    {biome.cardH1}
                  </h1>
                  <p className="absolute bottom-[2rem] text-[#a2a2a2] z-[1] text-[2vh] font-[helvetica] font-extrabold">
                    {biome.cardP}
                  </p>
                </div>
              </section>

              <section className="w-[35vw] text-white relative z-10">
                <h1 className="font-[anton] uppercase text-[8vh] absolute top-[10%] dropShadow">
                  <span className="text-orange-600">{biome.cardH1}</span>{" "}
                  <span>{biome.biomeTitle}</span>
                </h1>
                <h3 className="font-[Helvetica] w-[70%] text-[2.7vh] absolute left-[20%] top-1/2 transform -translate-y-1/2 dropShadow">
                  {biome.cardP}
                </h3>
                <p className="font-[Helvetica] w-[70%] text-[2.1vh] absolute bottom-[10%] dropShadow">
                  {biome.biomeDesc}
                </p>
              </section>

              <section className="w-[25vw] flex items-center justify-center relative z-10">
                <div className="biomeMusicPlayerContainer gradientPlayer w-[200px] h-[200px] rounded-xl overflow-hidden dropShadow hover:cursor-pointer relative">
                  <img
                    id="biomeMusicPlayer"
                    loading="lazy"
                    className="object-cover w-full h-full relative"
                    src={biome.musicImg}
                    alt=""
                  />
                  <div className="pinHover w-10 h-10 bg-[#00000077] absolute rounded-full -mt-[10px] top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] z-[2] backdrop-blur-sm"></div>
                  <div className="pinHover w-[3px] h-[3px] bg-black rounded-full absolute -mt-[10px] top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] z-[3]"></div>
                  <p className="absolute bottom-2 z-[2] dropShadow text-white pinHover left-2">
                    {biome.musicName}
                    <span className="text-[13px] font-bold">
                      - {biome.musicAuthor}
                    </span>
                  </p>
                </div>
              </section>
            </section>
          );
        })}
      </div>
      ;
    </div>
  );
}

export default Biome;
