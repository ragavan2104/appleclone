import react from 'react'

const Banner2 = () => {

    return (
        <div className='mt-6 relative w-full aspect-[16/9] max-h-[600px] overflow-hidden rounded-xl'>
            <img 
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' 
                src="https://www.milaaj.com/static/media/apple.65d0db786b372da606b0.jpg" 
                alt="Singles Day Banner" 
            />

            <div className='absolute inset-0 flex items-center justify-center flex-col space-y-6 p-8 bg-gradient-to-t from-black/50 to-black/20'>
                <h1 className='font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text text-center'>HAPPY SINGLE'S DAY</h1>
                <h2 className='font-medium text-base sm:text-2xl md:text-3xl lg:text-4xl text-white/90 text-center max-w-3xl leading-tight'>It's not too late to gift yourself something special</h2>
                <div className='flex gap-4 mt-4'>
                    <button className='bg-white/90 hover:bg-white rounded-3xl px-8 py-2 md:px-10 md:py-3 text-sm sm:text-base md:text-lg transition-colors text-black font-medium'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}
export default Banner2 ;