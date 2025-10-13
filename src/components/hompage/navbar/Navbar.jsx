'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const announcements = [
    "🚀 New Workshop Available: Advanced Technical Research Methods",
    "📢 Latest Compliance Data Updates Now Live",
    "⭐ Featured Product: Innovative Research Solutions",
    "🔔 Contact us for customized technical consultations"
  ];

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'PRODUCT & SERVICE', href: '/services' },
    {name:"LEARNING", href:''},
    
    { name: 'COMPLIANCE DATA', href: '/compliance' },
    { name: 'CONTACT', href: '/contactUS' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (itemname) => {
    
    setActiveLink(itemname);
    // setIsMobileMenu(false);
  };

  return (
    <>
      <nav className='flex items-center justify-between lg:justify-around bg-white shadow-lg px-4 lg:px-8 py-4 border-b-2 border-blue-100 sticky top-0 z-50'>
        {/* Logo and Brand */}
        <div className='flex items-center gap-6 lg:gap-2'>
          <div onClick={()=> router.push('/')} className='w-12 h-12 lg:w-24 lg:h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer'>
           <Image src={"/logoo.png"}
           width={200}
          
           height={200}/>
          </div>
          
          <div className='h-10 lg:h-12 w-0.5 bg-gradient-to-b from-green-300 to-blue-300 rounded-full hidden sm:block'></div>
          
          <div className='flex flex-col'>
            <h1 className='text-green-600 font-bold text-lg lg:text-xl tracking-tight'>RGX RESEARCH PRIVATE LIMITED</h1>
            <h2 className='text-blue-600 text-sm lg:text-lg font-semibold tracking-wide hidden sm:block'>INH000021094</h2>
          </div>
        </div> 

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8 '>
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className={`font-semibold transition-all duration-300 relative group px-2 py-1 rounded-lg ${
                activeLink === item.name 
                  ? 'text-green-500 scale-105 bg-green-50' 
                  : 'text-blue-500 hover:text-green-400 hover:bg-gray-50'
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.name}
              
              {/* Hover/Active underline effect */}
              <span className={`absolute -bottom-1 left-2 right-2 h-0.5 bg-green-400 transition-all duration-300 ${
                activeLink === item.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='lg:hidden flex items-center sticky '>
          <button
            onClick={toggleMobileMenu}
            className='flex flex-col justify-center items-center w-10 h-10 space-y-1.5'
            aria-label='Toggle menu'
          >
            <span className={`block w-6 h-0.5 bg-green-600 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-green-600 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-green-600 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden bg-white shadow-lg border-b border-blue-100 transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className='px-4 py-3 space-y-1'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block font-semibold transition-all duration-200 py-3 px-4 rounded-lg ${
                activeLink === item.name
                  ? 'text-green-500 bg-green-50 border-l-4 border-green-500'
                  : 'text-blue-500 hover:text-green-400 hover:bg-gray-50'
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Modern Announcement Bar */}
      <div className='border-b py-2 overflow-hidden bg-gray-50'>
        <div className='animate-marquee whitespace-nowrap'>
          {announcements.map((announcement, index) => (
            <span key={index} className='mx-4 lg:mx-8 text-black font-medium text-sm lg:text-l'>
              {announcement}
              {index < announcements.length - 1 && (
                <span className='mx-2 lg:mx-4 text-blue-300'>•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Add this to your global CSS or tailwind config */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}

export default Navbar;