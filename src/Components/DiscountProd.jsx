import React from 'react'
import {
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
  
  } from "react-icons/md"
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css/navigation';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { products_row_one } from '../Misc/FakeData';
  import ProductCard from './ProductCard';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


export default function DiscountProd() {
    
  return ( 
    <div className='mt-6 w-[95%] md:h-[500px] mx-auto h-96 relative md:container border'>
        <div className='flex relative'>
        <h1 className='font-bold pl-2 text-xl md:text-2xl md:pl-4'>Diskon Spesial 515</h1>
        <ul>
        <li className='text-sm md:text-lg absolute right-3 top-1 text-teal-500 '>Lihat Semua</li>
        </ul>
        </div>
            {/* <MdKeyboardArrowRight className='absolute -right-1 top-36 w-10 h-10 rounded-full shadow-md bg-white z-10'/>
            <MdKeyboardArrowLeft className='absolute -left-1 top-36 w-10 h-10 bg-white z-10 shadow-md rounded-full '/> */}
    <div className=' mx-auto flex md:h-96  mt-6'>
    <Swiper
        className='h-72 md:h-96 '
        modules={[Navigation, Pagination ]}
      spaceBetween={0}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      {products_row_one.map((product) =>{
            return <SwiperSlide key={product.id} className='md:gap-2'>
              <ProductCard item={product} key={product.id}/>
            </SwiperSlide>
        })}
    </Swiper>
    </div>
    </div>
  ) 
}
