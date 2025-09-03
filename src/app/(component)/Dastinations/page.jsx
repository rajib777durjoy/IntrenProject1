'use client'
import { data } from "@/app/DummyData/page";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";

const Dastinations = () => {
    const [datas, setdata] = useState(data);
    console.log('data', datas)
    return (
        <div className='w-[90%] mx-auto min-h-screen mt-10'>
            <h1 className='text-[#5E6282] text-center text-2xl font-semibold font-poppins'>Top Selling</h1>
            <h2 className='text-center text-4xl lg:text-6xl font-bold font-volkhov py-5'>Top Destinations</h2>
            <div className="grid md:grid-cols-3 gap-4  mt-10 text-[#5E6282] relative ">
                {
                    datas.map((item, index) => <div key={index} className="relative  ">
                        <img src={item?.image} alt="" className="w-[100%] h-[400px]" />
                        <div className="w-[80%] bg-white mx-auto flex items-center justify-between absolute bottom-10 left-0 right-0 px-4">
                            <div className="flex items-center bg-white">
                                <li className="list-none mx-2">{item?.destination}</li>
                                <li className="list-none ">{item?.country}</li>
                            </div>
                            <div className="">{item?.price}</div>
                        </div>
                        <div className="flex items-center w-[80%] mx-auto px-5 ">
                            <IoIosSend className="text-2xl mx-3" />{item?.duration}
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Dastinations;