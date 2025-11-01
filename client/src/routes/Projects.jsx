import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

import anprImg from "../assets/anpr.jpeg";
import edupathImg from "../assets/edupath.jpg";
import parkingImg from "../assets/parking.png";
import resumeImg from "../assets/portfolio.png";
import shoppyImg from "../assets/shoppy.jpeg";

const demo = [
  {
    id: 1,
    title: "ANPR System",
    excerpt: "Automatic number plate recognition system for smart parking.",
    image: anprImg,
    stack: ["YOLOv10", "PaddleOCR", "Node.js", "SQLite"],
    details: {
      subHeadings: [
        "Overview",
        "Technologies Used",
        "Database",
        "Challenges",
        "Results",
      ],
      paragraph:
        "This project detects and recognizes vehicle number plates using YOLOv10 for detection and PaddleOCR for character recognition. Integrated with Node.js backend and SQLite to store recognized numbers and dynamically assign parking slots.",
      university: "Sharda University, Greater Noida",
      website: "https://www.sharda.ac.in/",
    },
  },
  {
    id: 2,
    title: "EduPath",
    excerpt: "An education platform with courses, quizzes, and live search.",
    image: edupathImg,
    stack: ["React", "Node.js", "MongoDB", "Express"],
    details: {
      subHeadings: ["Features", "Frontend", "Backend", "Database", "Outcome"],
      paragraph:
        "EduPath is a MERN-based platform similar to Udemy. It includes course listings, live search, profile management, and progress tracking.",
      university: "Sharda University, Greater Noida",
      website: "https://www.sharda.ac.in/",
    },
  },
  {
    id: 3,
    title: "Resume Analyser",
    excerpt: "AI-based resume screening and keyword scoring system.",
    image: resumeImg,
    stack: ["Python", "Streamlit", "NLP", "Spacy"],
    details: {
      subHeadings: ["Goal", "Model", "Accuracy", "Performance", "Deployment"],
      paragraph:
        "Developed an AI-powered web app using NLP to extract keywords from resumes and match them with job descriptions. Achieved over 95% accuracy.",
      university: "Sharda University, Greater Noida",
      website: "https://www.sharda.ac.in/",
    },
  },
  {
    id: 4,
    title: "Smart Parking",
    excerpt: "IoT and CV-based parking automation system.",
    image: parkingImg,
    stack: ["YOLOv8", "OpenCV", "Flask", "SQLite"],
    details: {
      subHeadings: ["Setup", "Detection", "Database", "Results", "Use Case"],
      paragraph:
        "This smart parking system detects vehicles and assigns slots in real time using YOLOv8 and OpenCV, integrated with Flask backend.",
      university: "Sharda University, Greater Noida",
      website: "https://www.sharda.ac.in/",
    },
  },
  {
    id: 5,
    title: "Shoppy",
    excerpt: "Full-stack e-commerce web app with user authentication.",
    image: shoppyImg,
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    details: {
      subHeadings: ["Frontend", "Backend", "Database", "Features", "Outcome"],
      paragraph:
        "Built a complete e-commerce platform using PHP and MySQL with cart, login system, and order tracking functionality.",
      university: "Sharda University, Greater Noida",
      website: "https://www.sharda.ac.in/",
    },
  },
];

export default function Projects() {
  const [open, setOpen] = useState(null);
  const selected = demo.find((p) => p.id === open);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{
        marginTop: "50px", // Adjust this if your navbar height differs
      }}
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

                <motion.button
                  onClick={() => setOpen(p.id)}
                  whileHover={{ scale: 1.05 }}
                  className="glass-btn mt-4 flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300"
                >
                  <ExpandMoreIcon fontSize="small" /> Read More
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-md p-4 pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative frosted-card max-w-3xl w-full p-6 rounded-2xl overflow-y-auto max-h-[85vh] scrollbar-hide"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
              >
                <CloseIcon />
              </button>

              <h3 className="text-2xl font-bold mb-2 text-blue-500">
                {selected.title}
              </h3>
              <h4 className="font-semibold text-blue-400 mb-1">
                {selected.details.university}
              </h4>
              <a
                href={selected.details.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-300 underline mb-3 inline-block"
              >
                Visit University Website
              </a>

              <p className="text-gray-300 mt-2">{selected.details.paragraph}</p>

              <div className="mt-4 space-y-2">
                {selected.details.subHeadings.map((sh, i) => (
                  <p key={i} className="text-gray-200 font-medium">
                    • {sh}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-col items-center">
                <img
                  src={selected.image}
                  alt={`${selected.title} project`}
                  className="rounded-xl w-full object-cover shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reuse same theme styles as Experience page */}
      <style>{`
        .frosted-card {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(18px) saturate(180%);
          -webkit-backdrop-filter: blur(18px) saturate(180%);
          box-shadow:
            0 8px 32px rgba(31, 38, 135, 0.37),
            inset 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .glass-btn {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #0ea5e9;
          box-shadow: 0 0 12px rgba(14, 165, 233, 0.3);
        }

        .glass-btn:hover {
          box-shadow:
            0 0 20px rgba(14, 165, 233, 0.5),
            inset 0 0 10px rgba(14, 165, 233, 0.3);
          transform: scale(1.05);
        }

        [data-theme='dark'] .frosted-card {
          background: rgba(13, 17, 23, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
