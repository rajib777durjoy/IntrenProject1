
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='w-[90%] mx-auto h-[60px] flex justify-between items-center  bg-transparent'>

            <Image src={'/Travello.png'} alt='' width={100} height={40} className=' ' />

            <div className='flex justify-between items-center gap-4'>
                <li className='text-black list-none font-medium font-sans mx-4'>Desitnations</li>
                <li className='text-black list-none font-medium font-sans mx-4'>Hotels</li>
                <li className='text-black list-none font-medium font-sans mx-4'>Flights</li>
                <li className='text-black list-none font-medium font-sans mx-4'>Bookings</li>
                <button className='text-black'>Login</button>
                <button className=' bg-transparent text-black border-2 px-2 rounded-md'>SignUp</button>
                <select defaultValue="EN" className="text-black">
                    <option >EN</option>
                    <option>BN</option>
                    <option>HI</option>
                    <option>AR</option>
                </select>
            </div>
        </div>
    );
};

export default Navbar;