import react from 'react'
import { FaApple, FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa'


const Product = () => {

    return(
       <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto'>
        <div className='group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl transition-shadow'>
          <img 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
            src="https://images.unsplash.com/photo-1630331528526-7d04c6eb463f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZCUyMGFpcnxlbnwwfDJ8MHx8fDA%3D"
            alt="iPad Air"
          />
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8'>
            <h3 className='text-2xl md:text-3xl font-semibold text-white'>iPad Air</h3>
            <p className='mt-2 text-lg text-white/90'>Powerful. Colorful. Wonderful.</p>
            <button className='mt-4 rounded-full bg-white/90 hover:bg-white px-8 py-2 text-sm md:text-base font-medium text-black transition-colors'>Learn More</button>
          </div>
        </div>
        <div className='group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl transition-shadow'>
          <img 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            src="https://images.unsplash.com/photo-1697490057407-34c996cab84f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlJTIwc21hcnQlMjB3YXRjaHxlbnwwfDJ8MHx8fDA%3D" 
            alt="Apple Watch" 
          />
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-2 text-white'><FaApple />watch</h1>
            <p className='mt-2 text-lg text-white/90'>A healthy leap ahead.</p>
            <button className='mt-4 rounded-full bg-white/90 hover:bg-white px-8 py-2 text-sm md:text-base font-medium text-black transition-colors'>Learn More</button>
          </div>
        </div>
        <div className='group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl transition-shadow'>
          <img 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            src="https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBtYWNib29rfGVufDB8MnwwfHx8MA%3D%3D" 
            alt="Apple Watch" 
          />
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-2 text-white'><FaApple />MacBook Pro</h1>
            <p className='mt-2 text-lg text-white/90'>Hight Perfomance with M4</p>
            <button className='mt-4 rounded-full bg-white/90 hover:bg-white px-8 py-2 text-sm md:text-base font-medium text-black transition-colors'>Learn More</button>
          </div>
        </div>
        <div className='group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl transition-shadow'>
          <img 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            src="https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfDJ8MHx8fDA%3D" 
            alt="Apple Watch" 
          />
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-2 text-white'><FaApple />Earpods Pro</h1>
            <p className='mt-2 text-lg text-white/90'>Iconic ,New Supersonic.</p>
            <button className='mt-4 rounded-full bg-white/90 hover:bg-white px-8 py-2 text-sm md:text-base font-medium text-black transition-colors'>Learn More</button>
          </div>
        </div>
        <div className='group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl transition-shadow'>
          <img 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            src="https://images.unsplash.com/photo-1621015800694-87544080a6af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjBtb3VzZXxlbnwwfDJ8MHx8fDA%3D" 
            alt="Apple Watch" 
          />
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-2 text-white'>Magic Mouse</h1>
            <p className='mt-2 text-lg text-white/90'>Scroll Smother.</p>
            <button className='mt-4 rounded-full bg-white/90 hover:bg-white px-8 py-2 text-sm md:text-base font-medium text-black transition-colors'>Learn More</button>
          </div>
        </div>
        <div className='group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl transition-shadow'>
          <img 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            src="https://images.unsplash.com/photo-1640612796332-56ade137a1d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGUlMjBhaXJ0YWd8ZW58MHwyfDB8fHww" 
            alt="Apple Watch" 
          />
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-2 text-white'><FaApple />AirTag</h1>
            <p className='mt-2 text-lg text-white/90'>Be Safe.</p>
            <button className='mt-4 rounded-full bg-white/90 hover:bg-white px-8 py-2 text-sm md:text-base font-medium text-black transition-colors'>Learn More</button>
          </div>
        </div>
       </div>
    )
}
export default Product ;