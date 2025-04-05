import { useSpring, animated } from "@react-spring/web";

export default function About() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 280, friction: 20 },
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <animated.div
          style={fadeIn}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-purple-900 mb-8">
              About Uddeshya Mantra Classes
            </h2>
            <p className="mt-10 text-sm font-semibold text-gray-600 tracking-wide leading-relaxed">
              <span className="text-blue-400">उद्देश्य कॉम्पिटिटिव
              क्लासेस</span> में हम
              छात्रों की
              <span className="text-black font-bold">
                {" "}
                प्रतिभा को निखारने
              </span>{" "}
              और उन्हें
              <span className="text-black font-bold">
                {" "}
                गुणवत्तापूर्ण शिक्षा
              </span>{" "}
              के माध्यम से
              <span className="text-black font-bold">
                {" "}
                उनके सपनों को साकार
              </span>{" "}
              करने में मदद करते हैं।
              <span className="font-bold text-blue-400">
                एक दशक से अधिक के अनुभव
              </span>{" "}
              के साथ, हमने
              <span className="font-bold text-blue-400">
                {" "}
                हजारों छात्रों
              </span>{" "}
              को
              <span className="text-black font-bold">
                {" "}
                अकादमिक और प्रतियोगी परीक्षाओं
              </span>{" "}
              में सफलता दिलाई है।
            </p>

            <p className="mt-4 text-sm font-semibold text-gray-600 tracking-wide leading-relaxed">
              हमारा संस्थान अपनी
              <span className="text-black font-bold">
                {" "}
                नवीन शिक्षण पद्धतियों, अनुभवी शिक्षकों
              </span>{" "}
              और
              <span className="text-black font-bold">
                {" "}
                संपूर्ण अध्ययन सामग्री
              </span>{" "}
              के लिए जाना जाता है, जो{" "}
              <span className="text-blue-400 font-bold">
                {" "}
                कक्षा 1 से 12वीं के छात्रों
              </span>{" "}
              और
              <span className="text-blue-400 font-bold">
                {" "}
                प्रतियोगी परीक्षाओं की तैयारी करने वाले अभ्यर्थियों
              </span>{" "}
              को
              <span className="text-black font-bold">
                {" "}
                सफलता की ओर मार्गदर्शन
              </span>{" "}
              करती है। 🚀
            </p>

            <p className="mt-4 text-sm font-semibold text-gray-600 tracking-wide leading-relaxed">
              हमारा उद्देश्य केवल{" "}
              <span className="text-black font-bold">
                {" "}
                पाठ्यक्रम समाप्त करना नहीं
              </span>
              , बल्कि
              <span className="text-black font-bold">
                {" "}
                समझ आधारित शिक्षा
              </span>{" "}
              देना है, जिससे छात्र
              <span className="text-black font-bold">
                {" "}
                हर विषय में निपुण
              </span>{" "}
              बन सकें।
              <span className="text-black font-bold">
                {" "}
                इंटरेक्टिव क्लासेस, नियमित टेस्ट और व्यक्तिगत मार्गदर्शन
              </span>{" "}
              के जरिए हम छात्रों को{" "}
              <span className="text-blue-400 font-bold">
                {" "}
                उनकी पूरी क्षमता तक पहुंचाने
              </span>{" "}
              में मदद करते हैं। यहां{" "}
              <span className="text-blue-600 font-bold">
                {" "}
                हर छात्र की सफलता हमारा लक्ष्य
              </span>{" "}
              है! ✨
            </p>

            {/* <p className="text-gray-600 text-lg mb-6">
              Our institute stands out for its innovative teaching methods, experienced faculty, and comprehensive study materials designed to ensure success in competitive exams.
            </p> */}
            <div className="grid grid-cols-2 mt-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-m font-semibold text-purple-900 mb-4 mt-2">
                  🎯 हमारा मिशन (Our Mission)
                </h3>
                <p className="text-gray-600">
                  {" "}
                  हम हर छात्र को अच्छी शिक्षा और सही मार्गदर्शन देकर उनकी पढ़ाई
                  और प्रतियोगी परीक्षाओं में सफलता पाने में मदद करना चाहते हैं।{" "}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-m font-semibold text-purple-900 mb-2">
                  🌟 हमारी दृष्टि (Our Vision)
                </h3>

                <p className="text-gray-600">
                  {" "}
                  हम शिक्षा में बेहतरीन बनना चाहते हैं, जहां हर छात्र को अच्छे
                  टीचर और नई तकनीकों के साथ बेहतर सीखने का मौका मिले।{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="About Uddeshya Mantra"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-purple-900 p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">8+ Years</p>
              <p className="text-sm">of Excellence</p>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
