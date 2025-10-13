'use client'
import React from "react";
import { 
  TrendingUp, 
  BarChart3, 
  Users, 
  BookOpen, 
  Target, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Award
} from "lucide-react";
import { useRouter } from "next/navigation"

const Service = () => {
  
  const services = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Wealth Maximiser",
      description: "Comprehensive wealth management strategies tailored to your financial goals and risk appetite for long-term growth.",
      features: ["Portfolio Optimization", "Risk Assessment", "Goal-based Planning", "Regular Monitoring"],
      duration: "Ongoing",
      level: "Advanced"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Stock Options",
      description: "Expert analysis and recommendations for stock options trading with detailed risk-reward analysis.",
      features: ["Options Strategy", "Risk Management", "Premium Analysis", "Expiry Planning"],
      duration: "Daily Updates",
      level: "Advanced"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Nifty Tracker",
      description: "Real-time Nifty index analysis with technical indicators and trend predictions for informed trading decisions.",
      features: ["Technical Analysis", "Support/Resistance", "Trend Identification", "Market Sentiment"],
      duration: "Real-time",
      level: "All Levels"
    },
    
    
  ];
  const router = useRouter();

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "SEBI", label: "Certified" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional stock market research and technical analysis services to help you 
            make informed investment decisions with confidence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title & Description */}
              <h3 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Service Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{service.level}</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get personalized research and analysis services tailored to your investment goals and risk profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={()=>router.push('/contactUS')} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* SEBI Compliance */}
        {/* <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-green-400 mb-2">
              SEBI Certified Research Analyst
            </h3>
            <p className="text-gray-300 text-sm">
              All our research and recommendations are provided in compliance with SEBI regulations 
              and maintain the highest standards of professional conduct.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Service;