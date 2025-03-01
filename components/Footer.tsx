// import React from "react";
// import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import Image from "next/image";
// import logo from "@/public/assets/Images/tu-red.png";

// const Footer = () => {
//   return (
//     <div className="relative w-full bg-black text-white py-10 px-6 md:px-12 overflow-hidden">
//       {/* Floating Stars */}
//       <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30"></div>

//       {/* Footer Content */}
//       <div className="flex flex-col items-center text-center relative z-10">
//         {/* Logo */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-purple-600 blur-xl rounded-full w-16 h-16"></div>
//           <Image src={logo} alt="logo" width={60} height={60} className="relative" />
//         </div>

//         {/* Heading & Text */}
//         <h1 className="text-2xl md:text-3xl font-bold mt-4">REGISTER NOW</h1>
//         <p className="text-gray-400 text-sm mt-2">All set?? Join the future of AI & ML!</p>

//         {/* Register Button */}
//         <a
//           href="/register"
//           className="mt-6 bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition"
//         >
//           Register Now...
//         </a>

//         {/* Social Media Icons */}
//         <div className="flex gap-4 mt-6">
//           <a href="#" className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition">
//             <FaTwitter />
//           </a>
//           <a href="#" className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition">
//             <FaInstagram />
//           </a>
//           <a href="#" className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition">
//             <FaLinkedinIn />
//           </a>
//         </div>

//         {/* WhatsApp Floating Button */}
//         <a
//           href="https://wa.me/YOUR_NUMBER"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed top-10 right-10 flex items-center gap-2 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
//         >
//           <FaWhatsapp />
//           Ask on WhatsApp
//         </a>

//         {/* Copyright */}
//         <p className="text-gray-500 text-sm mt-8">© {new Date().getFullYear()} Bharat-Tech-Xperience @TheUniques</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/assets/Images/tu-red.png";

const Footer = () => {
  return (
    <footer className="w-full relative bg-black text-white py-12 px-6 md:px-12 ">
      {/* Floating Stars Background */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Company Info - Left Aligned */}
          <div className="flex flex-col">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 bg-purple-600 blur-xl rounded-full"></div>
              <Image
                src={logo}
                alt="Company Logo"
                width={60}
                height={60}
                className="relative"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 mt-4">AI/ML Convention 2025</h3>
            <p className="text-gray-400 text-sm mb-4">
              Pioneering the future of AI & ML technologies with innovative solutions.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center justify-center w-fit bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition"
            >
              Register Now
            </Link>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About 
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  Ideathon
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Swami Vivekanand Group of Institutes
                  <br />
                  Banur Chadigarh, 140401
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition">
                  +91 6204923453
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <a href="mailto:info@bharattechx.com" className="text-gray-400 hover:text-white transition">
                  info@uniques.in
                </a>
              </li>
              <li className="flex items-center">
                <WhatsApp className="w-5 h-5 text-gray-400 mr-2" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Connect With Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow us on social media to stay updated with the latest tech trends and events.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI/ML Convention@TheUniques. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

