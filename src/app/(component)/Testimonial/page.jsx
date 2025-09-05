import React from 'react';

const Testimonial = () => {
    return (
        <div className='w-[90%] mx-auto min-h-[400px] grid lg:grid-cols-2 py-10 shadow-md shadow-gray-300 rounded-lg'>
            <div>
                <h1 className='text-[#5E6282] text-2xl font-poppins font-semibold'>Testimonials</h1>
                <h2 className='text-4xl lg:text-6xl text-[#14183E] font-bold mt-4'>What people say <br />
                    about Us.</h2>
            </div>
            <div>
                <img src="/durjoy.jpg" alt="" className='w-[50px] h-[50px] rounded-full' />
               
                <p className='text-[#5E6282] '>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                 <h2 className='text-[#5E6282] my-2'>Durjoy Chando</h2>
                 <h4 className='text-[#5E6282] my-2'>Bangladesh</h4>

                 <div>
                    <h1>Chris Thomas</h1>
                    <h4>CEO of Red Button</h4>
                 </div>
            </div>

        </div>
    );
};

export default Testimonial;