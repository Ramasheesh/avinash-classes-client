import {
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
  Send,
  Download,
} from "lucide-react";
// import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube, FaTelegram } from "react-icons/fa";
// import { Download } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const courses = [
    { name: "6th to 9th class", href: "#" },
    { name: "9th to 12th class", href: "#" },
    { name: "Foundation Course", href: "#" },
    { name: "Crash Course", href: "#" },
  ];

  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Uddeshya Mantra Classes</h3>
            <p className="text-gray-200 text-lg mb-6">
              Transforming education through innovation and excellence.
            </p>
            <button className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-300 transition-colors">
              <Download className="w-5 h-5" />
              Download App
            </button>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-200 text-m px-3 py-2 rounded-md transition-all duration-300 hover:bg-yellow-300 hover:text-purple-900 hover:scale-105 hover:shadow-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-gray-200 text-m px-3 py-2 rounded-md transition-all duration-300 hover:bg-yellow-300 hover:text-purple-900 hover:scale-105 hover:shadow-lg"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-100 mb-6">
              Connect With Us
            </h4>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start space-x-6 mb-6">
                <a
                  href="https://whatsapp.com/channel/0029Va9sYMR6mYPPJkUqFc1h"
                  target="_blank"
                  className="text-gray-300 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
                >
                  <MessageCircle className="w-8 h-8" />
                </a>
                <a
                  href="https://youtube.com/@uddeshyacompetitiveclasses3525?si=RKJJzKcWKsW0_H5X"
                  className="text-gray-300 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Youtube className="w-8 h-8" />
                </a>
                <a
                  href="https://www.instagram.com/uddeshya_competitive_classes?igsh=eDUxc3U5ZHBpa2tq"
                  className="text-gray-300 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a
                  href="https://t.me/uddeshyacompetitiveclasses"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Send className="w-8 h-8" />
                </a>
                <a
                  href="https://www.facebook.com/groups/2760783284213518/?ref=share&mibextid=NSMWBT"
                  className="text-gray-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=org.crmind.xyzythfhj&hl=en_IN&gl=US"
                  target="_blank"
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
                >
                  {/* <playstore className="w-8 h-8" /  > */}
                  <img
                    src="/classes.svg"
                    alt="My App"
                    className="w-6 h-6 rounded-full"
                  />
                </a>
               
              </div>

              {/* Contact Info */}
              <p className="text-gray-300 text-m leading-relaxed">
                📧 <strong>Email:</strong>
                <a
                  href="mailto:avinashchauhan761@gmail.com"
                  className="hover:text-yellow-400 transition-colors text-m"
                >
                  {" "}
                  avinashchauhan761@gmail.com
                </a>
                <br />
                📞 <strong>Phone:</strong>
                <a
                  href="tel:+6387892863"
                  className="hover:text-yellow-400 transition-colors text-m"
                >
                  {" "}
                  +91 6387892863
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Uddeshya Mantra Classes. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
