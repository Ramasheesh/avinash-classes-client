import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Scroll progress bar calculation
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = document.querySelectorAll("section");
      let current = "home"; // Default section
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Offset for better accuracy
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setEmailOrPhone("");
    setPassword("");
    setError("");
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login successful");
        closeModal();
      } else {
        setError(data.message || "Login failed");
      }
    } catch (setError) {
      setError("Server error. Please try again.");
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Notice", href: "#notice" },
    { name: "Gallery", href: "#gallery" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 text-lg font-semibold transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div
        className="h-1 bg-green-400 fixed top-0 left-0 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div
        className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${
          isScrolled ? "bg-purple-900/90 backdrop-lg" : "bg-transparent"
        } flex items-center justify-between h-20 transition-all duration-300`}
      >
        <a href="#home" className="text-4xl font-bold text-white">
          उद्देश्य प्रतियोगी क्लासेस
        </a>
        {/* <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }); }} className="text-4xl font-bold text-white">
          उद्देश्य क्लासेस
        </a> */}
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (        
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                if (link.href === "#home") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }
                setActiveSection(link.href.substring(1));
              }}
              className={`relative px-3 py-2 text-m font-medium transition-colors duration-300 group ${
                activeSection === link.href.substring(1) ? "text-green-400" : "text-gray-100"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transition-transform duration-300 ${
                  activeSection === link.href.substring(1) ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
          ))}
          <button
            className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-[10px] text-sm font-semibold flex items-center gap-2 hover:bg-yellow-300 transition-all"
            onClick={openModal}
          >
            <Download size={16} />
            Sign In
          </button>
          <button className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-[10px] text-sm font-semibold flex items-center gap-2 hover:bg-yellow-300 transition-all">
            <Download size={16} />
            Download App
          </button>
        </div>


        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
      </div>

      {/*signup & login */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
            <h2 className="text-xl font-bold mb-4  text-center">Sign Up / Login</h2>
            {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}
            <input
              type="text"
              placeholder="Email or Phone"
              className="w-full p-2 border rounded mb-3"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={handleLogin}>
              Submit
            </button>
            <button
              className="mt-3 w-full bg-gray-300 p-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Background Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-purple-700 z-50 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 pt-20 pb-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-md text-lg font-medium text-gray-200 hover:text-white hover:bg-yellow-400 shadow-md hover:text-gray-700 transition"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          {/* Download Button */}
          <button className="w-full bg-yellow-400 text-purple-900 px-4 py-3 rounded-full text-lg font-semibold flex items-center gap-2 justify-center hover:bg-yellow-300 transition-all shadow-md">
            <Download size={20} />
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
}
