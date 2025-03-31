import { useSpring, animated } from '@react-spring/web';
import { Video, BookOpen, Users, Trophy, Clock, Star } from 'lucide-react';

export default function Features() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 20 },
  });

  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live Online Classes",
      description: "Interactive live sessions with expert faculty members"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Study Materials",
      description: "Comprehensive study materials and practice papers"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Learn from experienced and qualified teachers"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Track Record",
      description: "Coming Soon ..."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Timing",
      description: "Choose from multiple batches as per your convenience Morning Evening Both"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Personal Attention",
      description: "Individual attention to every student for guided learning"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <animated.div style={fadeIn}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-lg3xl mx-auto">
              Discover what makes Uddeshya competitive Classes the preferred choice for Boards & competitive exam preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl transition-transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </section>
  );
}