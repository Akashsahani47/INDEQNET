'use client';
import React from 'react'
import { useRouter } from "next/navigation";

const Disclaimer = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Legal Information
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            India Elite Summit
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl mt-2">
              Disclaimer & Legal Notice
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Important information regarding the use of our platform and investment risks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Disclaimer Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">!</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div className="border-l-4 border-blue-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">I. Information Purpose Only</p>
                <p>Information is provided "as is" and solely for informational purposes, not for trading purposes or advice.</p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">II. User Assumes Risk</p>
                <p>The user assumes the entire risk with respect to the use and results of such use.</p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">III. Verify Information</p>
                <p>Before investing, the user must check the correctness of the data at their own end.</p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">IV. Not Investment Advice</p>
                <p>None of the content should be regarded as an advice to buy or sell any stock.</p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">V. Potential Positions</p>
                <p>As investors ourselves, we may have positions in some of the stocks.</p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">VI. Limitation of Liability</p>
                <p>We shall not be liable for any expense, loss or damage arising from use of this platform.</p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">VII. Jurisdiction</p>
                <p>Governed by laws of India with exclusive jurisdiction of Mumbai, Maharashtra.</p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">VIII. Trademark Usage</p>
                <p>Logos and trademarks are for identification only and belong to their respective owners.</p>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">⚖️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Legal Disclaimer</h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="font-bold text-red-700 text-lg mb-2">⚠️ Important Notice</p>
                <p className="font-semibold text-gray-900">
                  Investment in securities market are subject to market risks. Read all related documents carefully before investing.
                </p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">Registration & Certification</p>
                <p>SEBI registration and NISM certification do not guarantee performance or provide assurance of returns.</p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">Copyright Protection</p>
                <p>All rights reserved. Unauthorized copying, reproduction or distribution is strictly prohibited.</p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">Research Analyst Status</p>
                <p>
                  INDEQNET PRIVATE LIMITED (Research Analyst) is an independent securities research company, 
                  not an Investment Adviser.
                </p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">Information Disclaimer</p>
                <p>Information should be used at one's own risk. This is not an offer to sell or solicitation to buy any securities.</p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">Personal Advice</p>
                <p>Consider suitability for your circumstances and seek independent professional advice if necessary.</p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4 py-2">
                <p className="font-semibold text-gray-900 mb-2">International Restrictions</p>
                <p>Not directed for access or use in countries where such use is unlawful (USA, Canada, EU countries, etc.).</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-2">Company Information</p>
                <p className="text-sm">
                  <span className="font-bold">INDEQNET PRIVATE LIMITED</span> may hold shares in companies discussed herein.
                  Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice Box */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-2xl">📋</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Terms & Conditions</h3>
              <p className="text-gray-700 mb-4">
                By accessing India Elite Summit content and website, you agree to our Terms and Conditions of Use. 
                All content is provided on an 'As Is' basis. Information is believed to be reliable but completeness 
                or accuracy is not warranted.
              </p>
              <button 
                onClick={() => router.push('/terms')}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Complete Terms and Conditions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            For any questions regarding this disclaimer, please contact us at{' '}
            <a href="mailto:legal@indeqnet.com" className="text-blue-600 hover:text-blue-700 font-semibold">
              legal@indeqnet.com
            </a>
          </p>
          <p className="mt-2">Last Updated: December 2024</p>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => router.back()}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Previous Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer
