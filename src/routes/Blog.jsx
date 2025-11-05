import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  const posts = [
    {
      id: 1,
      slug: "build-portfolio",
      title: "How I Built My Portfolio",
      excerpt:
        "A detailed walkthrough of how I designed and built my developer portfolio using React and Tailwind.",
      content:
        "Building my portfolio taught me a lot about responsive design, smooth animations, and optimization for GitHub Pages. The key was keeping the design minimal but engaging.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      date: "Nov 1, 2025",
      time: "10:00 AM",
    },
    {
      id: 2,
      slug: "mern-stack-guide",
      title: "Understanding MERN Stack",
      excerpt:
        "Breaking down the power of MongoDB, Express, React, and Node.js for full-stack applications.",
      content:
        "MERN enables developers to build seamless full-stack web applications using only JavaScript. It’s fast, modular, and highly scalable for real-world projects.",
      image:
        "https://images.unsplash.com/photo-1581091870627-3ab5fa6a06d2?auto=format&fit=crop&w=900&q=80",
      date: "Nov 1, 2025",
      time: "11:45 AM",
    },
    {
      id: 3,
      slug: "ai-computer-vision",
      title: "My Journey with AI & Computer Vision",
      excerpt:
        "Sharing my experience building automated number plate recognition using YOLOv10 and PaddleOCR.",
      content:
        "Using YOLOv10 for object detection and PaddleOCR for text extraction improved accuracy in ANPR systems. The integration helped automate parking management efficiently. This was a great step toward implementing intelligent urban solutions.",
      image:
        "https://images.unsplash.com/photo-1581090464777-4c4f7c4a3a79?auto=format&fit=crop&w=900&q=80",
      date: "Nov 1, 2025",
      time: "2:00 PM",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{
        marginTop: "50px", // Adjust this if your navbar height differs
      }}
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text">
        My Blog
      </h2>

      <div className="flex flex-col gap-10 w-full max-w-4xl">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            className="relative frosted-card p-8 rounded-2xl border transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,150,255,0.4)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {post.date} • {post.time}
            </p>

            <AnimatePresence>
              {expandedPost === i ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-4"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover rounded-xl mb-4 shadow-[0_0_20px_rgba(0,150,255,0.25)]"
                  />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    {post.content}
                  </p>
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
                  {post.excerpt}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpandedPost(expandedPost === i ? null : i)}
              className="glass-btn mt-6 flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300"
            >
              {expandedPost === i ? (
                <>
                  <CloseIcon fontSize="small" /> Collapse
                </>
              ) : (
                <>
                  <ExpandMoreIcon fontSize="small" /> Expand
                </>
              )}
            </button>
          </motion.div>
        ))}
      </div>

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

        [data-theme='dark'] .frosted-card {
          background: rgba(13, 17, 23, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
