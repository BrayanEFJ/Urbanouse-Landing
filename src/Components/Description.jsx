import React from 'react';
import { CircleArrowUp } from 'lucide-react';
import HouseDescription from '../assets/house-description.webp';
import SwimmingPool from '../assets/swimmingpool-expand.webp';
import Office from '../assets/office-expand.webp';

const Description = () => {
    return (
        <div className='mt-28 flex items-center justify-center px-6'>
            <div className="w-full max-w-[1500px] flex flex-col space-y-5">
                <div className="flex flex-col lg:flex-row w-full xl:justify-between space-y-5 xl:space-y-0 items-center mb-8">
                    <div className="text-5xl font-semibold max-w-[500px] text-center xl:text-left">
                        Your Dream Home,
                        Our Expertise
                    </div>
                    <div className="max-w-[500px] text-lg text-black/60">
                        At Urbanouse, we are committed to helping individuals and families find their perfect homes and smart investment properties.
                        Our approach blends personalized service, expert insights, and a dedication to excellence, ensuring your real estate journey is seamless,
                        rewarding, and tailored to your unique needs.
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-5">
                    <div className='relative col-span-1 sm:col-span-2 xl:col-span-6'>
                        <img 
                            src={HouseDescription} 
                            alt="" 
                            className='w-full h-96 object-cover rounded-tr-[70px] rounded-bl-[70px] brightness-75'
                        />
                        <span className='absolute bottom-16 ml-10 text-xl drop-shadow-2xl text-white'>
                            Family House
                        </span>
                        <span className='absolute bottom-10 ml-10 drop-shadow-2xl text-white'>
                            487 Units
                        </span>
                    </div>

                    <div className='col-span-1 xl:col-span-2'>
                        <img 
                            src={SwimmingPool} 
                            alt="" 
                            className='w-full h-96 object-cover rounded-tr-[70px] rounded-bl-[70px] transition-all ease-in-out'
                        />
                    </div>
                    <div className='col-span-1 xl:col-span-2'>
                        <img 
                            src={Office} 
                            alt="" 
                            className='w-full h-96 object-cover rounded-tr-[70px] rounded-bl-[70px] transition-all ease-linear'
                        />
                    </div>

                    <div className='col-span-1 sm:col-span-2 xl:col-span-2 flex flex-row xl:flex-col justify-center items-center gap-4'>
                        <CircleArrowUp strokeWidth={0.5} size={90} className='rotate-45' />
                        <span className="font-bold">More proyects</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;