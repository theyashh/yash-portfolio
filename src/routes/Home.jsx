// src/routes/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactTyped } from "react-typed";
import cat from "../assets/cat.gif";

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Projects (real placeholders)
  const projects = [
    {
      title: "EduPath (MERN)",
      tag: "MERN • Courses • Quizzes",
      desc: "Course marketplace with live search, progress tracking and quizzes — a Udemy-like platform built with React, Node and MongoDB.",
      link: "/projects/edupath",
    },
    {
      title: "Smart Parking (YOLOv10 + OCR)",
      tag: "CV • YOLOv10 • OCR",
      desc: "Real-time parking management using YOLO for vehicle detection and OCR for number plate recognition, integrated with a booking dashboard.",
      link: "/projects/smart-parking",
    },
    {
      title: "Resume Analyzer (Python + Streamlit)",
      tag: "NLP • Streamlit",
      desc: "AI-backed resume parser and scorer with suggestions to improve ATS-compatibility and recruiter-readability.",
      link: "/projects/resume-analyzer",
    },
  ];

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

  const statsInitial = [
    { id: 1, label: "Projects Completed", value: 12 },
    { id: 2, label: "Technologies", value: 10 },
    { id: 3, label: "Research Papers", value: 2 },
  ];

  // refs & controls
  const parallaxRef = useRef(null);
  const heroControls = useAnimation();
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const projRef = useRef(null);
  const projInView = useInView(projRef, { once: true, margin: "-120px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-120px" });

  // animated counter state
  const [counters, setCounters] = useState(statsInitial.map(() => 0));
  useEffect(() => {
    if (!statsInView) return;
    // animate counters up
    const duration = 1000; // ms
    statsInitial.forEach((s, idx) => {
      const start = Date.now();
      const from = 0;
      const to = s.value;
      const tick = () => {
        const now = Date.now();
        const t = Math.min(1, (now - start) / duration);
        const eased = easeOutQuad(t);
        const val = Math.round(from + (to - from) * eased);
        setCounters((prev) => {
          const copy = [...prev];
          copy[idx] = val;
          return copy;
        });
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    // easing helper
    function easeOutQuad(t) {
      return t * (2 - t);
    }
  }, [statsInView]);

  // parallax scroll handler (flashy)
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const onScroll = () => {
      const sc = window.scrollY;
      // set css variables used by children
      el.style.setProperty("--p1", `${sc * 0.02}px`);
      el.style.setProperty("--p2", `${sc * 0.035}px`);
      el.style.setProperty("--p3", `${sc * 0.055}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // initial hero animation
  useEffect(() => {
    heroControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "backOut" },
    });
  }, [heroControls]);

  const gifUrl = "/assets/geeks.gif";
  const fallbackGif =
    "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif";

  return (
    <main
      ref={parallaxRef}
      className={`relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br transition-colors duration-500 ${
        isDark
          ? "from-[#080b12] via-[#0d1422] to-[#121827] text-gray-100"
          : "from-[#f1fbff] via-[#e6f7ff] to-[#f9fcff] text-gray-900"
      }`}
    >
      {/* PARALLAX LAYERS (flashy) */}
      <div className="pointer-events-none absolute inset-0 -z-30">
        <div
          className="absolute rounded-full opacity-40 blur-3xl"
          style={{
            width: 240,
            height: 240,
            top: "6%",
            left: "8%",
            background: isDark
              ? "rgba(59,130,246,0.05)"
              : "rgba(2,132,199,0.06)",
            transform: "translateY(var(--p1, 0))",
          }}
        />
        <div
          className="absolute rounded-full opacity-36 blur-2xl"
          style={{
            width: 280,
            height: 280,
            top: "30%",
            right: "4%",
            background: isDark
              ? "rgba(99,102,241,0.04)"
              : "rgba(99,102,241,0.03)",
            transform: "translateY(calc(var(--p2, 0) * -1))",
          }}
        />
        <div
          className="absolute rounded-full opacity-30 blur-2xl"
          style={{
            width: 380,
            height: 380,
            bottom: "10%",
            left: "12%",
            background: isDark
              ? "rgba(59,130,246,0.03)"
              : "rgba(2,132,199,0.02)",
            transform: "translateY(calc(var(--p3, 0) * -1))",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative pt-40 pb-12 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroControls}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Hey, I’m <span className="text-blue-400">Yash Roy</span> —{" "}
              <span
                className="text-gradient inline-block align-middle"
                style={{ minWidth: "230px" }} // adjust width for longest word
              >
                <ReactTyped
                  strings={[
                    " Software Engineer",
                    " Full-Stack Developer",
                    " Web Designer",
                    " AI Enthusiast",
                    " Problem Solver",
                  ]}
                  typeSpeed={20}
                  backSpeed={30}
                  backDelay={1400}
                  loop
                />
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-prose">
              I craft modern, scalable web apps using <strong>React</strong> &{" "}
              <strong>Node.js</strong>. I combine performance-first engineering
              with striking UI to build products that users love.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold btn-cta"
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-ghost"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((s) => (
                <motion.div
                  key={s}
                  whileHover={{ scale: 1.08 }}
                  className="px-3 py-1.5 rounded-full glass-skill text-sm"
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GIF card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className={`mx-auto ${
              isDark ? "bg-white/6" : "bg-white/80"
            } rounded-2xl p-4 sm:p-6 shadow-2xl`}
          >
            <img
              src={gifUrl}
              onError={(e) => (e.currentTarget.src = fallbackGif)}
              alt="dev gif"
              className="rounded-xl w-[230px] sm:w-[320px] md:w-[420px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT (flashy reveal) */}
      <section className="px-6 sm:px-10">
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={aboutInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.9,
            delay: 0.08,
            type: "spring",
            stiffness: 80,
          }}
          className="max-w-5xl mx-auto mt-12 p-8 rounded-3xl backdrop-blur-xl border"
          style={{
            background: isDark
              ? "rgba(255,255,255,0.03)"
              : "rgba(255,255,255,0.86)",
            borderColor: isDark
              ? "rgba(255,255,255,0.06)"
              : "rgba(15,23,42,0.06)",
            boxShadow: isDark
              ? "0 12px 40px rgba(2,6,23,0.6)"
              : "0 12px 40px rgba(13,40,59,0.06)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-none w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-400">About Me</h3>
              <p className="mt-3 text-sm text-gray-300 max-w-md">
                I'm a full-stack dev focused on building production-ready
                applications. I like working on end-to-end systems, ML/AI
                integrations, and intuitive UI.
              </p>
            </div>

            <div className="flex-1 grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl glass-card">
                  <h4 className="font-semibold">Backend</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Node.js, Express, REST, PostgreSQL
                  </p>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <h4 className="font-semibold">Frontend</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    React, Tailwind, MUI, SPA UX
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl glass-card">
                  <h4 className="font-semibold">CV / AI</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    YOLO, OCR, PaddleOCR, TensorFlow
                  </p>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <h4 className="font-semibold">Tools</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Git, Docker, CI/CD, Linux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS (flashy grid with hover pop) */}
      <section ref={projRef} className="px-6 sm:px-10 mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-8 text-blue-400"
        >
          Featured Projects
        </motion.h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="p-6 rounded-2xl glass-card cursor-pointer"
              style={{ minHeight: 160 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-blue-300">{p.tag}</p>
                  <h3 className="text-xl font-bold mt-2">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  to={p.link}
                  className="text-sm font-semibold text-blue-400 hover:underline"
                >
                  View more →
                </Link>
                <div className="text-sm text-gray-300">React • Node</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* TECH STACK CAROUSEL */}
      <section className="px-6 sm:px-10 mt-16">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold text-center text-blue-400 mb-6"
        >
          Tech Stack
        </motion.h3>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <motion.div
            className="flex gap-4 py-4"
            animate={{ x: ["0%", "-30%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind",
              "TensorFlow",
              "YOLO",
            ].map((t) => (
              <div
                key={t}
                className="min-w-[140px] p-4 rounded-xl glass-card text-center"
              >
                <div className="font-semibold">{t}</div>
              </div>
            ))}
            {/* duplicate for loop to create seamless loop */}
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind",
              "TensorFlow",
              "YOLO",
            ].map((t, i) => (
              <div
                key={`${t}-dup-${i}`}
                className="min-w-[140px] p-4 rounded-xl glass-card text-center"
              >
                <div className="font-semibold">{t}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="px-6 sm:px-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {statsInitial.map((s, i) => (
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
              key={s.id}
              className="p-6 rounded-2xl glass-card"
            >
              <div className="text-4xl font-extrabold text-blue-400">
                {counters[i]}+
              </div>
              <div className="mt-2 text-sm text-gray-300">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-10 mt-20 mb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          className="max-w-3xl mx-auto text-center p-8 rounded-3xl backdrop-blur-xl border"
          style={{
            background: isDark
              ? "rgba(255,255,255,0.03)"
              : "rgba(255,255,255,0.9)",
            borderColor: isDark
              ? "rgba(255,255,255,0.06)"
              : "rgba(15,23,42,0.06)",
          }}
        >
          <h3 className="text-3xl font-bold text-blue-400">
            Let’s collaborate 🚀
          </h3>
          <p className="mt-3 text-gray-300">
            Have an idea or a project? I build things — let’s make it real.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="px-6 py-3 rounded-full btn-cta">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* floating cat */}
      <div className="fixed bottom-6 left-6 z-50">
        <img src={cat} alt="cat" className="w-28 sm:w-36 md:w-44" />
      </div>

      {/* CSS */}
      <style>{`
        /* buttons */
        .btn-cta {
          background: linear-gradient(135deg, rgba(0,145,255,0.25), rgba(0,145,255,0.12));
          color: #0bf;
          padding: 10px 18px;
          border-radius: 999px;
          font-weight: 700;
          border: 1px solid rgba(0,145,255,0.16);
          box-shadow: 0 12px 30px rgba(0,145,255,0.08);
          transform-origin: center;
        }
        .btn-cta:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 20px 45px rgba(0,145,255,0.12); }

        .btn-ghost {
          background: rgba(255,255,255,0.06);
          color: inherit;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .btn-ghost:hover { transform: translateY(-3px); }

        .glass-skill {
          background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
          padding: 6px 12px;
          border-radius: 999px;
        }

        .glass-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.06);
          padding: 14px;
          transition: all .28s ease;
          backdrop-filter: blur(10px) saturate(140%);
        }
        .glass-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 18px 50px rgba(2,6,23,0.25); }

        .skill-pill { /* kept for legacy if used */ }

        .text-gradient {
          background: linear-gradient(90deg, #60a5fa, #7c3aed, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* responsive tweaks */
        @media (max-width: 640px) {
          .glass-card { padding: 12px; }
          .btn-cta { padding: 10px 14px; }
        }
      `}</style>
    </main>
  );
}
