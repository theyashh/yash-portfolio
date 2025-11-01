import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import skillscapital from "../assets/skillscapital.jpg";
import ineuron from "../assets/ineuron.jpg";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "SkillsCapital",
      logo: skillscapital,
      // website: "https://www.deltait.co.in/contact-us/",
      year: "2025",
      skills: [
        "Frontend Development",
        "Design Engineering",
        "Deployment & Maintenance",
      ],
      project: "Industry Log Management & Employee Management",
      duration: "6 months",
      desc: "Built and deployed responsive web apps using Vite+React.js.Integrated RESTful APIs to enhance functionality and performance.Optimized UI for speed, scalability, and cross-device compatibility.Delivered multiple production-ready projects within deadlines.",
    },
    {
      role: "Frontend Developer Intern",
      company: "ineuron.ai",
      logo: ineuron,
      website: "https://ineuron.ai/",
      year: "2024",
      skills: [
        "React.js",
        "Tailwind CSS",
        "API Integration",
        "CRUD Operations using SQL",
      ],
      project: "Health and Diet Website",
      duration: "2 months",
      desc: "At ineuron, I contributed to designing and developing interactive UI components for a health diet website. I implemented responsive design, improved user experience, and worked closely with backend developers to integrate real-time data.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text text-center">
        Experience
      </h2>

      <div className="flex flex-col gap-10 w-full max-w-5xl">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative frosted-card p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,150,255,0.4)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header with Logo and Company */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-1">
                  {exp.role}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  {exp.company} • {exp.year}
                </p>
              </div>
              <motion.a
                href={exp.website}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(14,165,233,0.7)] transition-all duration-300"
                />
              </motion.a>
            </div>

            {/* Expand/Collapse Section */}
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
                      <strong>Skills Learned:</strong> {exp.skills.join(", ")}
                    </p>
                    <p>
                      <strong>Project:</strong> {exp.project}
                    </p>
                    <p>
                      <strong>Duration:</strong> {exp.duration}
                    </p>
                    <p className="pt-2 text-justify">{exp.desc}</p>
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
                  {exp.desc}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Button */}
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="glass-btn mt-6 flex items-center justify-left gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 mx-auto"
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
          </motion.div>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .frosted-card {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(18px) saturate(180%);
          -webkit-backdrop-filter: blur(18px) saturate(180%);
          box-shadow:
            0 8px 32px rgba(31, 38, 135, 0.37),
            inset 0 0 10px rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .frosted-card:hover {
          transform: translateY(-6px);
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
