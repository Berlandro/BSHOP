import React, { useState } from 'react'
import { 
    RiShoppingCartLine, 
    RiSearchLine, 
    RiMenu3Fill, 
    RiChat1Line,
    RiNotification2Line,
} from "react-icons/ri";
import Sidebar from './Sidebar';

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    
  return (
    <div className='w-full h-[84px] shadow-lg sticky top-0 z-20 bg-white font-urban'>
        
        {/* Navbar */}
        <div className='px-1 py-2 flex gap-2 md:h-7 md:pt-7 md:flex md:justify-between items-center xl:container xl:mx-auto'>
            <div className='ml-2'>
                <h1 className='font-bold text-2xl md:text-4xl md:mt-3'>BSHOP</h1>
            </div>
            <div className='pl-2 py-1 w-80 md:w-80 md:h-12 rounded-md border-2 mx-2 flex md:-ml-4 md:mt-3 relative'>
                <input type='search' placeholder='Cari handphone' className='w-36 md:w-44 focus:outline-none'>
                </input>
                <RiSearchLine className='w-6 right-4 md:mt-1 absolute h-6 bg-transparent'/>
            </div>
            <div className='flex gap-1 tracking-wide text-sm text-slate-500 absolute md:left-32 md:ml-1 md:bottom-1 bottom-2 px-2 '>
                <p>Iphone 12 Pro Max</p>
                <p>Laptop</p>
                <p>Voucher</p>
                <p>Elektronik</p>
            </div>
            <div className='md:flex gap-4 -ml-4 hidden'>
                <div className='pt-2 flex gap-2'>
                <RiShoppingCartLine className='w-8 h-6 md:w-8 md:h-8 md:mt-3'/>
                <RiChat1Line className='md:w-8 md:h-8 md:mt-3'/>
                <RiNotification2Line className='md:w-8 md:h-8 md:mt-3'/>
                </div>
                <div className=' text-whites select-none gap-1 -mr-6 flex'>
                    <button className='px-4 py-2 md:px-6 md:py-3 md:text-lg md:mt-3 border-2 hover:scale-95 transition duration-300 rounded-md '>Masuk</button>
                    <button className='px-4 py-2 md:px-6 md:py-3 md:text-lg md:mt-3 border-2 hover:scale-95 transition duration-300 text-white rounded-md bg-main'>Daftar</button>
                </div>
            </div>
 
            <div className='flex gap-2'>
            <RiShoppingCartLine className='w-8 h-6 md:w-7 md:hidden md:h-7 '/>
                <RiMenu3Fill className='w-8 md:hidden h-6 hover:scale-95 transition duration-300 ease-in-out' onClick={()=> setShowSidebar(!showSidebar)}/>
            </div>
        </div>
        {/* Navbar End */}


        {/* Sidebar */}
            <div className={(showSidebar ? 'translate-x-0 '  : '-translate-x-full ' )  + 'fixed transition ease-in-out duration-300 bottom-0 top-14 w-72 px-2 shadow-md bg-white h-screen pt-2 md:hidden select-none'}>
                <Sidebar/>
            </div>
        {/* Sidebar End */}
    </div>
  )
}
