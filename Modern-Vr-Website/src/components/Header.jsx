import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import "../CustomUi.css";
import { logo } from "./index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import menu from "../assets/svgs/menu-01-stroke-rounded.svg";

function Header({ tl1 }) {
  const headerLogo = useRef();
  const logoName = useRef();
  const headerBtn2 = useRef();
  const menuIcon = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1600) {
        document
          .querySelector("#menuIcon")
          .addEventListener("mousedown", () => {
            gsap.to("#menuIcon", { right: "60px", opacity: 1 });
          });
      } else if (window.innerWidth > 1600) {
        document
          .querySelector("#menuIcon")
          .addEventListener("mousedown", () => {
            gsap.to("#menuIcon", { right: "-100px", opacity: 1 });
          });
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {

    function headerLogoHover() {
      document.querySelector(".headerLogo").addEventListener("mouseenter", () => {
        gsap.to(".headerLogo", {rotate: 360, duration: 2})
        
      })
      document.querySelector(".headerLogo").addEventListener("mouseleave", () => {
        gsap.to(".headerLogo", {rotate: 0, duration: 10})
        
      })
    }
    headerLogoHover()

    function headerAnimation() {
      tl1.from(headerLogo.current, {
        scale: 5,
        duration: 3,
        rotate: 360,
        x: "40vw",
        y: "200px",
      });
      tl1.from(logoName.current, {
        y: -30,
        opacity: 0,
        duration: 0.2,
      });

      tl1.from(".contactusBtn", {
        y: -30,
        opacity: 0,
        duration: 0.2,
      });
      tl1.from(headerBtn2.current, {
        y: -30,
        opacity: 0,
        duration: 0.2,
      });
      tl1.from(menuIcon.current, {
        y: -30,
        opacity: 0,
        duration: 0.2,
      });
    }
    headerAnimation()

    // GSAP hover animation
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
        });
      });
      button.addEventListener("mousedown", () => {
        gsap.to(button, {
          scale: 0.8,
        });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
        });
      });
      button.addEventListener("mouseup", () => {
        gsap.to(button, {
          scale: 1,
        });
      });
    });

    // Sidebar In Out Animation
    function sideBarAnimation() {
      const sidebarTl = gsap.timeline();
      sidebarTl
        .to("#sidebar", { right: 0, ease: "none" })
        .from(".li", { opacity: 0, stagger: 0.1 });

      sidebarTl.pause();

      document.querySelector("#menuIcon").addEventListener("mousedown", () => {
        sidebarTl.play();

        function menuSvgIn() {
          // 1: Animate the first path
          let initialPath1 = "M4 19L20 5";
          const pathElement1 = document.getElementById("myPath1");

          gsap.to(pathElement1, {
            duration: .3, // Adjust the duration as needed
            attr: { d: initialPath1 },
          });

          // 2: Animate the second path
          let initialPath2 = "M4 5L20 19";
          const pathElement2 = document.getElementById("myPath2");

          gsap.to(pathElement2, {
            duration: .3, // Adjust the duration as needed
            attr: { d: initialPath2 },
          });

          // 3: Animate the third path (setting to an empty string)
          let invisiblePath = "M12 12L12 12";
          const pathElement3 = document.getElementById("invisiblePath");

          gsap.to(pathElement3, {
            duration: .3, // Adjust the duration as needed
            attr: { d: invisiblePath },
           
          });
        }
        menuSvgIn();
      });

      document.querySelector("#menuIcon").addEventListener("mouseup", () => {
        sidebarTl.reverse();
        gsap.to("#menuIcon", { right: "0", duration: 1 });

        function menuIconOut() {
          let initialPath = "M4 5L20 5";
          const pathElement = document.getElementById("myPath1");

          gsap.to(pathElement, {
            duration: .3, // Adjust the duration as needed
            attr: { d: initialPath },
          });

          // Second Path Animation
          let initialPath2 = "M4 19L20 19";
          const pathElement2 = document.getElementById("myPath2");

          gsap.to(pathElement2, {
            duration: .3, // Adjust the duration as needed
            attr: { d: initialPath2 },
          });

          // 3
          let invisiblePath = "M4 12L20 12";
          const pathElement3 = document.getElementById("invisiblePath");

          // Use GSAP to animate the 'd' attribute
          gsap.to(pathElement3, {
            duration: .3,
            attr: { d: invisiblePath },
          });
        }
        menuIconOut();
      });

    }
    sideBarAnimation();
  });

  return (
    <>
      <header className="flex py-[4rem] justify-between text-white items-center max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-5 relative">
        <div className="flex items-center gap-2">
          <img ref={headerLogo} src={logo} className="headerLogo w-16 max-[620px]:w-12" />
          <span
            ref={logoName}
            className="headerFont text-[2rem] text-gradientBtn"
          >
            HYDRA
          </span>

          <svg
            ref={menuIcon}
            id="menuIcon"
            className="w-10 absolute right-0 z-40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            color="#a989cc"
            fill="none"
          >
            <path
              id="myPath1"
              d="M4 5L20 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="invisiblePath"
              d="M4 12L20 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="myPath2"
              d="M4 19L20 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <ul
          id="sidebar"
          className="flex gap-3  font-bold flex-col fixed text-[2rem] top-0 z-10 h-full px-10 py-[65px] w-[30rem]"
        >
          <li className="li">ABOUT</li>
          <li className="li">SERVICES</li>
          <li className="li">TECHNOLOGIES</li>
          <li className="li">HOW TO</li>
        </ul>

        <div id="btnContainer" className="flex gap-3 min-[620px]:mr-10">
          <button className="contactusBtn">CONTACT</button>
          <button ref={headerBtn2} id="headerBtn2" className="btn-53">
            <div className="original text-gradientTextDark">join hydra</div>
            <div className="letters">
              <span>J</span>
              <span>O</span>
              <span>I</span>
              <span>N&nbsp;</span>
              <span>&nbsp; H</span>
              <span>Y</span>
              <span>D</span>
              <span>R</span>
              <span>A</span>
            </div>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
