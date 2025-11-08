import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import sharda from "../assets/sharda.jpg";
import pc from "../assets/pc.png";
import sunshine from "../assets/sunshine.jpg";

export default function Education() {
  const [expanded, setExpanded] = useState(null);

  const educationData = [
    {
      title: "🎓 Graduation",
      degree: "B.Tech in Computer Science Engineering",
      institute: "Sharda University, Greater Noida",
      year: "2021 – 2025",
      score: "7.9 CGPA",
      majors:
        "Java, Python, Data Structures and Algorithm, DBMS, Computer networks, Operating System",
      details:
        "Focused on core Computer Science fundamentals like DBMS, OS, CN and advanced technologies like MERN, YOLOv10, and OCR. Completed major projects such as EduPath (MERN), Resume Analyzer, and Automated Parking System using YOLOv10 + OCR.",
      image: sharda,
      website: "https://www.sharda.ac.in/",
    },
    {
      title: "🏫 Higher Secondary Education",
      degree: "12th (Science Stream)",
      institute: "P. C. HIGH SCHOOL, PATSA, Samastipur",
      year: "2018 – 2020",
      score: "80%",
      majors: "Physics, Chemistry, Mathematics, Arts & Design",
      details:
        "Developed an early passion for designing and logical problem-solving while maintaining academic excellence.",
      image: pc,
      website: "https://www.pchighschool.co.in/",
    },
    {
      title: "📘 Secondary Education",
      degree: "10th Board Examination",
      institute: "Sun Shine School Dharha, Samastipur",
      year: "2017 – 2018",
      score: "80%",
      majors: "Science, Mathematics, English, Social Science",
      details:
        "Excelled in academics and actively participated in science exhibitions and public speaking activities.",
      image: sunshine,
      website: "https://www.sunshineschooldharha.org/",
    },
  ];

  // animation for cards sliding in from the right
  const cardVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.25, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{ marginTop: "50px" }}
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text">
        Education
      </h2>

      <div className="flex flex-col gap-10 w-full max-w-4xl z-10 relative">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            className="relative frosted-card p-8 rounded-2xl border transition-all duration-500"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div>
                <h3 className="text-2xl font-bold text-blue-500 mb-2">
                  {edu.title}
                </h3>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {edu.institute} • {edu.year}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.degree}
                </p>
              </div>

              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="glass-btn flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300"
              >
                {expanded === i ? (
                  <>
                    <CloseIcon fontSize="small" /> Collapse
                  </>
                ) : (
                  <>
                    <ExpandMoreIcon fontSize="small" /> Expand
                  </>
                )}
              </button>
            </div>

            <AnimatePresence>
              {expanded === i ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="text-gray-700 dark:text-gray-300 space-y-3">
                    <p>
                      <strong>Score:</strong> {edu.score}
                    </p>
                    <p>
                      <strong>Majors:</strong> {edu.majors}
                    </p>
                    <p className="text-justify">{edu.details}</p>

                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noreferrer"
                      className="block mt-4"
                    >
                      <img
                        src={edu.image}
                        alt={edu.institute}
                        className="w-full md:w-1/3 h-auto object-cover rounded-xl mt-2 shadow-[0_6px_18px_rgba(0,150,255,0.25)] hover:scale-[1.03] transition-transform duration-300"
                      />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.p
                  className="mt-4 text-gray-600 dark:text-gray-400 text-justify overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {edu.details}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <style>{`
        .frosted-card {
          background: rgba(255, 255, 255, 0);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(25px) saturate(180%);
          border-radius: 22px;
          box-shadow:
            0 10px 30px rgba(31, 38, 135, 0.3),
            inset 0 0 10px rgba(255, 255, 255, 0.15);
          transform-style: preserve-3d;
          transform: perspective(900px) rotateX(2deg) rotateY(-2deg);
          transition: all 0.4s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .frosted-card:hover {
          box-shadow:
            0 0 25px rgba(14, 165, 233, 0.4),
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
          box-shadow:
            0 0 25px rgba(14, 165, 233, 0.7),
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
