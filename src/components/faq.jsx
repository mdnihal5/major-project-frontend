"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EnhancedCard } from "./ui/enhanced-card";

const faqs = [
  {
    question: "What programs does RGUKT-B offer?",
    answer:
      "RGUKT-B offers a wide range of undergraduate and postgraduate programs in engineering, sciences, and technology. Our flagship programs include B.Tech in Computer Science, Electronics and Communication, Mechanical Engineering, and Civil Engineering. We also offer M.Tech programs in various specializations and Ph.D. programs for advanced research. Our curriculum is designed to meet industry standards and prepare students for the challenges of the modern technological landscape.",
  },
  {
    question: "How can I apply to RGUKT-B?",
    answer:
      "The application process for RGUKT-B typically opens once a year. You can apply online through our official website. The selection is based on your performance in the qualifying examination (10+2 or equivalent) and an entrance test conducted by the university. We also consider factors like extracurricular activities and socio-economic background to ensure diversity in our student body. Keep an eye on our website and social media channels for announcements regarding application deadlines and procedures.",
  },
  {
    question: "What facilities are available on campus?",
    answer:
      "Our campus is equipped with state-of-the-art facilities to ensure a comprehensive learning experience. We have modern laboratories for each department, a central library with an extensive collection of books and digital resources, smart classrooms, and high-speed internet connection throughout the campus. For extracurricular activities, we have sports facilities including a gymnasium, indoor and outdoor game courts, and a swimming pool. We also provide comfortable hostel accommodation with mess facilities, a health center with 24/7 medical assistance, and various clubs and societies to enhance your skills beyond academics.",
  },
  {
    question: "Does RGUKT-B offer placement assistance?",
    answer:
      "Yes, RGUKT-B has a dedicated Training and Placement Cell that works tirelessly to provide placement assistance to our students. We have tie-ups with numerous multinational companies and a strong alumni network to support our placement efforts. Our placement cell organizes regular workshops, mock interviews, and soft skills training to prepare students for the job market. In the past years, we've achieved over 90% placement rates with students securing positions in top-tier companies across various sectors.",
  },
  {
    question:
      "Are there opportunities for research and internships at RGUKT-B?",
    answer:
      "RGUKT-B strongly encourages research and practical experience. We have several research centers focusing on cutting-edge technologies like Artificial Intelligence, Internet of Things, and Renewable Energy. Undergraduate students can participate in research projects under the guidance of faculty members. We also have a robust internship program with tie-ups with industry partners, allowing students to gain practical experience. Additionally, we support student participation in national and international conferences, hackathons, and technical competitions.",
  },
  {
    question: "What kind of financial aid or scholarships does RGUKT-B offer?",
    answer:
      "RGUKT-B is committed to making quality education accessible to all. We offer various scholarships based on merit, need, and specific categories (like sports quota, differently-abled students, etc.). These include tuition fee waivers, monthly stipends, and book allowances. We also facilitate education loans through tie-ups with banks and financial institutions. Additionally, we have a work-study program where students can work part-time on campus to support their education expenses.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    console.log(index);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <EnhancedCard
          key={index}
          
          title={
            <button
              className="w-full text-left focus:outline-none flex items-center justify-between"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5  ml-5 text-white" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-5  text-white" />
              )}
            </button>
          }
          gradient={openIndex==index?`bg-indigo-200 dark:bg-slate-700 `:`bg-indigo-200 dark:bg-slate-700 h-20 `}
        >
          <div
            className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        </EnhancedCard>
      ))}
    </div>
  );
}
