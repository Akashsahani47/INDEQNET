import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 9999999999",
      description: "Mon to Fri 9am to 6pm",
      href: "tel:+9999999999",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "indequitynetwork@gmail.com",
      description: "Send us your query anytime",
      href: "indequitynetwork@gmail.com",
      gradient: "from-blue-500 to-green-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "201, RADHAKRISHNA, RADHA RESIDENCY,SIDDHARTH NAGER, BORIVALI - EAST, MUMBAI, MAHARASHTRA - 400066",
      description: "Come say hello at our office",
      href: "#",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timing",
      details: "9:00 AM - 6:00 PM",
      description: "Monday to Friday",
      href: "#",
      gradient: "from-blue-600 to-green-500"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-6 py-3 rounded-full border border-green-200 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start Your
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Investment Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take your investments to the next level? Get in touch with us for 
            personalized stock market analysis and expert guidance from SEBI certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.href}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 hover:transform hover:scale-105"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    {method.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {method.description}
                  </p>
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Quick Response</h3>
                  <p className="text-blue-100">We typically reply within 2 hours</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Our team of SEBI certified analysts is ready to help you with personalized 
                investment strategies and market insights tailored to your financial goals.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                    <User className="w-4 h-4" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                    <MessageCircle className="w-4 h-4" />
                    Subject *
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300">
                    <option value="">Select a subject</option>
                    <option value="consultation">Investment Consultation</option>
                    <option value="workshop">Workshop Registration</option>
                    <option value="analysis">Stock Analysis</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <MessageCircle className="w-4 h-4" />
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                  placeholder="Tell us about your investment goals and how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-center text-gray-500 text-sm">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">SEBI Certified</h4>
              <p className="text-gray-600">Registered and certified research analyst</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">75+ Years Experience</h4>
              <p className="text-gray-600">Proven track record in market analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">300+ Clients</h4>
              <p className="text-gray-600">Trusted by investors nationwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import the missing icons
const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Award = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

export default Contact;