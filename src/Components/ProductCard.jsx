import React from 'react'
import {RiShoppingBasket2Line } from "react-icons/ri";

export default function ProductCard({item}) {
    const {image, title, desc, price} = item;
    
  return (
    <>
    <div className='w-44 h-64 md:h-80 md:w-72 rounded-lg shadow-md overflow-hidden'>
        <div className='relative w-full h-1/2 '>
            <img src={image} alt="" className='absolute object-cover w-full h-full'/>
        </div>
        <div className='px-1 relative w-full h-1/2'>
            <h1 className='font-semibold'>{title}</h1>
            <p className='text-sm text-slate-400'>{desc}</p>
            <div className='absolute bottom-2'>
                <p>{price}</p>
            </div>
                <RiShoppingBasket2Line className='absolute bottom-2 right-2 w-7 h-7'/>
        </div>
        </div>
    </>
  )
}
