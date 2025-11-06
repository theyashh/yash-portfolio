import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ResumePDF from "../assets/Resume.pdf";

export default function Resume() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`relative min-h-screen w-full transition-colors duration-500 pt-32 sm:pt-32 pb-20 sm:pb-28 flex flex-col items-center justify-center overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-[#050712] via-[#0b1320] to-[#111827] text-gray-100"
          : "bg-gradient-to-br from-[#f8fbff] via-[#eaf4ff] to-[#f3fbff] text-gray-900"
      }`}
    >
      {/* Floating background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(99,102,241,0.05))"
                : "linear-gradient(135deg, rgba(2,132,199,0.06), rgba(99,102,241,0.03))",
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Top controls */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between w-full max-w-5xl px-5 sm:px-10 mb-6"
      >
        <Link
          to="/"
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
            isDark
              ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
              : "bg-white/80 border-gray-300 text-gray-900 hover:bg-white"
          }`}
        >
          <ArrowLeft size={16} /> Back
        </Link>

        <a
          href={ResumePDF}
          download="Yash_Roy_Resume.pdf"
          className={`glass-btn px-4 py-2 rounded-full text-sm font-semibold ${
            isDark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          ⬇ Download
        </a>
      </motion.div>

      {/* Centered PDF viewer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`relative rounded-2xl overflow-hidden shadow-2xl border backdrop-blur-2xl ${
          isDark ? "bg-white/5 border-white/10" : "bg-white/70 border-white/30"
        }`}
        style={{
          width: isMobile ? "92%" : "60%",
          height: isMobile ? "85vh" : "90vh",
          touchAction: "pinch-zoom",
        }}
      >
        <iframe
          src={`${ResumePDF}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`}
          title="Resume"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          className="resume-iframe"
          style={{
            border: "none",
            background: "transparent",
            overflow: "hidden",
          }}
          allow="fullscreen"
        />
      </motion.div>

      {/* Styles */}
      <style>{`
        /* Hide all scrollbars globally */
        html, body, * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          overflow: -moz-scrollbars-none !important;
        }
        ::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }

        .resume-iframe {
          overflow: hidden !important;
        }
        .resume-iframe::-webkit-scrollbar {
          display: none !important;
        }

        .glass-btn {
          background: linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05));
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: inset 0 0 10px rgba(255,255,255,0.1),
                      0 4px 20px rgba(0,150,255,0.25);
          backdrop-filter: blur(15px);
          transition: all 0.3s ease;
        }
        .glass-btn:hover {
          background: linear-gradient(145deg, rgba(255,255,255,0.35), rgba(255,255,255,0.15));
          box-shadow: inset 0 0 15px rgba(255,255,255,0.3),
                      0 0 35px rgba(0,150,255,0.4);
        }

        /* Pinch zoom for mobile */
        @supports (touch-action: pinch-zoom) {
          iframe, body {
            touch-action: pinch-zoom !important;
          }
        }
      `}</style>
    </section>
  );
}
