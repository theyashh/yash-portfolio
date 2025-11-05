import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import cat from "../assets/cat.gif";

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const skills = [
    "Java",
    "C",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
  ];

  const gifUrl = "/assets/geeks.gif";
  const fallbackGif =
    "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif";

  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-all duration-500
  px-5 sm:px-8 md:px-14 pt-32 sm:pt-40 pb-28 sm:pb-40 w-full box-border 
      ${
        isDark
          ? "bg-gradient-to-br from-[#0a0f1a] via-[#111827] to-[#1e293b] text-gray-100"
          : "bg-gradient-to-br from-[#e0f7fa] via-[#cfe9ff] to-[#f5faff] text-gray-900"
      }`}
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/10 dark:bg-blue-300/10"
            style={{
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background GIF */}
      <div className="absolute inset-0 -z-20 opacity-15">
        <img
          src={gifUrl}
          onError={(e) => (e.currentTarget.src = fallbackGif)}
          alt="Geeky Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Frosted backdrop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute w-[85%] sm:w-[80%] h-[85%] rounded-3xl -z-10 frosted-home backdrop-blur-2xl border border-white/20 shadow-2xl"
      ></motion.div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
        <div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Hey, I’m <span className="text-blue-500">Yash Roy</span> —{" "}
            <ReactTyped
              strings={[
                "Software Engineer",
                "Full-Stack Developer",
                "Web Designer",
                "Tech Enthusiast",
                "Problem Solver",
              ]}
              typeSpeed={80}
              backSpeed={40}
              backDelay={1500}
              loop
              showCursor
              cursorChar="|"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className={`mb-8 text-sm sm:text-base md:text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I craft beautiful, scalable web applications using{" "}
            <strong>React</strong> and <strong>Node.js</strong>. Focused on
            seamless user experiences, optimization, and futuristic design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 mb-10"
          >
            {[
              { text: "Resume", href: "/Resume.pdf", link: false },
              { text: "Contact", href: "/contact", link: true },
            ].map((btn, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {btn.link ? (
                  <Link
                    to={btn.href}
                    className="block text-xs sm:text-sm px-4 py-2 rounded-[2rem] font-semibold glass-btn text-blue-600 dark:text-blue-300"
                  >
                    {btn.text}
                  </Link>
                ) : (
                  <a
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs sm:text-sm px-4 py-2 rounded-[2rem] font-semibold glass-btn text-blue-600 dark:text-blue-300"
                  >
                    {btn.text}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, staggerChildren: 0.1 },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-[2rem] font-medium glass-skill text-blue-600 dark:text-blue-300 select-none cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated Developer GIF */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <motion.div
            className={`backdrop-blur-lg border rounded-2xl shadow-lg p-3 sm:p-6 transition-all duration-500 ${
              isDark
                ? "bg-white/10 border-gray-700"
                : "bg-white/70 border-gray-200"
            }`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={gifUrl}
              onError={(e) => (e.currentTarget.src = fallbackGif)}
              alt="Geeky Developer"
              className="rounded-xl shadow-md w-[220px] sm:w-[300px] md:w-[400px] h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* 🐈 Static Cat on Left */}
      <div className="absolute bottom-4 left-4 z-50">
        <img
          src={cat}
          alt="Cute Cat"
          className="w-32 sm:w-40 md:w-48 lg:w-56 object-contain"
        />
      </div>

      {/* Footer gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-28 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl pointer-events-none" />

      <style>{`
        .frosted-home {
          background: radial-gradient(circle at top left, #ffffff, #0d89e1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37),
                      inset 0 0 20px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(25px) saturate(180%);
        }
        .glass-btn {
          background: linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
          border: 1px solid rgba(255,255,255,0.25);
          box-shadow: inset 0 0 12px rgba(255,255,255,0.15),
                      0 5px 25px rgba(0,150,255,0.3);
          backdrop-filter: blur(16px);
          transition: all 0.4s ease-in-out;
        }
        .glass-btn:hover {
          background: linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2));
          box-shadow: inset 0 0 15px rgba(255,255,255,0.3),
                      0 0 35px rgba(0,150,255,0.4);
          transform: translateY(-2px);
        }
        .glass-skill {
          background: linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
          border: 1px solid rgba(255,255,255,0.25);
          box-shadow: inset 0 0 10px rgba(255,255,255,0.15),
                      0 2px 15px rgba(0,150,255,0.25);
          backdrop-filter: blur(15px);
          transition: all 0.4s ease-in-out;
        }
        .glass-skill:hover {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: inset 0 0 15px rgba(255,255,255,0.3),
                      0 4px 20px rgba(0,150,255,0.4);
        }




      `}</style>
    </section>
  );
}
