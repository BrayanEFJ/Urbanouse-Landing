import { CircleArrowUp } from 'lucide-react';


const Testimonial = () => {
    return (
        <>
            <div className="mt-28 flex w-full flex-col bg-gray-300 items-center justify-center">
                <div className=" w-full max-w-[1500px] flex justify-between mt-10 h-36 items-center flex-wrap max-md:justify-center space-y-5 px-6">
                    <div className="flex flex-col space-y-3 ">
                        <span className="text-4xl font-bold">What People Are Saying</span>
                        <span className='text-lg max-w-96'>Real feedback from clients who've experienced the Urbanouse difference.</span>
                    </div>
                    <div className='flex space-x-2'>
                        <CircleArrowUp strokeWidth={0.5} size={50} className='-rotate-90' />
                        <CircleArrowUp strokeWidth={1} size={50} className='rotate-90' />

                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}


export default Testimonial;