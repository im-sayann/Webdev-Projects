import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import "../CustomUi.css";
import { logo } from "./index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import menu from "../assets/svgs/menu-01-stroke-rounded.svg";

function Header({ tl1 }) {
  const headerLogo = useRef();
  const logoName = useRef();
  const headerBtn2 = useRef();
  const menuIcon = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1600) {

        document.querySelector("#menuIcon").addEventListener("mousedown", () => {
          
            gsap.to("#menuIcon", {right: "60px", opacity: 1})});
        
      } else if (window.innerWidth > 1600){

        document.querySelector("#menuIcon").addEventListener("mousedown", () => {
            
            gsap.to("#menuIcon", {right: "-100px", opacity: 1,})});
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useGSAP(() => {
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
      const sidebarTl = gsap.timeline()
      sidebarTl
      .to("#sidebar", {right: 0, ease: "none"})
      .from(".li", {opacity: 0, stagger: .1,})

      sidebarTl.pause()

      document.querySelector("#menuIcon").addEventListener("mousedown", () => {
        sidebarTl.play()
      });

      document.querySelector("#menuIcon").addEventListener("mouseup", () => {
        sidebarTl.reverse()
        gsap.to("#menuIcon", {right: "0", duration: 1});
      });
    }
    sideBarAnimation()
  },  );

  return (
    <>
      <header className="flex py-[4rem] justify-between text-white items-center max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-5 relative">
        <div className="flex items-center gap-2">
          <img ref={headerLogo} src={logo} className="w-16 max-[620px]:w-12" />
          <span
            ref={logoName}
            className="headerFont text-[2rem] text-gradientBtn"
          >
            HYDRA
          </span>
          <img
            ref={menuIcon}
            id="menuIcon"
            className="w-10 absolute right-0 z-40"
            src={menu}
            alt=""
          />
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
