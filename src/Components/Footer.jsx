import React from 'react';
import LogoWhite from '../assets/logowhite.svg'
import { ArrowUpRight } from 'lucide-react'

const FooterSection = () => {
    return (
        <footer
            className="bg-[url('/src/assets/house-description-big.webp')] relative w-full h-[40rem] flex flex-col justify-between bg-cover bg-center">
            <div className="relative flex flex-col items-center justify-center gap-5 h-full mx-4">
                <div className='max-w-[800px] w-full'>
                    <h1 className="drop-shadow-2xl font-semibold text-xl md:text-5xl text-center text-white whitespace-pre-line">
                        Ready To Find Your Dream Home With Urbanouse?
                    </h1>
                </div>
                <div className='max-w-[650px] w-full'>
                    <p className="drop-shadow-2xl text-base md:text-lg text-center whitespace-pre-line text-white">
                        Join thousands of happy homeowners who found their perfect residence with us. Let's make your property journey smooth and successful.
                    </p>
                </div>


                <button className="mt-5 flex px-5 py-3 items-center border border-white rounded-3xl gap-2 font-medium text-white backdrop-blur-md bg-white/20">
                    Let's work together
                    <ArrowUpRight />
                </button>
            </div>

            <div className='w-full flex justify-center '>
                <div className="relative flex lg:flex-row flex-col w-full max-w-[1500px] md:justify-between gap-4 items-center py-4 px-4 ">
                    <div className='flex space-x-1'>
                        <img src={LogoWhite} alt="" className='h-8 w-8' />
                        <strong className="text-2xl font-bold text-white ">Urbanouse</strong>
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-9 gap-3 items-center text-white/60 text-base">
                        <a href="/" className="text-white">Home</a>
                        <a href="/about" className="hover:text-white">About Us</a>
                        <a href="/agents" className="hover:text-white">Agents</a>
                        <a href="/collection" className="hover:text-white">Collection</a>
                        <a href="/building" className="hover:text-white">Building</a>
                        <a href="/services" className="hover:text-white">Services</a>
                    </div>
                    <span className="text-base text-white/60">
                        ©2024 Urbanouse. All rights reserved
                    </span>
                </div>
            </div>
            {/* <div className='w-full flex '>
                <span className="text-sm text-white/30 text-end mx-auto">
                    The original design of this page is found as urbanuse dribble on google
                </span>
            </div> */}

        </footer>
    );
};

export default FooterSection;
