import { useGSAP } from "@gsap/react";
import "./App.css";
import {
  Header,
  Footer,
  Home,
  About,
  Services,
  Background,
  SwipeCards,
} from "./components/index";
import gsap from "gsap";
import React, { useRef } from "react";
import String from "./components/String";

function App() {
  const tl1 = gsap.timeline();

  // useGSAP(() => {
  //   const mainWrapper = document.querySelector("#mainWrapper");
  //   mainWrapper.addEventListener("mousemove", (dets) => {
  //     gsap.to(".cursor", { x: dets.x + -10, y: dets.y + -10, ease: "slow(0.7,0.7,false)" });
  //   });
  // });

  return (
    <>
      {/* <div className="cursor"></div> */}
      <div
        id="mainWrapper"
        className="px-[15%] max-[1600px]:px-[5%] max-[1000px]:px-[4%]"
      >
        <Header tl1={tl1} />
        <Home tl1={tl1} />
        <SwipeCards />
        <About />
        <Services />
        <String />
        <Background />
      </div>
    </>
  );
}

export default App;
