import { useGSAP } from '@gsap/react'
import './App.css'
import {Header, Footer, Home, About, Services, Background, SwipeCards} from './components/index'
import gsap from 'gsap'
import React from 'react'

function App() { 

  const tl1 = gsap.timeline();

  return (
    <div className='px-[15%] max-[1600px]:px-[5%] max-[1000px]:px-[4%]'>
      <Header tl1={tl1}/>
      <Home tl1={tl1}/>
      <SwipeCards/>
      <About />
      <Services />
      <Background/>
    </div>
  )
}

export default App
