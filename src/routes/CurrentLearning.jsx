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

  // Card animation: slide from right
  const cardVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.25, 0.8, 0.25, 1],
      },
    }),
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{ marginTop: "20px" }}
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-14 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text text-center">
        Learning & Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {learningData.map((item, i) => (
          <motion.div
            key={i}
            className="relative frosted-card p-8 rounded-2xl border transition-all duration-500"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {/* Card Header */}
            <div className="flex justify-between items-start gap-3">
              <h3 className="text-2xl font-bold text-blue-500">{item.title}</h3>
              <motion.button
                onClick={() => setExpanded(expanded === i ? null : i)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.07 }}
                className="glass-btn flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expanded === i ? (
                    <CloseIcon fontSize="small" />
                  ) : (
                    <ExpandMoreIcon fontSize="small" />
                  )}
                </motion.div>
                {expanded === i ? "Collapse" : "Expand"}
              </motion.button>
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  key="expanded"
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden mt-4"
                >
                  <motion.ul
                    className="flex flex-wrap gap-3 mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: { staggerChildren: 0.08 },
                      },
                    }}
                  >
                    {item.items.map((sub, index) =>
                      typeof sub === "string" ? (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          className="px-4 py-2 text-sm rounded-full glass-skill"
                        >
                          {sub}
                        </motion.li>
                      ) : (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        >
                          <a
                            href={sub.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 underline hover:text-cyan-400 transition-all duration-300"
                          >
                            {sub.name}
                          </a>
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                  <p className="text-gray-700 dark:text-gray-300 text-justify">
                    {item.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Collapsed Preview */}
            {expanded !== i && (
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
          </motion.div>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .frosted-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          box-shadow:
            0 10px 25px rgba(14, 165, 233, 0.25),
            inset 0 0 10px rgba(255, 255, 255, 0.15);
          transition: all 0.4s ease-in-out;
        }

        .frosted-card:hover {
          box-shadow:
            0 0 30px rgba(14, 165, 233, 0.4),
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
          background: rgba(13, 17, 23, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
