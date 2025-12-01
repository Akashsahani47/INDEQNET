'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import {useRouter} from "next/navigation"

const Hero = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [quoteFade, setQuoteFade] = useState(true)

  const slides = [
    {
      image: '/p1.png',
      subtitle: "EXPERT, ANALYSIS, AND ACTION",
      title: "Maximizing Wealth With Expert-Led Insights",
      quote: "Take your investments to new heights with trusted insights from RGX"
    },
    {
      image: '/p2.png',
      subtitle: "STRATEGY, GROWTH, AND SUCCESS",
      title: "Options Strategies For Smarter Market Moves",
      quote: "Take your investments to new heights with trusted insights from RGX"
    },
    {
      image: '/p3.png',
      subtitle: "INSIGHT, PLANNING, AND RESULTS", 
      title: "Building Legacy Through Informed Decisions",
      quote: "Take your investments to new heights with trusted insights from RGX"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setQuoteFade(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
        setFade(true)
        setQuoteFade(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  const currentSlide = slides[currentIndex]

  return (
    <div className="relative min-h-screen flex items-center  justify-center lg:justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentSlide.image}
          alt="Hero background"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            fade ? 'opacity-100' : 'opacity-70'
          }`}
          priority
        />
        {/* Enhanced gradient overlay - responsive */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 lg:from-black/60 lg:via-black/40 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:from-black/50 lg:to-transparent"></div>
      </div>

      {/* Text Content - Centered on mobile, left-aligned on desktop */}
      <div className="relative z-10  w-full max-w-6xl mx-auto mt-55 md:mt-0  lg:ml-6 text-center lg:text-left">
        <div className={`transition-all duration-1000 ${
          fade ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 lg:translate-x-10'
        }`}>
          <h5 className="text-green-400 font-semibold text-sm sm:text-lg mb-4 sm:mb-6 tracking-wider uppercase">
            {currentSlide.subtitle}
          </h5>
          
          {/* Responsive title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">
            {currentSlide.title.split(' ').map((word, index) => (
              <span 
                key={index} 
                className="inline-block mr-1 sm:mr-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Buttons - Stack on mobile, row on larger screens */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12">
            <button onClick={()=> router.push('/services')} className="w-full cursor-pointer sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 group">
              <span className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                Start Your Journey
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            {/* Secondary CTA */}
            <button className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
             Set up a one-to-one meeting
            </button>
          </div>

          {/* Stats - Responsive grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0 lg:max-w-none lg:flex lg:gap-8">
            <div className="text-white text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-bold text-green-400">300+</div>
              <div className="text-xs sm:text-sm text-gray-300">Clients Served</div>
            </div>
            <div className="text-white text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-bold text-green-400">75+</div>
              <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Enhanced Quote - Hidden on small mobile, visible on larger screens */}
      <div className="hidden md:block absolute bottom-20 lg:bottom-32 right-4 lg:right-12 z-10 max-w-xs lg:max-w-md">
        <div className={`transition-all duration-1000 transform ${
          quoteFade 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl p-4 lg:p-6 border border-white/10 shadow-2xl">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm lg:text-lg">"</span>
              </div>
              <div className="text-right"> 
                <p className="text-white text-sm lg:text-xl font-light leading-relaxed mb-2 lg:mb-3">
                  Unlock smarter investing with the trusted expertise of INDEQNET
                </p>
                <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Slide Indicators */}
      <div className="absolute bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(false)
              setQuoteFade(false)
              setTimeout(() => {
                setCurrentIndex(index)
                setFade(true)
                setQuoteFade(true)
              }, 200)
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-green-400 scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero