
import { ChevronDown, Search } from 'lucide-react'
import House from '../assets/house-hero.webp'

const Hero = () => {

    return (
        <>
            <div className='relative flex w-full items-center justify-center px-3'>
                <img src={House} alt="" className='w-full h-[700px] lg:rounded-br-[150px] md:rounded-tl-[150px] max-md:rounded-tl-[100px] brightness-50 max-w-[1600px] space-x-3 object-cover' />
                <div className='absolute md:w-[47%] w-[70%] xl:top-80 max-sm:mb-40 flex flex-col items-center justify-center'>
                    <div className='text-white md:text-6xl text-4xl font-semibold text-center md:w-[80%] max-w-[1000px]'>
                        Find Your Dream Home With Urbanouse
                    </div>
                    <div className='text-white md:text-lg text-sm font-semibold text-center sm:mt-5 max-w-[1000px]'>
                        Experience luxury and comfort with our exclusive real estate listings. Wheter you're searching for a modern apartament, a spacious villa, or a commercial space, Urbanouse has the perfect property for you
                    </div>
                </div>
                <div className='absolute w-full  -bottom-14 max-w-[1000px] px-3 lg:w-9/12   xl:w-7/12  max-sm:space-y-1'>
                    <div className='bg-white  shadow-xl flex sm:justify-around  sm:items-center w-full flex-wrap  p-3  text-lg lg:rounded-full max-md:rounded-br-[60px]'>
                        <div className='flex flex-col p-2 max-sm:w-1/2'>
                            <span className='text-gray-400'>Buy/Rent</span>
                            <div className='flex items-center justify-between'>
                                <span className='font-medium'>Buy</span>
                                <ChevronDown className='ml-4' />
                            </div>
                        </div>
                        <div className='flex flex-col p-1 max-sm:w-1/2'>
                            <span className='text-gray-400'>Location</span>
                            <div className='flex items-center justify-between'>
                                <span className='font-medium'>London</span>
                                <ChevronDown className='ml-4' />
                            </div>
                        </div>
                        <div className='flex flex-col p-1 max-sm:w-1/2'>
                            <span className='text-gray-400'>Property Type</span>
                            <div className='flex items-center justify-between'>
                                <span className='font-medium'>Family House</span>
                                <ChevronDown className='ml-4' />
                            </div>
                        </div>
                        <div className='flex flex-col p-1 max-sm:w-1/2'>
                            <span className='text-gray-400'>Bedrooms</span>
                            <div className='flex items-center justify-between'>
                                <span className='font-medium'>3 Bedrooms</span>
                                <ChevronDown className='ml-4' />
                            </div>
                        </div>
                        <div className='flex flex-col p-1  max-sm:w-1/2'>
                            <span className='text-gray-400'>Budget</span>
                            <div className='flex items-center justify-between'>
                                <span className='font-medium'>$500.000</span>
                                <ChevronDown />
                            </div>
                        </div>
                        <div className='flex flex-col p-2 max-sm:w-1/2 items-center justify-center'>
                            <button className='bg-black w-12 h-12 rounded-full flex items-center justify-center' aria-label='SearchButton'>
                                <Search color='#ffffff' />
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </>

    )

}

export default Hero;