import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Features from './components/Features';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Notice from './components/Notice';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Gallery />
      <Notice />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;