import { CircleArrowUp } from 'lucide-react';
import People from '../assets/people.webp';


const Testimonial = () => {
    return (
        <>
            <div className="mt-28 flex w-full flex-col bg-gray-300 items-center justify-center">
                <div className="w-full max-w-[1500px] mt-10 h-auto space-y-5 px-6 mb-10">
                    <div className='flex flex-row justify-between items-center flex-wrap max-sm:justify-center '>
                        <div className="flex flex-col space-y-3  max-sm:text-center">
                            <span className="text-4xl font-bold">What People Are Saying</span>
                            <span className='text-lg max-w-96'>Real feedback from clients who've experienced the Urbanouse difference.</span>
                        </div>
                        <div className='flex space-x-4'>
                            <CircleArrowUp strokeWidth={0.5} size={50} className='-rotate-90' />
                            <CircleArrowUp strokeWidth={1} size={50} className='rotate-90' />
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-between flex-wrap'>
                        <div className='md:w-3/4 max-w-[800px] flex flex-col max-md:text-center '>
                            <span className='text-3xl mb-5'>&quot;Urbanouse made buying our first home an absolute breeze! Their team was incredibly attentive and guided us through every step. We couldn't be happier with our new home.&quot;</span>
                            <span>Sarah & Michael Stone</span>
                            <span>Homeowners</span>
                        </div>

                        <div className='md:w-1/4 flex justify-center items-center'>
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