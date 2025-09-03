import React from 'react';
import { BsSendFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const Subscribe = () => {
    return (
        <div className='w-[90%] min-h-[400px] '>
            <div className='w-[100%] h-[70px] relative'>
                <div className='w-[60px] flex items-center rounded-full  h-[60px]  absolute right-0 my-4 bg-gradient-to-r from-[#747DEF] to-[#5E3BE1]'>
                    <BsSendFill className='text-white text-4xl mx-auto' />
                </div>
            </div>

            <h1 className='text-2xl lg:text-[40px] w-[100%] lg:w-[70%] text-center mx-auto '>Subscribe to get information, latest news and other
                interesting offers about Jadoo</h1>

            <div className='lg:w-[80%] mx-auto mt-5 py-5'>
                <form action="" className='lg:flex justify-center' >
                    <li className='w-[90%] mx-auto lg:w-[500px] flex border rounded-md list-none'>
                        <MdOutlineEmail className='text-4xl text-[#39425D]' /><input type="text" placeholder='Enter Your Email' className='w-[100%] h-[40px] border-0 outline-0 text-[#39425D]' />
                    </li>
                    <div className='w-[90%] lg:hidden mx-auto'>
                        <button className='btn w-[100%] rounded-md my-2 bg-gradient-to-r from-[#FF946D] to-[#FF7D68] border-0 outline-0'>Subscribe</button>
                    </div>

                    <button className='btn hidden lg:inline  rounded-md mx-2 bg-gradient-to-r from-[#FF946D] to-[#FF7D68] border-0 outline-0'>Subscribe</button>
                </form>
            </div>

        </div>
    );
};

export default Subscribe;