import react from 'react'
import { FaApple, FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa'


const Watch = () => {

    return (
        <div className='relative mt-4 h-[80vh]'>
            <img 
                className='w-full h-full object-cover' 
                src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg" 
                alt="Apple Watch Series 9" 
            />

            <div className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30'>
                <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex items-center gap-2'>
                    <FaApple className='animate-pulse'/>
                    <span>Watch</span>
                </h1>
                <h2 className='mt-6 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center px-4 max-w-3xl'>
                    Live Healthier · Train Better · Stay Connected
                </h2>
                <div className='flex gap-6 mt-8'>
                    <button className='bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-3xl px-6 py-2.5 md:px-8 md:py-3 text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 border border-white/50'>
                        Learn More
                    </button>
                    <button className='bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-3xl px-6 py-2.5 md:px-8 md:py-3 text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 border border-white/50'>
                        Buy Watch
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Watch;