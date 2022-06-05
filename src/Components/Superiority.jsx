import React from 'react'
import { 
  RiAwardLine, 
  RiCustomerService2Line,
  RiEBike2Line,
  RiFlightTakeoffFill,
  RiCoupon2Line,
  RiAppsLine,
  RiPriceTagLine,
  RiGamepadLine,
  RiHomeHeartLine, 
  RiRoadMapFill,
  RiCoinsFill,
} from "react-icons/ri";

export default function Superiority() {
  return (
    <>
    <div className='mt-4 px-2 py-2 border-t-2 flex gap-1 justify-center shadow-md rounded-lg  flex-wrap h-42 w-[95%] md:container mx-auto'>
      <div className=' w-16 h-15 md:w-20 h-18 hover:scale-95 transition duration-300'>
        <RiAppsLine className='bg-white md:w-10 md:h-10  mx-auto rounded-full w-8 h-8 p-1' />
        <h1 className='text-sm md:text-lg text-center mt-1'>Kategori</h1>
      </div>
      <div className=' w-16 h-15 md:w-20 h-18'>
        <RiCoupon2Line className='bg-white  mx-auto rounded-full w-8 h-8 md:w-10 md:h-10 p-1'/>
        <h1 className='text-sm text-center md:text-lg mt-1'>Voucher</h1>
      </div>
      <div className=' w-16 h-15 md:w-20 h-18'>
        <RiEBike2Line className='bg-white  mx-auto rounded-full w-8 h-8 md:w-10 md:h-10 p-1'/>
        <h1 className='text-sm text-center md:text-lg mt-1'>BFood</h1>
      </div>
      <div className=' w-16 h-15 md:w-20 h-18'>
        <RiFlightTakeoffFill className='bg-white  mx-auto rounded-full w-8 h-8 md:w-10 md:h-10 p-1'/>
        <h1 className='text-sm text-center md:text-lg mt-1'>Travel</h1>
      </div>
      <div className=' w-16 h-15 md:w-20 h-18'>
        <RiCoinsFill className='bg-white  mx-auto rounded-full w-8 h-8 md:w-10 md:h-10 p-1'/>
        <h1 className='text-sm text-center md:text-lg mt-1'>BPay</h1>
      </div>
      <div className=' w-16 h-15 md:w-20 h-18'>
        <RiRoadMapFill className='bg-white  mx-auto rounded-full w-8 h-8 md:w-10 md:h-10 p-1'/>
        <h1 className='text-sm text-center md:text-lg mt-1'>Di Sekitar</h1>
      </div>
      <div className=' w-16 h-15 md:w-20 h-18'>
        <RiHomeHeartLine className='bg-white  mx-auto rounded-full w-8 h-8 md:w-10 md:h-10 p-1'/>
        <h1 className='text-sm text-center md:text-lg mt-1'>Toko Favorit</h1>
      </div>
      <div className=' w-16 h-15 md:w-20 h-18'>
        <RiPriceTagLine className='bg-white  mx-auto rounded-full w-8 h-8 md:w-10 md:h-10 p-1'/>
        <h1 className='text-sm text-center md:text-lg mt-1'>Diskon 50%</h1>
      </div>
      <div className=' w-16 h-15 md:w-20 h-18'>
        <RiGamepadLine className='bg-white  mx-auto rounded-full w-8 h-8 md:w-10 md:h-10 p-1'/>
        <h1 className='text-sm text-center md:text-lg mt-1'>Top Up Game</h1>
      </div>
    </div>
    </>
  )
}
