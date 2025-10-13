'use client'
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
  Shield,
  Award,
  Users
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" }
  ];

  

  const services = [
   {name:"INVESTOR CHARTER" ,href:'/important/investercharter'},
    {name:"CODE OF CONDUCT",href:'/important/codeofconduct'}
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+91 9833883611",
      href: "tel:+9833883611"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "ritesh.gokani3@gmail.com",
      href: ":ritesh.gokani3@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Surat, Gujarat, 395009",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      name: "Twitter"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      name: "Facebook"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      name: "LinkedIn"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "#",
      name: "YouTube"
    }
  ];
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Trust Badges Section */}
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <div className="w-24 h-12 b shadow-lg rounded-full flex items-center justify-center">
                 <div onClick={()=> router.push('/')} className='w-12 h-12 bg-white lg:w-24 lg:h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer'>
                           <Image src={"/logoo.png"}
                           width={200}
                          
                           height={200}/>
                          </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">RGX</h3>
                <p className="text-green-400 text-sm">Technical Research</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Expert stock market analysis and technical research to help you make informed investment decisions. 
              SEBI certified with 25+ years of market experience.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Important Links */}
           {/* <div className=" ">
           <h1 className="text-lg font-bold mt-3 mb-3 text-green-500">IMPORTANT LINKS</h1>
           <ul className="space-y-3">
            {ImportantLink.map((items)=>(
              <li className="hover:text-green-400 font-bold text-sm gap-2 flex transition-colour duration-300 group text-gray-200 " key={items.name}>
                  <Link className="flex gap-2" href={items.href}>
                  <ArrowRight className=" w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 "/>
                  {items.name}
                  </Link>
              </li>
            ))}
           </ul>
           </div> */}
          </div>

          {/* Services - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-6 text-green-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((items) => (
                <li key={items.name}>
                  <Link
                    href={items.href}
                    className="text-gray-300 hover:text-green-400 hover:translate-x-3 transition transform duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Horizontal layout on mobile */}
          <div className="flex flex-col lg:flex-col">
            {/* Contact Us Section */}
            <div className="flex-1 mb-8 lg:mb-0">
              <h3 className="text-lg font-bold mb-6 text-green-400 text-center md:text-left">Contact Us</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                      {contact.icon}
                    </div>
                    <span className="text-sm sm:text-base">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup - Side by side with Contact on mobile */}
            <div className="flex-1">
              <h4 className="font-semibold mb-4 text-center md:text-left">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 transition-colors duration-300 text-center sm:text-left placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} RGX Technical Research. All rights reserved.
            </div>
            <div className=" text-gray-300 text-l font-bold">
              Coded and Crafted by <span className="text-green-400"> TradeBox</span> 
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;