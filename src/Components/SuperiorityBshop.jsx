import React from 'react';
import { 
    RiAwardLine, 
    RiCustomerService2Line,
    RiExchangeFundsLine,
    RiTruckLine,
  } from "react-icons/ri";

export default function SuperiorityBshop() {
  return (
    <div className='hidden md:flex gap-2 justify-center container mx-auto h-14  mt-4'>
        <div className='w-44 px-1 item-center py-3 justify-center h-full flex bg-brown gap-1 rounded-lg'>
            <div className='flex gap-1 text-white'>
            <RiAwardLine className='w-8 h-8'/>
            <h1 className='font-semibold text-lg'>Best Quality</h1>
            </div>
        </div>
        <div className='w-44 px-2 item-center py-3 justify-center h-full flex bg-brown gap-1 rounded-lg'>
            <div className='flex gap-1 text-white'>
            <RiTruckLine className='w-8 h-8'/>
            <h1 className='font-semibold text-lg'>Free Shipping</h1>
            </div>
        </div>
        <div className='w-44 px-2 item-center py-3 justify-center h-full flex bg-brown gap-1 rounded-lg'>
            <div className='flex gap-1 text-white'>
            <RiExchangeFundsLine className='w-8 h-8'/>
            <h1 className='font-semibold text-lg'>7 Days Return</h1>
            </div>
        </div>
        <div className='w-44 px-2 item-center py-3 justify-center h-full flex bg-brown gap-1 rounded-lg'>
            <div className='flex gap-1 text-white'>
            <RiCustomerService2Line className='w-8 h-8'/>
            <h1 className='font-semibold text-lg'>24/7 Service</h1>
            </div>
        </div>
    </div>
  )
}
