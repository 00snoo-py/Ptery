import React, {Fragment, useState} from 'react'
import Navbar from "../components/navbar";

import Wave from '../assets/imgs/wave.png'

function Main() {

  return (
    <Fragment>
      <Navbar />
      {/*<img className="absolute -ml-[70px] mt-8  oo w-[70vw] h-[90vh] -z-10 brightness" src={Wave} alt=""/>*/}
      <div className="wave"></div>
      <div className="wave2"></div>
      <div className="wave3"></div>
      <div className="header w-screen h-[70vh] mb-[1000px] font-noto w-screen flex justify-around items-center">
        <div className="front-side">
          <div className="font-[900] text-white text-[22.3px]">차세대 애니 추천 서비스</div>
          <div className="font-[700] text-white text-7xl font-samatic">PTERY</div>
        </div>

        <div className="back-side">

        </div>
      </div>
    </Fragment>
  )
}

export default Main