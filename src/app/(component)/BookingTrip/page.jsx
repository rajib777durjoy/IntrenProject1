import React from 'react';
import { CiHeart } from "react-icons/ci";
const BookingTrip = () => {
    return (
        <div className='w-[90%] mx-auto  min-h-screen py-10'>
            <h1 className='text-[#5E6282] text-2xl font-poppins font-semibold'>Easy and Fast</h1>
            <div className='grid lg:grid-cols-2 gap-10 my-4'>
                <div className='rounded-xl shadow-md shadow-[#5E6282] p-4'>
                    <h2 className='text-[#14183E] w-[100%] hidden lg:block font-bold font-volkhov text-4xl lg:text-6xl py-5'>Book your next trip  in 3 easy steps</h2>
                    <h2 className='text-[#14183E] lg:hidden font-bold font-volkhov text-4xl lg:text-6xl py-5'>Book your next trip in 3 easy steps</h2>
                    <div className='flex items-center gap-2'>
                        <img src="/trip_1.png" alt="" />
                        <div>
                            <h3 className='text-[#5E6282] text-xl font-poppins font-bold '>Choose Destination</h3>
                            <p className='text-[#5E6282] text-xl font-poppins font-normal'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='flex items-center my-5 gap-2'>
                        <img src="/trip2.png" alt="" />
                        <div>
                            <h3 className='text-[#5E6282] text-xl font-poppins font-bold '>Make Payment</h3>
                            <p className='text-[#5E6282] text-xl font-poppins font-normal'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="/trip3.png" alt="" />
                        <div>
                            <h3 className='text-[#5E6282] text-xl font-poppins font-bold '>Reach Airport on Selected Date</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                </div>
                <div className=' rounded-xl shadow-md shadow-[#5E6282]'>

                    <div className='rounded-md h-[250px]'>
                        <img src="/RectangleTrip.png" alt="" className='w-[80%] mx-auto my-2 ' />
                    </div>
                    <h3 className='w-[80%] mx-auto'>Trip To Greece</h3>
                    <div className='w-[80%] mx-auto '>
                        <h3>14-29 June by Robbin joseph</h3>
                        <div className='flex items-center gap-4'>
                            <img src="/LEAF.png" alt="" className='text-[#84829A]' />
                            <img src="/map.png" alt="" className='text-[#84829A]' />
                            <img src="/send.png" alt="" className='text-[#84829A]' />
                        </div>
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center '>
                                <img src="/building.png" alt="" />
                                <h4>24 people going</h4>
                            </div>
                            <CiHeart className='text-2xl' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingTrip;