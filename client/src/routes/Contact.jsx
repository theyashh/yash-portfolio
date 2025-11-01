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

  const third = Math.ceil(socials.length / 3);
  const col1 = socials.slice(0, third);
  const col2 = socials.slice(third, 2 * third);
  const col3 = socials.slice(2 * third);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-20"
      style={{
        marginTop: "50px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`w-full max-w-5xl rounded-3xl border p-12 sm:p-16 text-center frosted-card transition-all duration-500`}
      >
        {/* Title */}
        <motion.h2
          className={`text-xl sm:text-2xl md:text-3xl font-extrabold mb-14 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text`}
          animate={{ y: [0, -4, 0] }}
          // transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Connect with Me
        </motion.h2>

        {/* Socials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-left marginLeft:20px">
          {[col1, col2, col3].map((col, i) => (
            <div key={i} className="flex flex-col items-left gap-4">
              {col.map((item, j) => (
                <motion.a
                  key={j}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-lg font-semibold transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    x: 8,
                    textShadow: `0 0 12px ${item.color}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ color: item.color }}
                >
                  <motion.span
                    className="text-3xl"
                    whileHover={{
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="opacity-90">{item.name}</span>
                </motion.a>
              ))}
            </div>
          ))}
        </div>

        {/* Email */}
        <motion.p
          className={`text-xl sm:text-2xl font-semibold mt-16 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          itsroysons@gmail.com
        </motion.p>
      </motion.div>

      {/* Frosted Card Styling */}
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
          box-shadow:
            0 0 25px rgba(14, 165, 233, 0.4),
            inset 0 0 10px rgba(14, 165, 233, 0.3);
          transform: scale(1.01);
        }

        [data-theme='dark'] .frosted-card {
          background: rgba(13, 17, 23, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
