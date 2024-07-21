import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import "../../styles/global.css";
import {
  first,
  second,
  third,
  fourth,
  five,
  six,
  Illustration,
  contact,
} from "../../index.js";

function Services() {

  const section5Ref = useRef(null);
  const themeColor = useSelector(state => state.color)


  const scrollToSection5 = () => {
    if (section5Ref.current) {
      section5Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Zoom effects
  const ZoomInSection = ({ children }) => {
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("zoom-in");
            } else {
              entry.target.classList.remove("zoom-in");
            }
          });
        },
        {
          threshold: 0.1, // Trigger when 10% of the element is visible
        }
      );

      const element = ref.current;
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, []);

    return (
      <div ref={ref} className="zoom-element">
        {children}
      </div>
    );
  };

  let data = [
    {
      title: "Search engine optimization",
      image: first,
      bgColor: "#f3f3f3",
      keyNum: 1,
    },
    {
      title: "Pay-per-click advertising",
      image: second,
      bgColor: "#b9ff66",
      keyNum: 2,
    },
    {
      title: "Social Media Marketing",
      textColor: "white",
      image: third,
      bgColor: "#000",
      keyNum: 3,
    },
    {
      title: "Email Marketing",
      textColor: "black",
      image: six,
      bgColor: "#f3f3f3",
      keyNum: 4,
    },
    {
      title: "Content Creation",
      image: five,
      bgColor: "#b9ff66",
      keyNum: 5,
    },
    {
      title: "Analytics and Tracking",
      textColor: "white",
      image: fourth,
      bgColor: "#000",
      keyNum: 6,
    },
  ];

  return (
    <>
      <ZoomInSection key="section1">
        <section
          className="px-[10%] flex items-center my-10 gap-5 justify-center max-[450px]:px-[5%]
            max-[1100px]:flex-wrap "
        >
          <span
            style={{ fontWeight: 510, backgroundColor: themeColor }}
            className="primaryColor px-3 text-nowrap rounded-lg text-[40px] max-[800px]:text-[30px] max-[500px]:text-[25px] max-[450px]:text-[20px]"
          >
            Our Services
          </span>
          <h2 className="textColor text-xl max-[450px]:text-[16px] max-[450px]:leading-[18px] text-wrap">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation
          </h2>
        </section>
      </ZoomInSection>

      {/* 2 */}

      <section className="px-[10%] gridAdjust my-20 gap-10 max-[550px]:px-[5%]">
        {data.map((item) => {
          return (
            <ZoomInSection key={item.keyNum}>
              <div
                style={{ backgroundColor: item.bgColor }}
                className="rounded-[35px] p-10 min-h-[18rem]  flex text-white  bg-[#f3f3f3] justify-between max-[600px]:min-h-[15rem] max-[450px]:p-5 max-[450px]:min-h-[11rem] max-[370px]:min-h-[10rem] max-[330px]:min-h-[8rem] hover:scale-[0.98] ease-in-out duration-500 cursor-pointer"
              >
                <main
                  style={{ color: item.textColor }}
                  className=" w-[17vw] flex flex-col justify-between text-black max-[1200px]:w-[30vw]  max-[450px]:w-[43vw] "
                >
                  <h2
                    className="text-3xl font-semibold max-[650px]:text-[1.5rem] max-[450px]:text-[1.3rem]
                    max-[400px]:text-[1.2rem] max-[450px]:leading-[1.4rem] max-[370px]:text-[1.1rem] max-[330px]:text-[1.0rem] max-[370px]:leading-[1.2rem]"
                  >
                    {item.title}
                  </h2>
                  <div 
                    style={{boxShadow: `0px 0px 20px 0px ${themeColor? themeColor : "#6e6e6e"} `}}
                    className="flex items-center gap-4  p-3 rounded-full w-fit max-[450px]:p-1.2  max-[450px]:gap-2 max-[400px]:p-[7px]">
                    <span className="rounded-full w-fit h-fit p-1 border border-black bg-zinc-800 text-white cursor-pointer">
                      <GoArrowUpRight
                        className="text-2xl  max-[450px]:text-xl  max-[400px]:text-lg
                "
                      />
                    </span>
                    <span className="max-[400px]:text-[0.8rem]">
                      Learn more
                      {/* </Link> */}
                    </span>
                  </div>
                </main>

                <main className="my-auto">
                  <img
                    className="max-[600px]:w-[9rem] max-[400px]:w-[7rem] max-[370px]:w-[6rem] max-[330px]:w-[5rem]"
                    src={item.image}
                    alt=""
                  />
                </main>
              </div>
            </ZoomInSection>
          );
        })}
      </section>

      <ZoomInSection key="section3">
        <section className="w-full px-[10%] my-20 relative max-[550px]:px-[5%]">
          <div className="bg-[#e8e8e8] rounded-[35px] p-10 gap-5 flex w-full min-h-[20rem] max-[700px]:flex-col-reverse max-[400px]:p-5">
            <main className="w-1/2 flex justify-between flex-col gap-5 max-[700px]:w-full">
              <h1 className="text-4xl font-semibold max-[900px]:text-3xl">
                Let’s make things happen
              </h1>
              <p>
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <button className="rounded-xl py-4 px-5 border border-black w-fit bg-black text-white hover:bg-transparent hover:text-black ease-in-out duration-500">
                Get your free proposal
              </button>
            </main>
            <div className="absolute  max-[1150px]:right-[-50px] max-[1000px]:right-[-100px] max-[700px]:static max-[700px]:translate-x-0 max-[700px]:translate-y-0 transformCenter">
              <img
                className="max-[900px]:w-[20rem] max-[800px]:w-[17rem]"
                src={Illustration}
                alt=""
              />
            </div>
          </div>
        </section>
      </ZoomInSection>

      <ZoomInSection key="section4">
        <section
          className="px-[10%] flex items-center my-10 gap-5 max-[1100px]:justify-center max-[450px]:px-[5%]
            max-[1100px]:flex-wrap "
        >
          <span
            style={{ fontWeight: 510, backgroundColor: themeColor }}
            className="primaryColor px-3 text-nowrap rounded-lg text-[40px] max-[800px]:text-[30px] max-[500px]:text-[25px] max-[450px]:text-[20px]"
          >
            Case Studies
          </span>
          <h2 className="textColor text-xl max-[450px]:text-[16px] max-[450px]:leading-[18px] text-wrap">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </h2>
        </section>
      </ZoomInSection>

      <ZoomInSection key="section5">
        <section className="px-[10%] my-20 max-[500px]:px-[5%]">
          <div className="flex rounded-[35px] p-10 bg-[#eaeaea] gap-5 max-[1000px]:flex-col max-[500px]:p-5">
            <main className="flex flex-col gap-3 justify-between">
              <p className="leading-7">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <span className="flex items-center gap-3">
                <span className="font-semibold ">Learn more</span>
                <span>
                  <GoArrowUpRight
                    className="text-2xl"
                    style={{ strokeWidth: "unset" }}
                  />
                </span>
              </span>
            </main>
            <div className="bg-black w-[5px] rounded-full max-[1000px]:h-[1px] max-[1000px]:w-full"></div>
            <main className="flex flex-col gap-3 justify-between">
              <p className="leading-7">
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </p>
              <span className="flex items-center gap-3">
                <span className="font-semibold ">Learn more</span>
                <span>
                  <GoArrowUpRight
                    className="text-2xl"
                    style={{ strokeWidth: "unset" }}
                  />
                </span>
              </span>
            </main>
            <div className="bg-black w-[5px] rounded-full max-[1000px]:h-[1px] max-[1000px]:w-full"></div>
            <main className="flex flex-col gap-3 justify-between">
              <p className="leading-7">
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </p>
              <span className="flex items-center gap-3">
                <span className="font-semibold ">Learn more</span>
                <span>
                  <GoArrowUpRight
                    className="text-2xl"
                    style={{ strokeWidth: "unset" }}
                  />
                </span>
              </span>
            </main>
          </div>
        </section>
      </ZoomInSection>

      <ZoomInSection key="section6">
        <section
          className="px-[10%] flex items-center my-10 gap-5 max-[1100px]:justify-center max-[450px]:px-[5%]
            max-[1100px]:flex-wrap "
        >
          <span
            style={{ fontWeight: 510, backgroundColor: themeColor }}
            className="primaryColor px-3 text-nowrap rounded-lg text-[40px] max-[800px]:text-[30px] max-[500px]:text-[25px] max-[450px]:text-[20px]"
          >
            Testimonials
          </span>
          <h2 className="textColor text-xl max-[450px]:text-[16px] max-[450px]:leading-[18px] text-wrap">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </h2>
        </section>
      </ZoomInSection>

      <ZoomInSection key="section7">
        <section className="px-[10%] my-20 max-[550px]:px-[5%]">
          <main className="w-full p-10 bg-black text-white rounded-[35px] max-[550px]:p-5">
            <div className="p-10 rounded-[35px] border border-green-600  max-[550px]:p-5">
              <h1 className="mb-3">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </h1>
              <h2 className="text-[#0eff2a]">John Smith</h2>
              <h3>Marketing Director at XYZ Corp</h3>
            </div>
          </main>
        </section>
      </ZoomInSection>

      <ZoomInSection key="section8">
        <section
          className="px-[10%] flex items-center my-10 gap-5 max-[1100px]:justify-center max-[450px]:px-[5%]
            max-[1100px]:flex-wrap "
        >
          <span
            style={{ fontWeight: 510, backgroundColor: themeColor }}
            className="primaryColor px-3 text-nowrap rounded-lg text-[40px] max-[800px]:text-[30px] max-[500px]:text-[25px] max-[450px]:text-[20px]"
          >
            Contact
          </span>
          <h2 className="textColor text-xl max-[450px]:text-[16px] max-[450px]:leading-[18px] text-wrap">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </h2>
        </section>
      </ZoomInSection>

      <ZoomInSection key="section9">
        <section className="px-[10%] max-[550px]:px-[5%] text-black my-20">
          <div className="rounded-[35px] p-10 bg-white flex justify-between relative overflow-hidden max-[500px]:p-5">
            <main className="w-[60%] flex flex-col gap-5 max-[1150px]:w-[80%] max-[500px]:w-[100%]">
              <div className="w-full flex gap-10 flex-wrap">
                <span className="flex gap-2">
                  <input type="checkbox" name="Hello" id="sayHi" />
                  <label htmlFor="sayHi">Say Hi</label>
                </span>
                <span className="flex gap-2">
                  <input type="checkbox" name="Hello" id="quote" />
                  <label htmlFor="quote">Get a Quote</label>
                </span>
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  className="border border-black rounded-xl p-2 w-full"
                  type="text"
                  placeholder="name"
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="border border-black rounded-xl p-2 w-full"
                  type="text"
                  placeholder="email"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="feedback">Message</label>
                <textarea
                  className="border border-black rounded-xl p-2 w-full"
                  id="feedback"
                  name="feedback"
                  rows="10"
                  cols="50"
                  placeholder="Write your massage here..."
                ></textarea>
              </div>
              <div className="w-full">
                <button className="py-5 px-5 w-full rounded-2xl bg-black border border-black text-white hover:bg-white hover:text-black ease-out duration-500">
                  Send Massage
                </button>
              </div>
            </main>
            <main className="w-[23rem] absolute top-[10px] right-0 max-[1150px]:left-[80%] max-[500px]:hidden">
              <img src={contact} alt="" />
            </main>
          </div>
        </section>
      </ZoomInSection>
    </>
  );
}

export default Services;
