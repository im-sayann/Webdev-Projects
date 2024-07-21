import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/global.css";
import "./Header.css";
import { IoReorderThree } from "react-icons/io5";
import { logo } from "../../index.js";

function Header({ onAboutClick, onServicesClick }) {
  const [activeHeader, setActiveHeader] = useState(false);
  const ulRef = useRef(null);
  const iconWrapperRef = useRef(null);

  const handleToggle = () => {
    // This is brilliant code, toggles the class in ul
    setActiveHeader((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      ulRef.current &&
      !ulRef.current.contains(event.target) && // refers the ul
      !iconWrapperRef.current.contains(event.target) // refers the icon
    ) {
      setActiveHeader(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header 
      className={`w-full sticky top-0 z-[99999] bgColor textColor flex flex-wrap justify-between px-[10%] py-8 max-[800px]:gap-[10px] max-[500px]:px-[5%] max-[500px]:py-[1rem]`}>
        <NavLink
          to="/services"
          className="font-bold flex items-center justify-center gap-1"
        >
          <img
            className="w-[2.5rem] max-[500px]:w-[1.9rem]"
            src={logo}
            alt=""
          />
          <span className="text-2xl logoFont max-[500px]:text-xl">Unfold</span>
        </NavLink>

        <ul
          ref={ulRef}
          className={`${
            activeHeader ? "" : "transitionUl "
          } flex min-[500px]:gap-4 text-lg font-semibold headerSmall headerUl `}
        >
          <li>
            <NavLink
              to="/services"
              onClick={onServicesClick}
              className="responsiveLi headerLi ease-out duration-300"
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={onAboutClick}
              className="responsiveLi headerLi ease-out duration-300"
            >
              About us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pricing"
              className="responsiveLi headerLi ease-out duration-300"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="responsiveLi headerLi ease-out duration-300"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notes"
              className="responsiveLi headerLi ease-out duration-300"
            >
              Notes
            </NavLink>
          </li>
        </ul>
        <div
          ref={iconWrapperRef}
          className=" max-[500px]:block top-0 right-0 min-[500px]:hidden"
        >
          <IoReorderThree
            onClick={handleToggle}
            className={`${
              activeHeader ? "iconRotate" : "defaultRotate"
            } text-[2.7rem]`}
          />
        </div>

        <button className="border border-[#ffffff77] hover:bg-white hover:text-black py-3 px-5 rounded-xl max-[500px]:hidden">
          Request a quote
        </button>
      </header>

    </>
  );
}

export default Header;
