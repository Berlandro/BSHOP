import React, { createRef, useRef } from 'react'
import {
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
  
  } from "react-icons/md"
import { products_row_one } from '../Misc/FakeData'
import ProductCard from './ProductCard'
  


export default function DiscountProd() {
  

  const prevClick = () => {
    alert('okay')
  }
    
  return ( 
    <div className='mt-6 w-[95%] md:h-[500px] mx-auto h-96 relative md:container border'>
        <div className='flex relative'>
        <h1 className='font-bold pl-2 text-xl md:text-2xl md:pl-4'>Diskon Spesial 515</h1>
        <ul>
        <li className='text-sm md:text-lg absolute right-3 top-1 text-teal-500 '>Lihat Semua</li>
        </ul>
        </div>
            <MdKeyboardArrowRight className='absolute -right-1 top-36 w-10 h-10 rounded-full shadow-md bg-white z-10'/>
            <MdKeyboardArrowLeft className='absolute -left-1 top-36 w-10 h-10 bg-white z-10 shadow-md rounded-full ' onClick={prevClick}/>
    <div className='mx-auto flex  mt-6' >
     {products_row_one.map((product)=> {
       return <ProductCard item={product} key={product.id}/>
     })}
    </div>
    </div>
  ) 
}
