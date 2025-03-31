
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';

import { Calendar, ClipboardList, Award, BookOpen, Link } from "lucide-react";


// Example code for uploading a PDF
// const formData = new FormData();
// formData.append('file', document.getElementById('fileInput').files[0]);
// formData.append('title', 'Physics Notes Chapter 3');
// formData.append('description', 'Notes for wave mechanics');
// formData.append('formId', 'your_google_form_id');
// formData.append('contentType', 'notes');

// fetch('/api/upload-content', {
//   method: 'POST',
//   body: formData
// })
// .then(response => response.json())
// .then(data => console.log('Upload successful:', data))
// .catch(error => console.error('Error uploading:', error));


export default function Notice() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 20 },
  });
  const notices = [
    "📢 School will remain closed on April 5th due to maintenance.",
    "📝 Admission forms for new students are available till April 10th.",
    "🎉 Annual Sports Meet on April 15th! Register now!",
  ];

  const exams = [
    { subject: "Mathematics", date: "April 20, 2025" },
    { subject: "Physics", date: "April 22, 2025" },
    { subject: "Chemistry", date: "April 25, 2025" },
  ];

  const results = {
    "10th Grade": "Released on March 10, 2025",
    "12th Grade": "Released on March 15, 2025",
    "Competitive Exams": "Results will be updated soon",
  };

  const studyMaterials = [
    { name: "10th Grade Notes", link: "#" },
    { name: "12th Grade Notes", link: "#" },
    { name: "Competitive Exam Notes", link: "#" },
  ];

  const sections = [
    {
      icon: <ClipboardList className="w-8 h-8" />, 
      title: "Latest Notices", 
      items: notices
    },
    {
      icon: <Calendar className="w-8 h-8" />, 
      title: "Upcoming Exams", 
      items: exams.map(exam => `${exam.subject} - ${exam.date}`)
    },
    {
      icon: <Award className="w-8 h-8" />, 
      title: "Exam Results", 
      items: Object.entries(results).map(([grade, date]) => `${grade}: ${date}`),
      link: "https://www.sarkariresult.com/"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Study Materials",
      items: studyMaterials.map(material => (
        <a href={material.link} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          {material.name}
        </a>
      )),
    },
  ];

  return (
    <section id="notice" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <animated.div style={fadeIn}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Notice Board</h2>
            <p className="text-gray-600 text-lg max-w-lg mx-auto">
              Stay updated with the latest notices, upcoming exams, and exam results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-6">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">{section.title}</h3>
                <ul className="text-gray-600 space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="bg-purple-200 p-2 rounded-lg shadow-md hover:bg-purple-300">
                      {item}
                    </li>
                  ))}
                </ul>
                {section.link && (
                  <a
                    href={section.link}
                    className="block mt-4 text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Results
                  </a>
                )}
            </motion.div>

            ))}
          </div>
        </motion.div>
</animated.div>
      </div>
    </section>
  );
}

