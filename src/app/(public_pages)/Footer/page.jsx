import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='w-[100%] min-h-[400px] bg-white shadow-md border-2 py-10 '>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 w-[90%] mx-auto pt-4'>
                <div>
                    <img src="/Travello.png" alt="" />
                    <h2 className='text-xl mt-3 font-poppins font-medium text-[#5E6282]'>
                        Book your trip in minute, get full
                        Control for much longer.
                    </h2>
                </div>
                <div>
                    <h1 className='text-black font-bold text-2xl py-2'>Company</h1>
                    <li className='text-[#5E6282] list-none'>About</li>
                    <li className='text-[#5E6282] list-none my-2'>Careers</li>
                    <li className='text-[#5E6282] list-none'>Mobile</li>

                </div>
                <div>
                    <h1 className='text-black font-bold text-2xl py-2'>Contact</h1>
                    <li className='text-[#5E6282] list-none'>Help/FAQ</li>
                    <li className='text-[#5E6282] list-none my-2'>Press</li>
                    <li className='text-[#5E6282] list-none'>Affilates</li>

                </div>
                <div>
                    <h1 className='text-black font-bold text-2xl py-2'>More</h1>
                    <li className='text-[#5E6282] list-none'>Airline</li>
                    <li className='text-[#5E6282] list-none my-2'>Airlinefees</li>
                    <li className='text-[#5E6282] list-none'>Low fare tips</li>
                </div>
                <div className='text-black'>
                    <div className='flex items-center gap-5'>
                        <li className='text-black list-none'><FaFacebook className='text-2xl'/></li>
                        <li className='text-black list-none'><FaInstagramSquare className='text-2xl'/></li>
                        <li className='text-black list-none'><FaTwitter className='text-2xl'/></li>
                    </div>
                    <h2 className='text-2xl text-[#5E6282] mt-5 lg:mt-10'>Discover Your App</h2>
                    <div className='flex items-center gap-4 py-2'>
                       <img src="/GooglePlay.png" alt="" className='text-black w-[120px] h-[40px]' />
                       <img src="/PlayStore.png" alt=""  className='text-black w-[120px] h-[40px]'/>
                    </div>
                </div>
            </div>
              <h2 className='text-[#5E6282] text-xl text-center w-[90%] mx-auto md:mt-10 lg:mt-20'>All rights durjoy2001chando@gmail.com 2025</h2>
        </div>
    );
};

export default Footer;