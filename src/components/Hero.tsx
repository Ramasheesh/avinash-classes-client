import { useSpring, animated } from "@react-spring/web";
import { ArrowRight, BookOpen, Users, Trophy, Clock } from "lucide-react";

export default function Hero() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 280, friction: 20 },
  });
  const scrollToCourses = () => {
    const element = document.getElementById("courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "1000+", label: "Students" },
    { icon: <BookOpen className="w-6 h-6" />, value: "50+", label: "Courses" },
    {
      icon: <Trophy className="w-6 h-6" />,
      value: "95%",
      label: "Success Rate",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "10+",
      label: "Years Experience",
    },
  ];
  

  return (
    <>
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-purple-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <animated.div
            style={fadeIn}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="text-white">
              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                Your Path to <span className="text-yellow-400">Success</span>{" "}
                Starts Here
              </h1>
              <p className="mt-4 text-sm font-semibold text-yellow-300 tracking-wide [word-spacing:4px] leading-relaxed">
              🎓 श्रेष्ठ शिक्षा, सुनहरा भविष्य! <br /> उद्देश्य कॉम्पिटिटिव
              क्लासेस में हम छात्रों
              को गुणवत्तापूर्ण शिक्षा और आधुनिक लर्निंग टेक्निक्स के माध्यम से
              उनके सपनों को साकार करने में मदद करते हैं। <br />✅ अनुभवी शिक्षकों का
              मार्गदर्शन<br /> ✅ स्मार्ट क्लासरूम – टेक्नोलॉजी आधारित पढ़ाई <br />✅ बोर्ड और प्रतियोगी
              परीक्षाओं की तैयारी <br />✅ मॉडर्न स्टडी मटेरियल और टेस्ट सीरीज
              </p>
              <div className="mt-10 px-8 py-2 flex flex-wrap gap-6">
                <button className="bg-yellow-400 text-purple-900 px-8 py-2 rounded-[10px] font-semibold text-m flex items-center gap-2 hover:bg-yellow-300 transition-colors">
                  <a href="https://play.google.com/store/apps/details?id=org.crmind.xyzythfhj&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">
                  Start Learning 
                  </a>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={scrollToCourses} className="border-2 border-white text-white px-8 py-4 rounded-[10px] font-semibold text-m hover:bg-white/10 transition-colors">
                  Free Demo Class
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Students studying"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </animated.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-purple-900">
                  {stat.value}
                </div>
                <div className="text-gray-600 bg-gray  mt-2 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
