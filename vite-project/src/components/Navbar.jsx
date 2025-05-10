import { useState } from 'react';
import { FaApple, FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className='bg-black text-white p-2'>
                {/* Desktop Navigation */}
                <div className='hidden md:flex gap-10 items-center justify-center'>
                    <FaApple className="text-xl" />
                    {navItems.map((item, index) => (
                        <div key={index} className="relative group hover:text-gray-400 cursor-pointer">
  <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">{item}</div>
  <div className="absolute hidden group-hover:block top-full left-1/2 transform -translate-x-1/2 bg-black/90 text-white min-w-[200px] p-4 rounded-lg shadow-lg space-y-2">
    <div className="flex flex-col">
      {item === 'Store' && (
  <>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Shop the Latest</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Watch</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Accessories</div>
  </>
)}
{item === 'Mac' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">MacBook Air</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">MacBook Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac mini</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac Studio</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Displays</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare Macs</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac Accessories</div>
        </>
      )}
      {item === 'iPad' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad Air</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad mini</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Pencil</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Keyboards</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare iPads</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad Accessories</div>
        </>
      )}
      {item === 'AirPods' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods (2nd generation)</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods (3rd generation)</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods Max</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare AirPods</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods Accessories</div>
        </>
      )}
      {item === 'TV & Home' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple TV 4K</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">HomePod</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">HomePod mini</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">TV & Home Accessories</div>
        </>
      )}
      {item === 'Entertainment' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple One</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple TV+</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Music</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Arcade</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Podcasts</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Books</div>
        </>
      )}
      {item === 'Accessories' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Shop All Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">TV & Home Accessories</div>
        </>
      )}
      {item === 'Support' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AppleCare+</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Repair Services</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Billing & Subscriptions</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Trade In</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Recycling Program</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Community</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Contact Support</div>
        </>
      )}
      {item === 'iPhone' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone 15 Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone 15</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone 14</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone 13</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone SE</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare iPhones</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirTag</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Accessories</div>
        </>
      )}
      {item === 'Watch' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Series 9</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Ultra</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch SE</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Nike</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Hermès</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare Watches</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Bands</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Accessories</div>
        </>
      )}
    </div>
  </div>
</div>
                    ))}
                    <FaSearch className="text-xl cursor-pointer hover:text-gray-400" />
                    <FaShoppingBag className="text-xl cursor-pointer hover:text-gray-400" />
                </div>

                {/* Mobile Navigation */}
                <div className='md:hidden flex justify-between items-center'>
                    <FaApple className="text-xl" />
                    <div className='flex items-center gap-4'>
                        <FaSearch className="text-xl cursor-pointer hover:text-gray-400" />
                        <FaShoppingBag className="text-xl cursor-pointer hover:text-gray-400" />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-xl focus:outline-none"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-full left-0 right-0 bg-black transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group hover:text-gray-400 cursor-pointer">
  <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">{item}</div>
  <div className="absolute hidden group-hover:block top-full left-1/2 transform -translate-x-1/2 bg-black/90 text-white min-w-[200px] p-4 rounded-lg shadow-lg space-y-2">
    <div className="flex flex-col">
      {item === 'Store' && (
  <>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Shop the Latest</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Watch</div>
    <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Accessories</div>
  </>
)}
{item === 'Mac' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">MacBook Air</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">MacBook Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac mini</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac Studio</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Displays</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare Macs</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac Accessories</div>
        </>
      )}
      {item === 'iPad' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad Air</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad mini</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Pencil</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Keyboards</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare iPads</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad Accessories</div>
        </>
      )}
      {item === 'AirPods' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods (2nd generation)</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods (3rd generation)</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods Max</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare AirPods</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods Accessories</div>
        </>
      )}
      {item === 'TV & Home' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple TV 4K</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">HomePod</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">HomePod mini</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">TV & Home Accessories</div>
        </>
      )}
      {item === 'Entertainment' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple One</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple TV+</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Music</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Arcade</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Podcasts</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Books</div>
        </>
      )}
      {item === 'Accessories' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Shop All Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Mac Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPad Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods Accessories</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">TV & Home Accessories</div>
        </>
      )}
      {item === 'Support' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AppleCare+</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Repair Services</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Billing & Subscriptions</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Trade In</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Recycling Program</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Community</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Contact Support</div>
        </>
      )}
      {item === 'iPhone' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone 15 Pro</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone 15</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone 14</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone 13</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">iPhone SE</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare iPhones</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirPods</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">AirTag</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Accessories</div>
        </>
      )}
      {item === 'Watch' && (
        <>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Series 9</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Ultra</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch SE</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Nike</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Apple Watch Hermès</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Compare Watches</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Bands</div>
          <div className="px-3 py-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-light">Accessories</div>
        </>
      )}
    </div>
  </div>
</div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;