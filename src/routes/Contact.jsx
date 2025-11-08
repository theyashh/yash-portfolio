import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import {
  GitHub,
  LinkedIn,
  Email,
  Facebook,
  Instagram,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import RedditIcon from "@mui/icons-material/Reddit";
import { SiLeetcode, SiHackerrank, SiDiscord, SiThreads } from "react-icons/si";

export default function Contact() {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  const socials = [
    {
      name: "Instagram",
      icon: <Instagram fontSize="large" />,
      href: "https://instagram.com/thisisyashroy",
      color: "#E1306C",
    },
    {
      name: "X (Twitter)",
      icon: <XIcon fontSize="large" />,
      href: "https://x.com/itsy4sh",
      color: "#000000",
    },
    {
      name: "Reddit",
      icon: <RedditIcon fontSize="large" />,
      href: "https://reddit.com/user/Crazy-Mushroom9411/",
      color: "#FF4500",
    },
    {
      name: "Discord",
      icon: <SiDiscord size={28} />,
      href: "https://discord.com/users/933629768572735538",
      color: "#5865F2",
    },
    {
      name: "Threads",
      icon: <SiThreads size={28} />,
      href: "https://threads.net/@itsroysons",
      color: "#000000",
    },
    {
      name: "Facebook",
      icon: <Facebook fontSize="large" />,
      href: "https://facebook.com/thisisyashroy",
      color: "#1877F2",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn fontSize="large" />,
      href: "https://linkedin.com/in/yash-roy-658956219",
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      icon: <GitHub fontSize="large" />,
      href: "https://github.com/theyashh",
      color: darkMode ? "#c9d1d9" : "#181717",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank size={28} />,
      href: "https://www.hackerrank.com/itsdevyash",
      color: "#00EA64",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode size={28} />,
      href: "https://leetcode.com/itsroysons/",
      color: "#FFA116",
    },
    {
      name: "Email",
      icon: <Email fontSize="large" />,
      href: "mailto:itsroysons@gmail.com",
      color: "#c71610",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24 md:py-20"
      style={{ marginTop: "20px" }}
    >
      {/* 🌌 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-60"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "200% 200%",
          zIndex: 0,
        }}
      />

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* 🌐 Floating Heading (outside the card) */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-2xl sm:text-xl md:text-3xl font-extrabold mb-10 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text text-center"
      >
        Let’s Collaborate & Connect 🌐
      </motion.h2>

      {/* 💎 Unfolding Poster Card */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0, y: -50 }}
        animate={{ scaleY: 1, opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        style={{ transformOrigin: "top center" }}
        className="relative z-10 w-full max-w-5xl rounded-3xl border p-10 sm:p-14 md:p-16 frosted-card text-center"
      >
        {/* Social Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
          {socials.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 text-sm sm:text-base font-semibold"
              whileHover={{
                scale: 1.1,
                textShadow: `0 0 10px ${item.color}`,
              }}
              style={{ color: item.color }}
            >
              <motion.span
                className="text-3xl sm:text-4xl"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.span>
              <span className="opacity-80">{item.name}</span>
            </motion.a>
          ))}
        </div>

        {/* 📧 Email */}
        <motion.p
          className={`text-lg sm:text-xl font-semibold mt-10 ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          📩 itsroysons@gmail.com
        </motion.p>

        {/* 💼 Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="mailto:itsroysons@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition"
          >
            Say Hello 👋
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl shadow-lg hover:opacity-90 transition"
          >
            📄 Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* 🌫️ Styles */}
      <style>{`
        .frosted-card {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          box-shadow:
            0 8px 32px rgba(31, 38, 135, 0.37),
            inset 0 0 15px rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
        }

        .frosted-card:hover {
          box-shadow:
            0 0 25px rgba(14, 165, 233, 0.4),
            inset 0 0 10px rgba(14, 165, 233, 0.3);
          transform: scale(1.01);
        }

        [data-theme='dark'] .frosted-card {
          background: rgba(13, 17, 23, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
