import { useSpring, animated } from '@react-spring/web';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 20 },
  });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <animated.div style={fadeIn}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get in touch with us for any queries or information about our courses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-m font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-m font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-m font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900">Phone</h3>
                    <p className="text-gray-600">+91 1234567890</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900">Email</h3>
                    <p className="text-gray-600">info@uddeshya.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900">Address</h3>
                    <p className="text-gray-600">123 Education Street, Learning City, 123456</p>
                  </div>
                </div>
              </div>

              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13597.352245741248!2d83.2478495!3d25.8359912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991ea61887547cd%3A0x8532f74b00fa3d7a!2sBongariya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711812345678!5m2!1sen!2sin"
                 width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
}