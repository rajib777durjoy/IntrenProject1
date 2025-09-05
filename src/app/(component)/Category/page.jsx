import React from 'react';

const Category = () => {
    return (
        <div className=' w-[90%] mx-auto  min-h-screen py-10'>
            {/* title */}
            <h1 className='text-[#5E6282] text-center text-2xl font-semibold font-poppins'>Category</h1>
            <h2 className='text-4xl lg:text-6xl text-[#14183E] font-bold font-volkhov  text-center py-5'>We Offer Best Services</h2>
            {/* card */}
            <div className='w-[100%] grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-5 md:mt-16 '>

                <div className=' rounded-xl px-4 shadow-md shadow-slate-400'>
                    <img src="/Icon1.png" alt="" className='w-[50%] h-[150px] mx-auto' />
                    <div className='w-[100%] mx-auto py-2'>
                        <h2 className='text-[#1E1D4C] font-semibold text-[26px]'>Calculated Weather </h2>
                        <p className='text-[#5E6282] font-medium text-md'>Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>

                </div>
                <div className=' rounded-xl px-4 shadow-md shadow-slate-400 '>
                    <img src="/airplane.png" alt="" className='w-[50%] h-[150px] mx-auto' />
                    <div className='w-[100%] mx-auto py-2'>
                        <h2 className='text-[#1E1D4C] font-semibold text-[26px]'>Best Flights </h2>
                        <p className='text-[#5E6282] font-medium text-md'>Engrossed listening. Park gate sell they west hard for the.</p>
                    </div>

                </div>

                <div className='  rounded-xl px-4 shadow-md shadow-slate-400'>
                    <img src="/Icon3.png" alt="" className='w-[50%] h-[150px] mx-auto' />
                    <div className='w-[100%] mx-auto py-2'>
                        <h2 className='text-[#1E1D4C] font-semibold text-[26px]'>Local Events </h2>
                        <p className='text-[#5E6282] font-medium text-md'>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                    </div>

                </div>
                <div className='  rounded-xl px-4 shadow-md shadow-slate-400'>
                    <img src="/Icon4.png" alt="" className='w-[50%] h-[150px] mx-auto' />
                    <div className='w-[100%] mx-auto py-2'>
                        <h2 className='text-[#1E1D4C] font-semibold text-[26px]'>Customization </h2>
                        <p className='text-[#5E6282] font-medium text-md'>We deliver outsourced aviation services formilitary customers</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Category;