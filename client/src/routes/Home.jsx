import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

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
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-all duration-500 px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 ${
        isDark
          ? "bg-gradient-to-b from-[#0d1117] to-[#161b22] text-gray-100"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      }`}
    >
      {/* Background animation */}
      <div className="absolute inset-0 -z-20 opacity-15">
        <img
          src={gifUrl}
          onError={(e) => (e.currentTarget.src = fallbackGif)}
          alt="Geeky Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Frosted glass background card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute w-[80%] h-[80%] rounded-3xl -z-10 frosted-home backdrop-blur-2xl border border-white/20 shadow-2xl"
      ></motion.div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
        <div>
          <h1
            className={`text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight ${
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
          </h1>

          <p
            className={`mb-8 text-sm sm:text-base md:text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I build scalable web apps using <strong>React</strong> and{" "}
            <strong>Node.js</strong>. Passionate about clean code, modern UX,
            and high performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center mb-10">
            {[
              { text: "View Resume", href: "/Resume.pdf", link: false },
              { text: "Contact Me", href: "/contact", link: true },
            ].map((btn, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-full sm:w-auto"
              >
                {btn.link ? (
                  <Link
                    to={btn.href}
                    className="block text-sm sm:text-base px-6 py-3 rounded-xl font-semibold glass-btn text-blue-600 dark:text-blue-300"
                  >
                    {btn.text}
                  </Link>
                ) : (
                  <a
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm sm:text-base px-6 py-3 rounded-xl font-semibold glass-btn text-blue-600 dark:text-blue-300"
                  >
                    {btn.text}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-4 py-2 text-sm rounded-[2rem] font-medium glass-skill text-blue-600 dark:text-blue-300 select-none cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Developer GIF */}
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
              className="rounded-xl shadow-md w-[240px] sm:w-[320px] md:w-[420px] h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Glass Styles */}
      <style>{`
        .frosted-home {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow:
            0 8px 32px rgba(31, 38, 135, 0.37),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
        }

        .glass-btn {
          background: linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow:
            inset 0 0 12px rgba(255, 255, 255, 0.15),
            0 5px 25px rgba(0, 150, 255, 0.3);
          backdrop-filter: blur(16px);
          transition: all 0.4s ease-in-out;
        }

        .glass-btn:hover {
          background: linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2));
          box-shadow:
            inset 0 0 15px rgba(255, 255, 255, 0.3),
            0 0 35px rgba(0, 150, 255, 0.4);
          transform: translateY(-2px);
        }

        .glass-skill {
          background: linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
          border: 1px solid rgba(255,255,255,0.25);
          box-shadow:
            inset 0 0 10px rgba(255,255,255,0.15),
            0 2px 15px rgba(0,150,255,0.25);
          backdrop-filter: blur(15px);
          transition: all 0.4s ease-in-out;
        }

        .glass-skill:hover {
          background: rgba(255, 255, 255, 0.3);
          box-shadow:
            inset 0 0 15px rgba(255,255,255,0.3),
            0 4px 20px rgba(0,150,255,0.4);
        }
      `}</style>
    </section>
  );
}
