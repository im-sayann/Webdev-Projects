import React from "react";
import "../../styles/global.css";
import { logo, github } from "../..";
import { useSelector } from "react-redux";

const Footer = () => {
  const themeColor = useSelector(state => state.color)

  return (
    <footer 
      style={{backgroundColor: themeColor}}
      className="textColor primaryColor body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center textColor">
          <img className="w-[2rem]" src={logo} alt="" />
        </a>
        <p className="text-sm textColor sm:ml-4 sm:pl-4 sm:border-l-2 textColor sm:py-2 sm:mt-0 mt-4">
          © 2024 No copyright —
          <a
            href="https://github.com/im-sayann"
            className="textColor ml-1 hover:border-b"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sayan
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-3 textColor twitter"
            href="https://github.com/im-sayann"
            target="_blank"
          >
            <img className="w-[1.4rem]" src={github} alt="" />
          </a>
          <a
            href="https://www.instagram.com/im_sayan22/"
            target="_blank"
            className="ml-3 textColor instagram
            "
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 textColor">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
