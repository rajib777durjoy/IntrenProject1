
import React from 'react';
import Image from "next/image";
import { VscTriangleRight } from "react-icons/vsc";
const Banner = () => {
    return (
        <div className={'min-h-screen bg-[#FFFFFF] text-black '} style={{
            backgroundImage: 'url("/Decore.png")', backgroundPosition: 'top right', backgroundSize: '400px auto',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="w-[90%] mx-auto lg:flex ">
                {/* title */}
                <div className='w-[100%] lg:w-[40%] text-black mt-32'>
                    <h2 className='text-[#DF6951] font-poppins font-bold my-4'>Best Destinations around the world</h2>
                    <h2 className='text-4xl hidden lg:inline lg:text-7xl  font-volkhov font-bold tracking-[-4%] py-4'>Travel, enjoy <br></br>
                        and live a new <br></br>
                        and full life</h2>
                    
                    <h2 className='text-4xl lg:hidden lg:text-7xl  font-volkhov font-bold tracking-[-4%] py-4'>Travel, enjoy <br></br>
                        and live a new 
                        and full life</h2>
                    
                    <p className='font-poppins font-medium text-[#5E6282] my-5'>
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                    </p>

                    {/* button */}
                    <div className='flex gap-10 mt-10'>
                        <button className='btn p-2 bg-[#F1A501] rounded-lg outline-0 border-0'>
                            Find out more
                        </button>
                        
                        <button className='flex items-center text-[#686D77] '>
                           <div className='w-[40px] h-[40px] rounded-full flex items-center relative bg-[#DF6951] mx-4'><VscTriangleRight className='text-2xl absolute left-0 right-0 mx-auto text-[#FFFFFF]' /></div>  Play Demo
                        </button>
                    </div>
                </div>
                {/* image */}
                <div className="flex mt-7 lg:mt-0 relative h-screen w-[100%] lg:w-[60%] bg-contain md:bg-cover  "
                    style={{
                        backgroundImage: 'url("/TravellerImage.png")',
                        backgroundPosition: 'top right',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <img src={'/airplane.png'} alt="airplane" className='w-[100px] lg:w-[160px] h-[80px] absolute top-[5%] -left-[10%] md:-left-[0%] md:top-[15%] ' />
                </div>
            </div>
        </div>
    );
};

export default Banner;