'use client'
import React from "react";
import {
  NotebookText,
  ChartCandlestick,
  ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined,
} from "lucide-react";
import Image from "next/image";
import { useRouter }  from "next/navigation";

const Services = () => {
  const router = useRouter();
  const services = [
    {
      icon: <NotebookText className="w-8 h-8" />,
      title: "Wealth Maximiser",
      description: "Strategic wealth creation and portfolio optimization for long-term financial growth"
    },
    {
      icon: <ChartCandlestick className="w-8 h-8" />,
      title: "Stock Options",
      description: "Expert options trading strategies and risk management techniques"
    },
    {
      icon: <ChartNoAxesColumnIncreasing className="w-8 h-8" />,
      title: "Nifty Tracker",
      description: "Comprehensive Nifty analysis and index trading recommendations"
    },
    {
      icon: <ChartNoAxesCombined className="w-8 h-8" />,
      title: "Training / Workshops",
      description: "Interactive learning sessions for traders of all experience levels"
    }
  ];

  const features = [
    "Market Analysis",
    "Stock Recommendations", 
    "Data-Backed Decision-Making",
    "Custom Trading Strategies"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-6 py-3 rounded-full border border-green-200 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Stock Market Analysis for
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Data-Driven Decisions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Are you looking for a stock market analyst to give you the confidence to invest with guidance? 
            If so, you are exactly where you need to be. Get insights into the stock market before investing 
            your money. We provide transparency about the market and are the only technical research analysts you need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Feature Card Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Innovative Approach to 
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Problem-Solving
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With an innovative approach to problem-solving, we recognize solutions as a driving force 
                for successful trading and investment strategies.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={()=>router.push('/services')} className=" cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                
                
              </div>
            </div>



            {/* Image Section */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <Image
                src={"/img5.jpg"}
                alt="Stock Market Analysis"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">300+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;