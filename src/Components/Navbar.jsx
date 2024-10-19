
import Logo from '../assets/logo.svg'


const Navbar = () => {

    return (
        <>
            <header className="w-full">
                <nav className="flex items-center justify-center  ">
                    <div className="w-full mx-3 max-w-[1500px]">
                        <div className="flex  h-24 w-full items-center justify-between ">
                            <div className='flex space-x-1'>
                                <img src={Logo} alt="" className='h-10 w-10'/>
                                <strong className="text-2xl font-bold ">Urbanouse</strong>
                            </div>
                            <div className="hidden lg:flex md:space-x-10 text-black/50 ">
                                <a href="*" className="hover:text-black ">Home</a>
                                <a href="*" className="hover:text-black">About Us</a>
                                <a href="*" className="hover:text-black">Agents</a>
                                <a href="*" className="hover:text-black">Collection</a>
                                <a href="*" className="hover:text-black">Building</a>
                                <a href="*" className="hover:text-black">service</a>
                            </div>
                            <div>
                                <button className="w-32 p-3 text-center rounded-3xl bg-black text-white hover:bg-gray-100 transition-colors hover:text-black">Contact Us</button>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )

}

export default Navbar;