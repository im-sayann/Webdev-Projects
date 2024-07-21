import React from "react";
import { TiTick } from "react-icons/ti";
import ZoomInSection from "../ZoomInSection";
import { useSelector } from "react-redux";

function Pricing() {

  const themeColor = useSelector(state => state.color)

  const data = [
    {
      pack: "Starter",
      description: "Best option for personal use & for your next project.",
      price: "$29",
      teamSize: "1 developer",
      premiumSupport: "6 months",
      freeUpdates: "6 months",
      itemKey: 1,
    },
    {
      pack: "Company",
      description: "Relevant for multiple users, extended & premium support.",
      price: "$99",
      teamSize: "10 developer",
      premiumSupport: "24 months",
      freeUpdates: "24 months",
      itemKey: 2,
    },
    {
      pack: "Enterprise",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: "$499",
      teamSize: "100+ developer",
      premiumSupport: "36 months",
      freeUpdates: "36 months",
      itemKey: 3,
    },
  ];


  return (
    <>
      <section className="px-[10%] my-20 text-white flex flex-col gap-5 items-center justify-center max-[500px]:px-[5%]">
        <h1 className="text-4xl text-center font-bold">
          Designed for business teams like yours
        </h1>
        <p className="text-xl text-center w-[70%] max-[500px]:w-full">
          Here at Positivus we focus on markets where technology, innovation,
          and capital can unlock long-term value and drive economic growth.
        </p>
      </section>

      <section
        style={{ gridGap: "3rem" }}
        className="px-[10%] max-[500px]:px-[5%] my-20 grid grid-cols-3 max-[1300px]:flex max-[1300px]:flex-col max-[1300px]:items-center"
      >
        {data.map((item) => {
          return (
            <ZoomInSection key={item.itemKey}>
              <div
                style={{boxShadow: `${themeColor? themeColor : "#32325d40"} 0px 50px 100px -20px, 
                ${themeColor? themeColor : "#d5d5d5"} 0px 30px 60px -30px, 
                #000000 0px -2px 6px 0px inset`}}

                className="bg-white text-black rounded-[35px] p-7 flex flex-col gap-10 max-w-[30rem] 
                max-[380px]:p-4 max-[380px]:rounded-3xl"
              >
                <h1 className="font-semibold text-4xl text-center ">
                  {item.pack}
                </h1>
                <p className="text-center">{item.description}</p>
                <div className="text-center">
                  <span className="font-bold text-4xl">{item.price}</span>
                  <span>/month</span>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center hover:text-green-700 hover:scale-[1.03] cursor-pointer duration-200">
                    <TiTick className="text-2xl" />
                    Individual configuration
                  </li>
                  <li className="flex items-center hover:text-green-700 hover:scale-[1.03] cursor-pointer duration-200">
                    <TiTick className="text-2xl" />
                    No setup, or hidden fees
                  </li>
                  <li className="flex items-center hover:text-green-700 hover:scale-[1.03] cursor-pointer duration-200 text-wrap flex-wrap">
                    <TiTick className="text-2xl" />
                    Team size: &nbsp;
                    <span className="font-semibold"> {item.teamSize}</span>
                  </li>
                  <li className="flex items-center hover:text-green-700 hover:scale-[1.03] cursor-pointer duration-200 text-wrap flex-wrap">
                    <TiTick className="text-2xl" />
                    Premium support: &nbsp;
                    <span className="font-semibold">
                      {" "}
                      {item.premiumSupport}
                    </span>
                  </li>
                  <li className="flex items-center hover:text-green-700 hover:scale-[1.03] cursor-pointer duration-200 text-wrap flex-wrap">
                    <TiTick className="text-2xl" />
                    Free updates: &nbsp;
                    <span className="font-semibold"> {item.freeUpdates}</span>
                  </li>
                </ul>
                <button

                  style={{backgroundColor: themeColor}}
                   className="priceBtn primaryColor rounded-xl p-3 w-full hover:bg-black hover:text-white ease-out duration-200 max-[380px]:mb-5 text-xl text-white
                   hover:scale-[1.03]">
                  Get started
                </button>
              </div>
            </ZoomInSection>
          );
        })}
      </section>
    </>
  );
}

export default Pricing;
