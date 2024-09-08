import React, { useState } from "react";
import {introVideo, minecraftName} from '../assets/index'

function BGVideo() {
  return (
    <section className="md:h-screen h-[100vh] w-full relative bg-zinc-900">
      <video
        className="w-full h-full object-cover fixed top-0 left-0"
        loop
        autoPlay
        muted
        src={introVideo}
      ></video>
      <img
        loading="lazy"
        className="minecraft-text w-full block absolute bottom-0 z-10 pointer-events-none"
        src={minecraftName}
        alt=""
      />
    </section>
  );
}

export default BGVideo;
