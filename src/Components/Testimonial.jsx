import { CircleArrowUp } from 'lucide-react';
import People from '../assets/people.webp';


const Testimonial = () => {
    return (
        <>
            <div className="mt-20 flex w-full flex-col bg-zinc-100 items-center justify-center">
                <div className="w-full max-w-[1500px] mt-10 h-auto space-y-5 mb-10  max-[1550px]:px-6">
                    <div className='flex flex-row justify-between items-center flex-wrap max-sm:justify-center max-md:space-y-4'>
                        <div className="flex flex-col space-y-3  max-sm:text-center">
                            <span className="text-5xl font-semibold">What People Are Saying</span>
                            <span className='text-xl max-w-[500px] text-black/60'>Real feedback from clients who've experienced the Urbanouse difference.</span>
                        </div>
                        <div className='flex space-x-4 max-md:mx-8'>
                            <CircleArrowUp strokeWidth={0.3} size={50} className='-rotate-90 text-black/60' />
                            <CircleArrowUp strokeWidth={0.5} size={50} className='rotate-90' />
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-between flex-wrap max-md:space-y-4'>
                        <div className='md:w-2/4 xl:w-3/4  max-w-[850px] flex flex-col max-md:text-center pr-4'>
                            <span className='text-3xl mb-5'>&quot;Urbanouse made buying our first home an absolute breeze! Their team was incredibly attentive and guided us through every step. We couldn't be happier with our new home.&quot;</span>
                            <span className='font-semibold text-lg mt-5'>Sarah & Michael Stone</span>
                            <span className='text-black/60'>Homeowners</span>
                        </div>

                        <div className='md:w-2/4 xl:w-2/6 flex justify-center items-center'>
                            <img src={People} alt="Imagen de testimonios personales"
                                className='w-full object-cover h-96 rounded-bl-[50px] rounded-tr-[50px]' />
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}


export default Testimonial;