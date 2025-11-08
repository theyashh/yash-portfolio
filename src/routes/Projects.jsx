import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

import anprImg from "../assets/anpr.jpeg";
import edupathImg from "../assets/edupath.jpg";
import parkingImg from "../assets/parking.png";
import resumeImg from "../assets/portfolio.png";
import shoppyImg from "../assets/shoppy.jpeg";

const demo = [
  {
    id: 1,
    title: "ANPR System",
    excerpt:
      "AI-powered Automated Number Plate Recognition and Smart Parking Management.",
    image: anprImg,
    stack: ["YOLOv10", "EasyOCR", "NLP", "SQL"],
    details: {
      github: "https://github.com/YOUR_USERNAME/ANPR-System",
      report: "https://drive.google.com/YOUR_REPORT_LINK",
      subHeadings: [
        "Overview",
        "Motivation",
        "Technologies & Architecture",
        "Implementation",
        "Challenges",
        "Results",
        "Conclusion",
      ],
      paragraph: `
The Automatic Number Plate Recognition (ANPR) System is an intelligent computer-vision-based solution designed to modernize urban parking management. 
It leverages real-time vehicle detection and OCR to automate entry, exit, and slot allocation processes—reducing human error and improving operational efficiency in crowded urban spaces.
      `,
      sections: {
        Overview: `
Urban parking facilities often face congestion, inefficient manual entry systems, and limited automation. 
Our ANPR project integrates **YOLOv8** for vehicle detection and EasyOCR for license plate recognition to automate this process.`,
        Motivation: `
The motivation stems from the growing challenges of urbanization—delays, mismanagement, and security risks in traditional parking systems.`,
        "Technologies & Architecture": `
YOLOv10, EasyOCR, NLP, and SQL form the system core for real-time detection and logging.`,
        Implementation: `
YOLOv10 detects plates, EasyOCR extracts text, and SQL manages the data.`,
        Challenges: `
• Handling motion blur and lighting variations.  
• Ensuring privacy and model accuracy.`,
        Results: `
• 96.3% detection accuracy  
• 94.8% OCR accuracy  
• 0.32s/frame performance.`,
        Conclusion: `
A scalable AI-based parking automation framework with planned IoT and cloud integration.`,
      },
    },
  },
  {
    id: 2,
    title: "EduPath",
    excerpt: "An education platform with courses, quizzes, and live search.",
    image: edupathImg,
    stack: ["React", "Node.js", "MongoDB", "Express"],
    details: {
      github: "https://github.com/YOUR_USERNAME/EduPath",
      report: "https://drive.google.com/YOUR_REPORT_LINK",
      subHeadings: ["Features", "Frontend", "Backend", "Database", "Outcome"],
      paragraph:
        "EduPath is a MERN-based platform similar to Udemy. It includes course listings, live search, profile management, and progress tracking.",
    },
  },
  {
    id: 3,
    title: "Resume Analyser",
    excerpt: "AI-based resume screening and keyword scoring system.",
    image: resumeImg,
    stack: ["Python", "Streamlit", "NLP", "Spacy"],
    details: {
      github: "https://github.com/YOUR_USERNAME/Resume-Analyser",
      report: "https://drive.google.com/YOUR_REPORT_LINK",
      subHeadings: ["Goal", "Model", "Accuracy", "Performance", "Deployment"],
      paragraph:
        "Developed an AI-powered web app using NLP to extract keywords from resumes and match them with job descriptions. Achieved over 95% accuracy.",
    },
  },
  {
    id: 4,
    title: "Smart Parking",
    excerpt: "IoT and CV-based parking automation system.",
    image: parkingImg,
    stack: ["YOLOv8", "OpenCV", "Flask", "SQLite"],
    details: {
      github: "https://github.com/YOUR_USERNAME/Smart-Parking",
      report: "https://drive.google.com/YOUR_REPORT_LINK",
      subHeadings: ["Setup", "Detection", "Database", "Results", "Use Case"],
      paragraph:
        "This smart parking system detects vehicles and assigns slots in real time using YOLOv8 and OpenCV, integrated with Flask backend.",
    },
  },
  {
    id: 5,
    title: "Shoppy",
    excerpt: "Full-stack e-commerce web app with user authentication.",
    image: shoppyImg,
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    details: {
      github: "https://github.com/YOUR_USERNAME/Shoppy",
      report: "https://drive.google.com/YOUR_REPORT_LINK",
      subHeadings: ["Frontend", "Backend", "Database", "Features", "Outcome"],
      paragraph:
        "Built a complete e-commerce platform using PHP and MySQL with cart, login system, and order tracking functionality.",
    },
  },
];

export default function Projects() {
  const [open, setOpen] = useState(null);
  const selected = demo.find((p) => p.id === open);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ marginTop: "50px" }}
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text">
        Projects
      </h2>

      <div className="flex flex-col gap-10 w-full max-w-5xl">
        {demo.map((p, index) => (
          <motion.div
            key={p.id}
            className="relative frosted-card p-8 rounded-2xl border transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,150,255,0.4)]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.img
                src={p.image}
                alt={p.title}
                className="w-full md:w-[45%] rounded-2xl object-cover shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              <div className="w-full md:w-[55%] space-y-3">
                <h3 className="text-2xl font-bold text-blue-500">{p.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{p.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border rounded-full text-blue-400 border-blue-400/40 bg-white/20 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4 flex-wrap">
                  <motion.a
                    href={p.details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.07 }}
                    className="glass-btn flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    <GitHubIcon fontSize="small" /> GitHub
                  </motion.a>
                  <motion.a
                    href={p.details.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.07 }}
                    className="glass-btn flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    <DescriptionIcon fontSize="small" /> Report
                  </motion.a>
                  <motion.button
                    onClick={() => setOpen(p.id)}
                    whileHover={{ scale: 1.05 }}
                    className="glass-btn flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300"
                  >
                    <ExpandMoreIcon fontSize="small" /> Read More
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/0 dark:bg-black/0 backdrop-blur-md p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative mt-20 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border transition-all duration-300 
              bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl 
              border-gray-200/40 dark:border-white/20"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 text-gray-800 dark:text-gray-300 hover:text-red-400 transition-all duration-200 z-10"
              >
                <CloseIcon fontSize="medium" />
              </button>

              <div className="max-h-[85vh] overflow-y-auto scrollbar-hide p-6 sm:p-10">
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text mb-6">
                  {selected.title}
                </h3>

                <div className="flex flex-wrap gap-3 mb-6">
                  <motion.a
                    href={selected.details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.07 }}
                    className="glass-btn flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    <GitHubIcon fontSize="small" /> GitHub
                  </motion.a>
                  <motion.a
                    href={selected.details.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.07 }}
                    className="glass-btn flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    <DescriptionIcon fontSize="small" /> Project Report
                  </motion.a>
                </div>

                <motion.img
                  src={selected.image}
                  alt={selected.title}
                  className="rounded-2xl w-full object-cover mb-6 shadow-[0_0_40px_rgba(0,150,255,0.25)]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {selected.details.paragraph}
                </p>

                <div className="space-y-4">
                  {selected.details.subHeadings.map(
                    (sh, i) =>
                      selected.details.sections && (
                        <motion.div
                          key={i}
                          className="border rounded-xl p-4 bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm"
                          whileHover={{ scale: 1.02 }}
                        >
                          <details>
                            <summary className="cursor-pointer text-blue-600 dark:text-cyan-300 font-semibold">
                              {sh}
                            </summary>
                            <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed whitespace-pre-line">
                              {selected.details.sections[sh]}
                            </p>
                          </details>
                        </motion.div>
                      )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .frosted-card {
          background: rgba(255, 255, 255, 0);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(25px) saturate(180%);
          border-radius: 22px;
          box-shadow: 0 10px 30px rgba(31, 38, 135, 0.3),
                      inset 0 0 10px rgba(255, 255, 255, 0.15);
          transition: all 0.4s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .frosted-card:hover {
          box-shadow: 0 0 25px rgba(14, 165, 233, 0.4),
                      inset 0 0 10px rgba(14, 165, 233, 0.3);
          transform: scale(1.01);
        }

        .glass-btn {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #0ea5e9;
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
          transition: all 0.3s ease-in-out;
        }

        .glass-btn:hover {
          box-shadow: 0 0 25px rgba(14, 165, 233, 0.7),
                      inset 0 0 12px rgba(14, 165, 233, 0.3);
          transform: scale(1.07);
        }

        [data-theme='dark'] .frosted-card {
          background: rgba(13, 17, 23, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
