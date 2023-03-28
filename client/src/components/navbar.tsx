import React, {Fragment, useState} from 'react'
import {Link} from "react-router-dom";

function Navbar() {

  return (
    <div className={'navbar fixed font-lexend w-screen h-[64px] pl-24 pr-24 flex justify-between items-center bg-white drop-shadow-sm'}>
      <div className="flex items-center">
        <div className={'front-tab mr-10'}>
          <Link className={'nav-title text-xl font-bold font-samatic outline-0'} to={'/'}>PTERY</Link>
        </div>
        <div className={'back-tab'}>
          <Link className={'outline-0 p-1 pl-4 pr-2 font-[600] text-sm rounded-full'} to={'/'}>장르검색</Link>
          <Link className={'outline-0 p-1 pl-4 pr-2 font-[600] text-sm rounded-full'} to={'/'}>요일별 신작</Link>
          <Link className={'outline-0 p-1 pl-4 pr-2 font-[600] text-sm rounded-full'} to={'/'}>장르추천</Link>
        </div>
      </div>
      <div className="">
        <Link className={'outline-0 p-1 pl-4 pr-2 font-[600] text-sm rounded-full'} to={'/login'}>로그인</Link>
      </div>
    </div>
  )
}

export default Navbar