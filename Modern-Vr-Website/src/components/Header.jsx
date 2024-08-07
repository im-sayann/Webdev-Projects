import React from "react";
import "../App.css";
import "../CustomUi.css";
import { logo } from "./index";

function Header() {
  return (
    <>
      <header className="flex py-[4rem] justify-between text-white items-center">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-16" />
          <span className="headerFont text-[2rem] text-gradientBtn">HYDRA</span>
        </div>

        <ul className="flex gap-3 text-[.9rem] font-bold">
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>TECHNOLOGIES</li>
          <li>HOW TO</li>
        </ul>

        <div className="flex gap-3">
          <button className="contactusBtn">CONTACT US</button>
          <button class="btn-53">
            <div class="original text-gradientTextDark">join hydra</div>
            <div class="letters">
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
