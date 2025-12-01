'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { Users, Award, BookOpen, Target, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const router = useRouter();
  
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "75+ Years Combined Experience",
      description: "Our founders bring decades of market expertise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "SEBI Certified Research Analysts",
      description: "Regulatory compliance and professional standards"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Investor Education",
      description: "Transformative learning experiences"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Market Insights",
      description: "Data-driven analysis and strategies"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Focused",
      description: "Empowering financial success"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Integrity",
      description: "Ethical practices and transparency"
    }
  ];

  const founders = [
    {
      name: "N. S. Fidai",
      role: "Market Veteran & Technical Analyst",
      experience: "30+ years in Indian equity markets",
      expertise: "NISM XV Certified Technical Analyst"
    },
    {
      name: "Rajeev Jhunjhunwala",
      role: "CFA & Value Investor",
      experience: "30+ years leadership experience",
      expertise: "Specializes in mid-cap, small-cap investments"
    },
    {
      name: "Ram Iyer",
      role: "SEBI Research Analyst",
      experience: "30+ years in finance",
      expertise: "Value investing and company research"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              About us
            </h3>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Empowering Market
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-xl sm:text-4xl md:text-5xl lg:text-6xl">
              Participants Through Knowledge
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Bridging the knowledge gap in India's investor education ecosystem
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <span className="font-bold text-blue-600">Indeqnet Private Limited (IPL)</span> is dedicated to providing premium, knowledge-driven experiences that are both accessible and affordable. We empower market participants with insightful strategies, practical expertise, and invaluable networking opportunities.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-gray-800 italic">
                  "With over 75 years of collective experience in the Indian equity market, our mission is to create a transformative learning platform that empowers market participants to achieve success."
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Founders Highlight */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 text-white">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-2">75+</div>
                <div className="text-sm opacity-90">Years Combined Experience</div>
              </div>
              
              <h3 className="text-lg font-bold mb-4 text-center">Visionary Leadership</h3>
              
              <div className="space-y-4">
                {founders.map((founder, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="font-semibold text-green-300">{founder.name}</div>
                    <div className="text-sm opacity-90">{founder.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Research Services & Market Analysis",
                  "Investor Education Programs",
                  "Seminars & Networking Events",
                  "SEBI Registered RA & IA Platform",
                  "Investment Advisory"
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                Knowledge Excellence
              </h3>
              <p className="text-gray-600">
                Delivering high-quality, practical, and accessible knowledge-driven experiences that foster growth and confidence.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                Investor Empowerment
              </h3>
              <p className="text-gray-600">
                Equipping market participants with the tools and insights needed to navigate financial markets successfully.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                Innovation & Growth
              </h3>
              <p className="text-gray-600">
                Continuously evolving our approach to provide cutting-edge solutions in investor education and market analysis.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;