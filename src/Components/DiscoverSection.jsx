import React from 'react';
import House1 from '../assets/product1.webp';
import House2 from '../assets/product2.webp';
import House3 from '../assets/product3.webp';
import House4 from '../assets/product4.webp';
import House5 from '../assets/product5.webp';
import House6 from '../assets/product6.webp';


const DiscoverSection = () => {
    return (
        <div className="mt-28 w-full flex justify-center items-center px-6">
            <div className="w-full max-w-[1500px] flex flex-col justify-center items-center">
                <div className="flex justify-center items-center flex-col text-center space-y-3">
                    <span className="text-5xl font-semibold">Discover Our Exclusive Listings</span>
                    <span className="max-w-[440px]">Explore a curated selection of top properties, handpicked to offer you the finest in real estate.</span>
                </div>
                
                <div className="mt-10 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <img src={House1} alt="" className="w-full h-96 object-cover rounded-bl-[40px] rounded-tr-[40px]" />
                            <span className="text-3xl font-semibold mt-4">$750,000</span>
                            <span className="text-xl mt-2">Golden Leaf Residence</span>
                            <span className="text-lg text-gray-500">3beds both 240ft</span>
                        </div>

                        <div className="flex flex-col">
                            <img src={House2} alt="" className="w-full h-96 object-cover rounded-bl-[40px] rounded-tr-[40px]" />
                            <span className="text-3xl font-semibold mt-4">$750,000</span>
                            <span className="text-xl mt-2">Golden Leaf Residence</span>
                            <span className="text-lg text-gray-500">3beds both 240ft</span>
                        </div>

                        <div className="flex flex-col">
                            <img src={House3} alt="" className="w-full h-96 object-cover rounded-bl-[40px] rounded-tr-[40px]" />
                            <span className="text-3xl font-semibold mt-4">$750,000</span>
                            <span className="text-xl mt-2">Golden Leaf Residence</span>
                            <span className="text-lg text-gray-500">3beds both 240ft</span>
                        </div>

                        <div className="flex flex-col">
                            <img src={House4} alt="" className="w-full h-96 object-cover rounded-bl-[40px] rounded-tr-[40px]" />
                            <span className="text-3xl font-semibold mt-4">$750,000</span>
                            <span className="text-xl mt-2">Golden Leaf Residence</span>
                            <span className="text-lg text-gray-500">3beds both 240ft</span>
                        </div>

                        <div className="flex flex-col">
                            <img src={House5} alt="" className="w-full h-96 object-cover rounded-bl-[40px] rounded-tr-[40px]" />
                            <span className="text-3xl font-semibold mt-4">$750,000</span>
                            <span className="text-xl mt-2">Golden Leaf Residence</span>
                            <span className="text-lg text-gray-500">3beds both 240ft</span>
                        </div>

                        <div className="flex flex-col">
                            <img src={House6} alt="" className="w-full h-96 object-cover rounded-bl-[40px] rounded-tr-[40px]" />
                            <span className="text-3xl font-semibold mt-4">$750,000</span>
                            <span className="text-xl mt-2">Golden Leaf Residence</span>
                            <span className="text-lg text-gray-500">3beds both 240ft</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverSection;