'use client'
import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Users, Sparkles, ArrowRight, Trophy, Award, Star, ChevronRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Market Mastery Workshop",
      date: "15 January 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Mumbai, Maharashtra",
      description: "Learn advanced technical analysis strategies from market veterans with 75+ years of experience.",
      attendees: "Limited to 50 participants",
      status: "Upcoming",
      month: "Jan",
      day: "15"
    },
    {
      id: 2,
      title: "Investor Education Summit",
      date: "28 February 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Delhi NCR",
      description: "Comprehensive session on value investing, portfolio management, and risk assessment.",
      attendees: "100+ expected",
      status: "Upcoming",
      month: "Feb",
      day: "28"
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "INDIA ELITE SUMMIT 2025",
      date: "23 October 2025",
      time: "3:00 PM - 7:00 PM",
      location: "Online Webinar",
      description: "Introduction to stock market investing for beginners with live Q&A session.",
      participants: "80+ attendees",
      image: "/event2.png",
      highlights: ["Beginner-friendly", "Interactive Q&A"],
      category: "Seminar",
      year: "2025"
    },
    {
      id: 2,
      title: "Year-End Market Review",
      date: "5 December 2025",
      time: "11:00 AM - 2:00 PM",
      location: "Mumbai",
      description: "Analysis of 2025 market trends and 2025 outlook by market veterans.",
      participants: "180+ attendees",
      image: "/event1.png",
      highlights: ["Market Predictions", "Portfolio Strategy", "Risk Management"],
      category: "Seminar",
      year: "2025"
    },
  ];

  // This will automatically adjust based on number of events
  const pastEventsGridClass = pastEvents.length === 2 ? "lg:grid-cols-2" : 
                             pastEvents.length === 3 ? "lg:grid-cols-3" : 
                             pastEvents.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-1";

  const upcomingEventsGridClass = upcomingEvents.length === 1 ? "lg:col-span-3" : "lg:col-span-2";

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Events & Workshops
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Events & Workshops
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl mt-2">
              Learn, Network & Grow
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Join our exclusive events and workshops designed to enhance your market knowledge 
            and investment skills with industry experts.
          </p>
        </div>

        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              </div>
              <div className="text-sm text-gray-500">
                {upcomingEvents.length} Event{upcomingEvents.length !== 1 ? 's' : ''} Planned
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Upcoming Events Cards */}
              <div className={upcomingEventsGridClass}>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div 
                      key={event.id}
                      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex flex-col items-center justify-center text-white">
                            <div className="text-2xl font-bold">{event.month}</div>
                            <div className="text-3xl font-bold">{event.day}</div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                              <Sparkles className="w-4 h-4" />
                              {event.status}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-5 h-5 text-blue-500" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-5 h-5 text-green-500" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Users className="w-5 h-5 text-purple-500" />
                              <span>{event.attendees}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4">{event.description}</p>
                          
                          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                            Register Now
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar - Only show if we have upcoming events */}
              {upcomingEvents.length > 0 && (
                <div className="space-y-8">
                  {/* Registration Info */}
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                      Why Attend Our Events?
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Learn from SEBI Certified Research Analysts",
                        "75+ years of combined market experience",
                        "Networking with like-minded investors",
                        "Practical, hands-on learning sessions",
                        "Q&A sessions with industry experts",
                        "Comprehensive learning materials"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats Card */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Our Event Stats
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Total Events</span>
                        <span className="text-xl font-bold">12+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Participants</span>
                        <span className="text-xl font-bold">850+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Cities Covered</span>
                        <span className="text-xl font-bold">6+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Success Rate</span>
                        <span className="text-xl font-bold">98%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Past Events Gallery</h2>
              </div>
              <div className="text-sm text-gray-500">
                {pastEvents.length} Event{pastEvents.length !== 1 ? 's' : ''} Completed
              </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${pastEventsGridClass} gap-6`}>
              {pastEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Event Image */}
                  <div className="relative h-90 w-full">
                    <div className="relative w-full h-full">
                      <Image 
                        src={event.image} 
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Completed
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </div>
                    
                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-gray-900 font-bold text-sm">{event.date}</div>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {event.year}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 font-semibold text-sm">
                          {event.participants}
                        </span>
                      </div>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button - Only show if more than 4 events */}
            {pastEvents.length > 4 && (
              <div className="text-center mt-8">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                  View All Past Events
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

       
        {/* Testimonials */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">What Participants Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The workshop completely transformed my approach to technical analysis. Highly recommended!"
                </p>
                <div className="text-sm text-gray-600">- Rohan Sharma, Mumbai</div>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Practical insights and real-world examples made the learning experience invaluable."
                </p>
                <div className="text-sm text-gray-600">- Priya Patel, Delhi</div>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Expert guidance from seasoned professionals. Looking forward to more events!"
                </p>
                <div className="text-sm text-gray-600">- Amit Verma, Bengaluru</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">More Events Coming Soon!</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              We're Preparing More Exciting Events
            </h2>
            
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Our team is working on bringing you more insightful workshops, seminars, 
              and networking events. Stay tuned for announcements about our upcoming 
              market analysis bootcamps and investor meetups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;