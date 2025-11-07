import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

export default function CurrentLearning() {
  const [expanded, setExpanded] = useState(null);

  const learningData = [
    {
      title: "💻 Technical Skills",
      items: [
        "Python",
        "Java",
        "JavaScript",
        "MERN Stack",
        "MySQL, MongoDB",
        "TensorFlow, YOLO",
      ],
      details:
        "Proficient in full-stack development with hands-on experience in scalable backend systems and modern frontend frameworks. Skilled in deep learning frameworks for computer vision applications.",
    },
    {
      title: "🛠 Tools",
      items: ["Git / GitHub", "VS Code", "Figma"],
      details:
        "Efficient in version control using Git & GitHub, and experienced with modern developer tools like VS Code and Figma for UI/UX prototyping.",
    },
    {
      title: "🌐 Languages",
      items: ["English (Fluent)", "Hindi (Native)"],
      details:
        "Comfortable communicating technical ideas and collaborating with teams in both English and Hindi.",
    },
    {
      title: "📜 Certifications",
      items: [
        {
          name: "MERN Stack Completion Certificate",
          link: "https://example.com/mern-certificate",
        },
        {
          name: "Database Foundation Course",
          link: "https://example.com/db-foundation",
        },
        {
          name: "Database Programming with SQL",
          link: "https://example.com/db-sql",
        },
        {
          name: "Introduction to Web Development",
          link: "https://example.com/webdev",
        },
      ],
      details:
        "Successfully completed multiple certifications in MERN Stack, Databases, and Web Development fundamentals to strengthen both frontend and backend expertise.",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ marginTop: "50px" }}
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text">
        Learning & Skills
      </h2>

      <div className="flex flex-col gap-10 w-full max-w-4xl">
        {learningData.map((item, i) => (
          <motion.div
            key={i}
            className="relative frosted-card p-8 rounded-2xl border transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,150,255,0.4)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div>
                <h3 className="text-2xl font-bold text-blue-500 mb-2">
                  {item.title}
                </h3>
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
                    {item.items && Array.isArray(item.items) && (
                      <ul className="flex flex-wrap gap-3">
                        {item.items.map((sub, index) =>
                          typeof sub === "string" ? (
                            <li
                              key={index}
                              className="px-4 py-2 text-sm rounded-full glass-skill"
                            >
                              {sub}
                            </li>
                          ) : (
                            <li key={index}>
                              <a
                                href={sub.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500 underline hover:text-cyan-400 transition-all duration-300"
                              >
                                {sub.name}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                    <p className="text-justify">{item.details}</p>
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
                  {item.details}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Glass Theme Styles */}
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
          .frosted-card:hover {
          // transform: perspective(900px) rotateX(0deg) rotateY(0deg) scale(1.05);
          // box-shadow:
          //   0 25px 45px rgba(31, 38, 135, 0.45),
          //   inset 0 0 15px rgba(255, 255, 255, 0.25);
          box-shadow:
            0 0 25px rgba(14, 165, 233, 0.4),
            inset 0 0 10px rgba(14, 165, 233, 0.3);
          transform: scale(1.01);
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

        .glass-skill {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          box-shadow:
            inset 0 0 8px rgba(255, 255, 255, 0.15),
            0 4px 20px rgba(0,150,255,0.3);
          transition: all 0.4s ease-in-out;
        }

        .glass-skill:hover {
          background: rgba(255, 255, 255, 0.3);
          box-shadow:
            inset 0 0 15px rgba(255,255,255,0.25),
            0 0 25px rgba(0,150,255,0.35);
          transform: translateY(-2px);
        }

        [data-theme='dark'] .frosted-card {
          background: rgba(13, 17, 23, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
