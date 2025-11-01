import React from "react";
import { GitHub, LinkedIn, Twitter, Email, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="relative w-full py-10 px-6 flex flex-col items-center justify-center overflow-hidden transition-all duration-500">
      {/* Frosted Glass Background */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/60 dark:bg-white/[0.03] border-t border-gray-300/30 dark:border-white/5 shadow-[inset_0_0_60px_rgba(255,255,255,0.2)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white drop-shadow-sm">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center justify-center md:justify-start gap-2 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">
              <Email fontSize="small" /> itsroysons@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">
              <Phone fontSize="small" /> +91-7091850685
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            {
              href: "https://github.com/itsroysons",
              Icon: GitHub,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/itsroysons",
              Icon: LinkedIn,
              label: "LinkedIn",
            },
            {
              href: "https://twitter.com/itsroysons",
              Icon: Twitter,
              label: "Twitter",
            },
          ].map(({ href, Icon, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group relative p-4 rounded-full bg-white/40 dark:bg-white/10 border border-gray-300/50 dark:border-white/20 backdrop-blur-md 
                         hover:bg-white/60 dark:hover:bg-white/20 
                         shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-300"
            >
              <Icon
                fontSize="medium"
                className="text-gray-800 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors"
              />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 blur-md transition-all duration-700"></span>
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white drop-shadow-sm">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
            <a
              href="/projects"
              className="hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="/blog"
              className="hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-400/40 dark:via-white/20 to-transparent my-8"></div>

      {/* Copyright */}
      <div className="relative z-10 text-xs text-gray-700 dark:text-gray-300 text-center">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-cyan-600 dark:text-cyan-300">
          Yash Roy
        </span>{" "}
        — All Rights Reserved.
      </div>

      {/* Animated Glow Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-400 blur-md animate-softGlow"></div>

      <style>{`
        @keyframes softGlow {
          0%, 100% { opacity: 0.6; filter: blur(6px); }
          50% { opacity: 1; filter: blur(10px); }
        }
        .animate-softGlow {
          animation: softGlow 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
