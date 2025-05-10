import react from 'react'

const Banner = () => {

    return (
       <div className="relative w-full aspect-[16/9] max-h-[600px] overflow-hidden rounded-xl mt-0">
        <img 
          className='w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105' 
          src="https://cdn.mos.cms.futurecdn.net/Pq8dDpUdQNk5NXKrgcqodi.jpg" 
          alt="iPhone Banner" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-4 text-white'>iPhone</h1>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-white text-center px-4'>Meet the new iPhone family</h2>
          <div className='flex gap-4'>
            <button className='bg-white/90 hover:bg-white rounded-3xl px-6 py-2 md:px-8 md:py-3 text-sm sm:text-base md:text-lg transition-colors text-black font-medium'>Learn More</button>
            <button className='bg-blue-500/90 hover:bg-blue-500 rounded-3xl px-6 py-2 md:px-8 md:py-3 text-sm sm:text-base md:text-lg transition-colors text-white font-medium'>iPhone</button>
          </div>
          <p className='mt-4 text-sm sm:text-base md:text-lg font-medium text-white/90'>Built for Apple intelligence</p>
        </div>
       </div>
    )
    
}
export default Banner ;