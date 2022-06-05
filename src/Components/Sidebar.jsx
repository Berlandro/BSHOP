import React from 'react'
import { 
    RiCustomerService2Fill,
    RiPriceTagLine,
    RiShoppingBasketLine,
    RiFeedbackLine,
    RiRefund2Fill,
    RiPlaneFill,
    RiAppsLine,
    RiMore2Line,
    RiHistoryLine,
} from "react-icons/ri";

export default function Sidebar() {
  return (
    <>
    <div className=' text-whites select-none'>
                    <button className='px-10 py-2 border-2 hover:scale-95 transition duration-300 rounded-md'>Masuk</button>
                    <button className='px-10 py-2 border-2 hover:scale-95 transition duration-300 text-white rounded-md bg-main'>Daftar</button>
                </div>
                <div className='gap-2 space-y-4 mt-4'>
                <ul className="space-y-4">
                    <h1 className='font-bold text-lg'>Aktivitas Saya</h1>
                    <li className='tracking-wide flex item-center gap-1 hover:scale-95 transition duration-300'>
                        <RiHistoryLine className='w-5 h-5'/>
                        Riwayat Transaksi</li>
                    <li className='tracking-wide flex item-center gap-1 hover:scale-95 transition duration-300'>
                        <RiShoppingBasketLine className='w-5 h-5'/>
                        Keranjang
                        </li>
                    <li className='tracking-wide flex item-center gap-1 hover:scale-95 transition duration-300'>
                        <RiPriceTagLine className='w-5 h-5'/>
                        Voucher Belanja
                        </li>
                    <h1 className="font-bold text-lg">Semua Kategori</h1>
                    <li className='tracking-wide flex item-center gap-1 hover:scale-95 transition duration-300'>
                        <RiAppsLine className='w-5 h-5'/>
                        Kategori</li>
                    <li className='tracking-wide items-center flex gap-1 hover:scale-95 transition duration-300'>
                        <RiRefund2Fill className='w-5 h-5'/>
                        Top up & Tagihan</li>
                    <li className='tracking-wide flex item-center gap-1 hover:scale-95 transition duration-300'>
                        <RiPlaneFill className='w-5 h-5'/>
                        Travel</li>
                    <li className='tracking-wide flex item-center gap-1 hover:scale-95 transition duration-300'>
                        <RiMore2Line className='w-5 h-5'/>
                        Layanan lainnya</li>
                    <h1 className='font-bold text-lg'>Pusat Bantuan</h1>
                    <li className='tracking-wide flex item-center gap-1 hover:scale-95 transition duration-300'>
                        <RiFeedbackLine className='w-5 h-5'/>
                        Pesanan dikomplain
                        </li>
                    <li className='tracking-wide flex item-center  gap-1 hover:scale-95 transition duration-300'>
                    <RiCustomerService2Fill className='w-5 h-5'/>
                        Bantuan BSHOP
                    </li>
                </ul>
                </div>
    </>
  )
}
