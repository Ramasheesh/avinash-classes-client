import { useSpring, animated } from "@react-spring/web";
import { Clock, Users, Video, BookOpen } from "lucide-react";


export default function Courses() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 280, friction: 20 },
  });
  // const navigate = useNavigate();

  // const handleBuy = () => {
  //   navigate("/login"); // Login page pe le jayega
  // };

  const onlineCourses = [
    {
      title: "9th class Preparation",
      price: "₹299",
      Registration: "Start from 20th April",
      duration: "6 months",
      students: "50+",
      image:"./src/assets/9th_class.jpg"    
    },
    {
      title: "CLASS 10th Sankal-Batch(Registration Start)",
      price: "₹499",
      duration: "10 months",
      students: "200+",
      image:"./src/assets/10th_sn.jpg"
    },
    {
      title: "CLASS 12th Complete Physics Preparation",
      price: "₹399",
      duration: "9 months",
      students: "300+",
      image:"./src/assets/12th_phh.jpg"
    },
    {
      title: "CLASS 12th English Basic to Advance",
      price: "₹399",
      duration: "9 months",
      students: "300+",
      image:"./src/assets/12th_Eng.jpg"
    },
    {
      title: "CLASS 11th English Grammar Preparation",
      price: "₹399",
      duration: "9 months",
      students: "400+",
      image:"./src/assets/11th_grammar.jpg"
    },
  ];

  const offlineCourses = [
    {
      title: "CLASS 12th Complete Physics Preparation",
      price: "Free Now",
      duration: "9 months",
      students: "300+",
      image:"./src/assets/12th_phh.jpg"
    },
    {
      title: "Foundation Course coming soon...",
      price: "₹1000",
      duration: "12 months",
      students: "300+",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Crash Course coming soon...",
      price: "₹299",
      duration: "3 months",
      students: "200+",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const CourseCard = ({ course, type }) => (
    <div className="bg-white rounded-2xl shadow-m overflow-hidden transition-transform hover:scale-105">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-30 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-purple-900">{course.title}</h3>
          <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
            {type}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{course.students}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-900">
            {course.price}
          </span>
          <button className="bg-purple-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-800 transition-colors">
            <a href="https://play.google.com/store/apps/details?id=org.crmind.xyzythfhj&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">
              Buy Now 
            </a> 
          </button>
         
          {/* <button onClick={handleBuy} className="bg-purple-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-800 transition-colors">
            Buy Now
          </button> */}
        </div>
      </div>
    </div>
  );

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <animated.div style={fadeIn}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              📚 Our Courses | हमारे कोर्स
            </h2>
            <p className="text-gray-600 text-m">
              We offer online and offline courses to help you succeed in
              competitive exams. Choose the course that best fits your needs.
            </p>
            <p className="text-gray-600 text-m">
              हमारे पास ऑनलाइन और ऑफलाइन कोर्स हैं, जो आपको प्रतियोगी परीक्षाओं
              में सफलता पाने में मदद करेंगे। अपनी जरूरत के अनुसार कोर्स चुनें।
              <br />
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-purple-900 mb-8 flex items-center gap-2">
              <Video className="w-6 h-6" />
              <strong>Online Courses | ऑनलाइन कोर्स</strong> 
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {onlineCourses.map((course, index) => (
                <CourseCard key={index} course={course} type="Online" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-900 mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              <strong>Offline Courses | ऑफलाइन कोर्स</strong>  
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {offlineCourses.map((course, index) => (
                <CourseCard key={index} course={course} type="Offline" />
              ))}
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
