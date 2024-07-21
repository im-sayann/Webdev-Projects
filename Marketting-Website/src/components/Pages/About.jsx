import React from "react";
import { useSelector } from "react-redux";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import "../../styles/global.css";
import {
  consultation,
  srk,
  virat,
  dhoni,
  reserch,
  implementation,
  Optimization,
  Reporting,
  Improvement,
} from "../../index.js";
import ZoomInSection from "../ZoomInSection.jsx";

function About() {

  const themeColor = useSelector(state => state.color)
  const [activeBox, setActiveBox] = useState(null);

  // Function to toggle the active box
  const toggleBox = (boxId) => {
    setActiveBox((prev) => (prev === boxId ? null : boxId));
  };

  return (
    <>
      <ZoomInSection>
        <section className="px-[10%] flex items-center my-10 gap-5 flex-wrap max-[930px]:justify-center max-[450px]:px-[5%]">
          <span
            style={{ fontWeight: 510, backgroundColor: themeColor }}
            className="primaryColor px-3 rounded-lg text-[40px] max-[800px]:text-[30px] max-[500px]:text-[25px] max-[450px]:text-[20px]"
          >
            Process
          </span>
          <h2 className="textColor text-xl max-[450px]:text-[16px] max-[450px]:leading-[16px]">
            Step-by-Step Guide to Achieving Your Business Goals
          </h2>
        </section>
      </ZoomInSection>
      {/* Section2 */}

      <section className="px-[10%] flex flex-col gap-10 max-[450px]:px-[5%]">
        {/* Box 1 */}

        <ZoomInSection>
          <div
            id="box1"
            onClick={() => toggleBox("box1")}
            style={{
              boxShadow: `0px 0px 5px 1px ${
                themeColor ? themeColor : "white"
              }, 0px 8px 5px ${themeColor ? themeColor : "white"}`,
            }}
            className="w-full p-5 rounded-[20px] bg-[#262626b3] cursor-pointer text-white flex flex-col max-[450px]:p-2"
          >
            <div className="flex justify-between py-4 items-center">
              <span className="flex items-center gap-3">
                <img
                  className="border rounded-full p-3 bg-white w-[4rem] max-[650px]:w-[3.0rem] max-[450px]:p-1 max-[450px]:w-[2.8rem]"
                  src={consultation}
                  alt="Consultation"
                />
                <h1 className="text-[40px] font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px] max-[380px]:text-[22px] max-[340px]:text-[18px]">
                  Consultation
                </h1>
              </span>
              {/* Button to toggle the visibility of box 1 */}
              <button className="text-[40px]  h-fit  relative font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px] border-2 rounded-full shadow-[inset_0px_0px_8px_0px_#a7a1ff]">
                <FaMinus
                  className={`${
                    activeBox === "box1" ? "rotate" : ""
                  } ease-in-out duration-500 absolute opacity-80`}
                />
                <FaMinus />
              </button>
            </div>
            {/* Content of box 1, hidden based on the activeBox state */}
            <div
              id="hide"
              className={`transition-all duration-500 ${
                activeBox === "box1"
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <hr className="my-10 border-2 rounded-full" />
              <p className="font-semibold text-[20px] max-[650px]:text-[18px] max-[450px]:text-[16px]">
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          </div>
        </ZoomInSection>

        {/* Box 2 */}
        <ZoomInSection>
          <div
            id="box2"
            onClick={() => toggleBox("box2")}
            style={{
              boxShadow: `0px 0px 5px 1px ${
                themeColor ? themeColor : "white"
              }, 0px 8px 5px ${themeColor ? themeColor : "white"}`,
            }}
            className="w-full p-5 rounded-[20px] bg-[#262626b3] cursor-pointer text-white flex flex-col max-[450px]:p-2"
          >
            <div className="flex justify-between py-4 items-center">
              <span className="flex items-center gap-3">
                <img
                  className="border rounded-full p-3 bg-white w-[4rem] max-[650px]:w-[3.0rem] max-[450px]:p-1 max-[450px]:w-[2.8rem]"
                  src={reserch}
                  alt="Consultation"
                />
                <h1 className="text-[40px] font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px] max-[380px]:text-[22px] max-[340px]:text-[18px]">
                  Research
                </h1>
              </span>
              {/* Button to toggle the visibility of box 1 */}
              <button className="text-[40px] relative font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px] border-2 rounded-full shadow-[inset_0px_0px_8px_0px_#a7a1ff] h-fit ">
                <FaMinus
                  className={`${
                    activeBox === "box2" ? "rotate" : ""
                  } ease-in-out duration-500 absolute opacity-80`}
                />
                <FaMinus />
              </button>
            </div>
            {/* Content of box 1, hidden based on the activeBox state */}
            <div
              id="hide"
              className={`transition-all duration-500 ${
                activeBox === "box2"
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <hr className="my-10 border-2 rounded-full" />
              <p className="font-semibold text-[20px] max-[650px]:text-[18px] max-[450px]:text-[16px]">
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          </div>
        </ZoomInSection>
        {/* box3 */}

        <ZoomInSection>
          <div
            id="box3"
            onClick={() => toggleBox("box3")}
            style={{
              boxShadow: `0px 0px 5px 1px ${
                themeColor ? themeColor : "white"
              }, 0px 8px 5px ${themeColor ? themeColor : "white"}`,
            }}
            className="w-full p-5 rounded-[20px] bg-[#262626b3] cursor-pointer text-white flex flex-col max-[450px]:p-2"
          >
            <div className="flex justify-between py-4 items-center">
              <span className="flex items-center gap-3">
                <img
                  className="border rounded-full p-3 bg-white w-[4rem] max-[650px]:w-[3.0rem] max-[450px]:p-1 max-[450px]:w-[2.8rem]"
                  src={implementation}
                  alt="Consultation"
                />
                <h1 className="text-[40px] font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px] max-[380px]:text-[22px] max-[340px]:text-[18px]">
                  Implementation
                </h1>
              </span>
              {/* Button to toggle the visibility of box 1 */}
              <button className="text-[40px] relative font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px] border-2 rounded-full shadow-[inset_0px_0px_8px_0px_#a7a1ff] h-fit">
                <FaMinus
                  className={`${
                    activeBox === "box3" ? "rotate" : ""
                  } ease-in-out duration-500 absolute opacity-80`}
                />
                <FaMinus />
              </button>
            </div>
            {/* Content of box 1, hidden based on the activeBox state */}
            <div
              id="hide"
              className={`transition-all duration-500 ${
                activeBox === "box3"
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <hr className="my-10 border-2 rounded-full" />
              <p className="font-semibold text-[20px] max-[650px]:text-[18px] max-[450px]:text-[16px]">
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          </div>
        </ZoomInSection>
        {/* box4 */}

        <ZoomInSection>
          <div
            id="box3"
            onClick={() => toggleBox("box4")}
            style={{
              boxShadow: `0px 0px 5px 1px ${
                themeColor ? themeColor : "white"
              }, 0px 8px 5px ${themeColor ? themeColor : "white"}`,
            }}
            className="w-full p-5 rounded-[20px] bg-[#262626b3] cursor-pointer text-white flex flex-col max-[450px]:p-2"
          >
            <div className="flex justify-between py-4 items-center">
              <span className="flex items-center gap-3">
                <img
                  className="border rounded-full p-3 bg-white w-[4rem] max-[650px]:w-[3.0rem] max-[450px]:p-1 max-[450px]:w-[2.8rem]"
                  src={Optimization}
                  alt="Consultation"
                />
                <h1 className="text-[40px] font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px] max-[380px]:text-[22px] max-[340px]:text-[18px]">
                  Optimization
                </h1>
              </span>
              {/* Button to toggle the visibility of box 1 */}
              <button className="border-2 rounded-full shadow-[inset_0px_0px_8px_0px_#a7a1ff] h-fit text-[40px] relative font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px]">
                <FaMinus
                  className={`${
                    activeBox === "box4" ? "rotate" : ""
                  } ease-in-out duration-500 absolute opacity-80`}
                />
                <FaMinus />
              </button>
            </div>
            {/* Content of box 1, hidden based on the activeBox state */}
            <div
              id="hide"
              className={`transition-all duration-500 ${
                activeBox === "box4"
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <hr className="my-10 border-2 rounded-full" />
              <p className="font-semibold text-[20px] max-[650px]:text-[18px] max-[450px]:text-[16px]">
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          </div>
        </ZoomInSection>

        {/* box5 */}
        <ZoomInSection>
          <div
            id="box3"
            onClick={() => toggleBox("box5")}
            style={{
              boxShadow: `0px 0px 5px 1px ${
                themeColor ? themeColor : "white"
              }, 0px 8px 5px ${themeColor ? themeColor : "white"}`,
            }}
            className="w-full p-5 rounded-[20px] bg-[#262626b3] cursor-pointer text-white flex flex-col max-[450px]:p-2"
          >
            <div className="flex justify-between py-4 items-center">
              <span className="flex items-center gap-3">
                <img
                  className="border rounded-full p-3 bg-white w-[4rem] max-[650px]:w-[3.0rem] max-[450px]:p-1 max-[450px]:w-[2.8rem]"
                  src={Reporting}
                  alt="Consultation"
                />
                <h1 className="text-[40px] font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px] max-[380px]:text-[22px] max-[340px]:text-[18px]">
                  Reporting
                </h1>
              </span>
              {/* Button to toggle the visibility of box 1 */}
              <button className="border-2 rounded-full shadow-[inset_0px_0px_8px_0px_#a7a1ff] h-fit text-[40px] relative font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px]">
                <FaMinus
                  className={`${
                    activeBox === "box5" ? "rotate" : ""
                  } ease-in-out duration-500 absolute opacity-80`}
                />
                <FaMinus />
              </button>
            </div>
            {/* Content of box 1, hidden based on the activeBox state */}
            <div
              id="hide"
              className={`transition-all duration-500 ${
                activeBox === "box5"
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <hr className="my-10 border-2 rounded-full" />
              <p className="font-semibold text-[20px] max-[650px]:text-[18px] max-[450px]:text-[16px]">
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          </div>
        </ZoomInSection>
        {/* box6 */}

        <ZoomInSection>
          <div
            id="box3"
            onClick={() => toggleBox("box6")}
            style={{
              boxShadow: `0px 0px 5px 1px ${
                themeColor ? themeColor : "white"
              }, 0px 8px 5px ${themeColor ? themeColor : "white"}`,
            }}
            className="w-full p-5 rounded-[20px] bg-[#262626b3] cursor-pointer text-white flex flex-col max-[450px]:p-2"
          >
            <div className="flex justify-between py-4 items-center">
              <span className="flex items-center gap-3">
                <img
                  className="border rounded-full p-3 bg-white w-[4rem] max-[650px]:w-[3.0rem] max-[450px]:p-1 max-[450px]:w-[2.8rem]"
                  src={Improvement}
                  alt="Consultation"
                />
                <h1 className="text-[40px] font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px] max-[380px]:text-[22px] max-[340px]:text-[18px]">
                  Improvement
                </h1>
              </span>
              {/* Button to toggle the visibility of box 1 */}
              <button className="border-2 rounded-full shadow-[inset_0px_0px_8px_0px_#a7a1ff] h-fit text-[40px] relative font-extrabold max-[650px]:text-[30px] max-[450px]:text-[25px]">
                <FaMinus
                  className={`${
                    activeBox === "box6" ? "rotate" : ""
                  } ease-in-out duration-500 absolute opacity-80`}
                />
                <FaMinus />
              </button>
            </div>
            {/* Content of box 1, hidden based on the activeBox state */}
            <div
              id="hide"
              className={`transition-all duration-500 ${
                activeBox === "box6"
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <hr className="my-10 border-2 rounded-full" />
              <p className="font-semibold text-[20px] max-[650px]:text-[18px] max-[450px]:text-[16px]">
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          </div>
        </ZoomInSection>
      </section>

      {/* Team  */}
      <ZoomInSection>
        <section className="px-[10%] flex items-center my-10 gap-5 flex-wrap max-[930px]:justify-center max-[450px]:px-[5%]">
          <span
            style={{backgroundColor: themeColor}}
            className="primaryColor px-3 rounded-lg text-[40px] max-[800px]:text-[30px] max-[500px]:text-[25px] max-[450px]:text-[20px]"
          >
            Team
          </span>
          <h2 className="textColor text-xl max-[450px]:text-[16px] max-[450px]:leading-[16px]">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </h2>
        </section>
      </ZoomInSection>
      {/* Team Section */}

      <section className="my-20 px-[10%] flex gap-7 justify-center max-[1050px]:flex-wrap max-[450px]:px-[5%]">
        <ZoomInSection>
          <div
            style={{
              boxShadow: `0px 6px 8px 0px ${themeColor ? themeColor : "white"}`,
              border: `1px solid ${themeColor? themeColor : "white"}`
            }}
            className="hover:scale-[1.01] ease-in-out duration-200 cursor-pointer flex flex-col relative border rounded-[3rem] p-5 w-fit "
          >
            <div className="absolute top-5 right-5 rounded-full p-1 border w-fit bg-white">
              <FaLinkedinIn />
            </div>
            <section className="text-white  flex items-center flex-wrap gap-5">
              <div className="w-[7rem] h-[7rem]   rounded-full overflow-hidden">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={srk}
                  alt=""
                />
              </div>
              <div>
                <h2>CEO and Founder</h2>
                <h3 className="text-lg font-semibold">Shahrukh Khan</h3>
              </div>
            </section>
            <hr className="my-7" />
            <p className="text-white text-wrap">
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
        </ZoomInSection>
        <ZoomInSection>
          <div
            style={{
              boxShadow: `0px 6px 8px 0px ${themeColor ? themeColor : "white"}`,
               border: `1px solid ${themeColor? themeColor : "white"}`
            }}
            className=" hover:scale-[1.01] ease-in-out duration-200 cursor-pointer flex flex-col relative rounded-[3rem] p-5 w-fit "
          >
            <div className="absolute top-5 right-5 rounded-full p-1 border w-fit bg-white">
              <FaLinkedinIn />
            </div>
            <section className="text-white flex-wrap flex items-center gap-5">
              <div className="w-[7rem] h-[7rem]   rounded-full overflow-hidden">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={dhoni}
                  alt=""
                />
              </div>
              <div>
                <h2>CEO and Founder</h2>
                <h3 className="text-lg font-semibold">M.S Dhoni</h3>
              </div>
            </section>
            <hr className="my-7" />
            <p className="text-white text-wrap">
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
        </ZoomInSection>
        <ZoomInSection>
          <div
            style={{
              boxShadow: `0px 6px 8px 0px ${themeColor ? themeColor : "white"}`,
              border: `1px solid ${themeColor? themeColor : "white"}`
            }}
            className=" hover:scale-[1.01] ease-in-out duration-200 cursor-pointer flex flex-col relative border rounded-[3rem] p-5 w-fit "
          >
            <div className="absolute top-5 right-5 rounded-full p-1 border w-fit bg-white">
              <FaLinkedinIn />
            </div>
            <section className="text-white flex-wrap flex items-center gap-5">
              <div className="w-[7rem] h-[7rem]   rounded-full overflow-hidden">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src={virat}
                  alt=""
                />
              </div>
              <div>
                <h2>CEO and Founder</h2>
                <h3 className="text-lg font-semibold">Virat Kohli</h3>
              </div>
            </section>
            <hr className="my-7" />
            <p className="text-white text-wrap">
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
        </ZoomInSection>
      </section>
    </>
  );
}

export default About;
