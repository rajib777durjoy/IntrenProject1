'use client'
import Image from 'next/image';


const Navbar = () => {
    const link = <>
        <li className='text-black list-none font-medium font-sans hover:text-amber-600 mx-4'>Desitnations</li>
        <li className='text-black list-none font-medium font-sans hover:text-amber-600 mx-4'>Hotels</li>
        <li className='text-black list-none font-medium font-sans hover:text-amber-600 mx-4'>Flights</li>
        <li className='text-black list-none font-medium font-sans hover:text-amber-600 mx-4'>Bookings</li>
        <li className='text-black list-none  hover:text-amber-600 mx-4'>Login</li>
        <li className='text-black list-none hover:text-amber-600  mx-4 '>SignUp</li>
        <select defaultValue="EN" className="text-black hover:text-amber-600 mx-4">
            <option>EN</option>
            <option>BN</option>
            <option>HI</option>
            <option>AR</option>
        </select>
    </>
    return (<>
        <div className="navbar w-[90%] mx-auto shadow-md rounded-md ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden text-2xl text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            link
                        }
                    </ul>
                </div>
               <Image src={'/Travello.png'} alt='' width={100} height={40} className=' ' />
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {link}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
        {/* <div className='flex justify-between items-center gap-4'>
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
            </div> */}

    </>
    );
};

export default Navbar;