import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import vrpic2 from '../assets/images/vrpic2.png'
import "../App.css";

function About() {
  return (
    <>
      <main className='flex w-full my-[5rem] text-white'>
        <section className='flex items-center w-1/2 gap-3'>
            <div className='leading-10'>
                <h2 className='font-bold text-[2.5rem]'>INTRODUCTION</h2>
                <h2 className='text-[2.5rem]'>To Hydra VR</h2>
            </div>
            <span className='text-[5rem] font-thin '>
            <HiOutlineArrowLongRight />
            </span>
        </section>
        <section className='w-1/2'>
            <p className='text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, assumenda unde? Omnis similique facere dicta debitis modi voluptatem harum nihil quae ex quisquam ad temporibus reiciendis, architecto tempore, optio sapiente nesciunt ab vel dolorem mollitia voluptatum, eaque dolor natus atque! Tempore nostrum ex similique numquam odit commodi nulla corporis autem.
            </p>
        </section>
      </main>

      <main className='flex w-full my-[5rem] text-white items-center'>
        <section className='w-1/2'>
          <img className='vrpic2' src={vrpic2} alt="" />
        </section>
        <section className='flex flex-col gap-10 w-1/2'>
          <div className='leading-10'>
            <h1 className='font-bold text-[2.5rem]'>ABOUT</h1>
            <h1 className='text-[2.5rem]'>HYDRA VR</h1>
          </div>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse animi cupiditate praesentium nostrum tempore minus amet, nesciunt sapiente et magnam debitis qui laudantium ipsum consequatur quas, rem deleniti quam rerum a? Illum nemo excepturi saepe suscipit nostrum quae cumque dignissimos perferendis neque laboriosam rem, accusantium incidunt necessitatibus autem repudiandae.</p>
          <button class="btn-53 w-fit">
              <div class="original text-gradientTextDark">let's get in touch</div>
              <div class="letters">
                <span>l</span>
                <span>e</span>
                <span>t</span>
                <span>s</span>
                <span>&nbsp;g</span>
                <span>e</span>
                <span>t&nbsp;</span>
                <span>i</span>
                <span>n&nbsp;</span>
                <span>t</span>
                <span>o</span>
                <span>u</span>
                <span>c</span>
                <span>h</span>
              </div>
            </button>
        </section>                                                                              
      </main>
    </>
  )
}

export default About
