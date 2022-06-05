import React, { useEffect, useState } from 'react'
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,

} from "react-icons/md"

let count = 0;
export default function Carousel() {
  const featuredProducts = [
    "./images/banner-hero-1.png",
    "./images/banner-hero-2.png",
    "./images/banner-hero-3.png",
  ]

  const [slide, setSlide] = useState(0)
  useEffect(() => {
    // startSlider()
  }, [])

  // const startSlider = () => {
  //   setInterval(() => {
  //     nextClick()
  //   }, 3000);
  // }

  function nextClick() {
    count = (count + 1) % featuredProducts.length;
    setSlide(count);
  }

  const prevClick = () => {
    count = (slide + featuredProducts.length - 1) % featuredProducts.length;
    setSlide(count)
  }

  return (
      <div className="w-[95%] md:h-64 xl:w-[1100px] xl:h-80 mx-auto relative rounded-lg h-36 overflow-hidden">
        <div className='item-center '>
          <button className=''>
            <MdKeyboardArrowRight className='absolute right-2 top-16 md:top-1/2 md:w-12 md:h-12 z-10 w-8 h-8 bg-white rounded-full ' onClick={nextClick}/>
            <MdKeyboardArrowLeft className='absolute left-2 top-16 z-10 w-8 h-8 bg-white rounded-full md:top-1/2 md:w-12 md:h-12' onClick={prevClick}/>
          </button>
        </div>
        <img src={featuredProducts[slide]} alt="" className='absolute object-cover w-full h-full rounded-lg'/>
      </div>
  )
}
