import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 20 },
  });

  const images = [
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Classroom Sessions"
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Interactive Learning"
    },
    {
      url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Study Materials"
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      title: "Group Discussions"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <animated.div style={fadeIn}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Gallery</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            हमारी क्लासरूम, पढ़ाई का माहौल और छात्रों की मेहनत की झलक यहां देखें।  <br/>
            See our classrooms, learning environment, and student efforts here.
            </p>
          </div>
         
{/* <p className="text-gray-600">   
  हमारे छात्रों ने कड़ी मेहनत से अपने सपनों को पूरा किया। उनकी कहानियां आपको आगे बढ़ने की प्रेरणा देंगी।  
  Our students have worked hard to achieve their dreams. Their stories will inspire you to move forward.  
</p> */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold">{images[currentIndex].title}</h3>
              </div>
            </div>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-purple-900 hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-purple-900 hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-purple-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
}