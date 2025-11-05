import React from "react";
import { GitHub, LinkedIn, Twitter, Email, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      className="relative w-full py-10 px-6 flex flex-col items-center justify-center overflow-hidden 
                 transition-all duration-500 rounded-t-[0rem]
                 bg-white dark:bg-[#0a0a0a] shadow-[0_-8px_32px_rgba(0,0,0,0.4)] border-t border-white/10"
    >
      {/* Gradient overlay for motion (non-transparent) */}
      <div className="absolute inset-0 rounded-t-[0rem] bg-gradient-to-br from-cyan-100/10 via-transparent to-indigo-200/10 dark:from-cyan-500/5 dark:to-indigo-500/5 pointer-events-none animate-gradientMove"></div>

      {/* Content */}
      <div
        className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row justify-between 
                   items-center gap-10 text-center md:text-left animate-fadeIn"
      >
        {/* Contact Info */}
        <div className="p-4 rounded-2xl border border-gray-300/30 dark:border-white/10 bg-white/80 dark:bg-[#111111]/90 backdrop-blur-md transition-transform duration-500 hover:scale-105">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center justify-center md:justify-start gap-2 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-300">
              <Email fontSize="small" /> itsroysons@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-300">
              <Phone fontSize="small" /> +91-7091850685
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 animate-slideUp">
          {[
            {
              href: "https://github.com/theyashh",
              Icon: GitHub,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/yash-roy-658956219",
              Icon: LinkedIn,
              label: "LinkedIn",
            },
            {
              href: "https://twitter.com/itsy4sh",
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
              className="group relative p-4 rounded-full bg-gray-200 dark:bg-[#1a1a1a] border border-gray-300/50 dark:border-white/20 
                         shadow-[0_4px_25px_rgba(0,0,0,0.15)] hover:scale-110 hover:shadow-[0_8px_35px_rgba(0,255,255,0.3)] 
                         transition-all duration-500"
            >
              <Icon
                fontSize="medium"
                className="text-gray-800 dark:text-white group-hover:text-cyan-400 transition-colors duration-300"
              />
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div className="p-4 rounded-2xl border border-gray-300/30 dark:border-white/10 bg-white/80 dark:bg-[#111111]/90 backdrop-blur-md transition-transform duration-500 hover:scale-105">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
            <a
              href="/projects"
              className="hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="/blog"
              className="hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-300"
            >
              Blog
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-400/40 dark:via-white/20 to-transparent my-8 animate-fadeIn delay-200"></div>

      {/* Copyright */}
      <div className="relative z-10 text-xs text-gray-700 dark:text-gray-300 text-center animate-slideUp delay-300">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-cyan-600 dark:text-cyan-300">
          Yash Roy
        </span>{" "}
        — All Rights Reserved.
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(25px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-fadeIn { animation: fadeIn 1.2s ease-in-out forwards; }
        .animate-slideUp { animation: slideUp 1.5s ease-in-out forwards; }
        .animate-gradientMove { background-size: 200% 200%; animation: gradientMove 10s ease infinite; }
      `}</style>
    </footer>
  );
};

export default Footer;
