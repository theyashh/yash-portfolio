import React, { useMemo, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./routes/Home";
import Education from "./routes/Education";
import Projects from "./routes/Projects";
import Experience from "./routes/Experience";
import CurrentLearning from "./routes/CurrentLearning";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Sync Tailwind dark mode with state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#cc1616ff" },
          background: {
            default: darkMode ? "#0d1117" : "#f8fafc",
            paper: darkMode ? "#161b22" : "#ffffff",
          },
        },
        typography: {
          fontFamily: "'Poppins', sans-serif",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen flex flex-col transition-colors duration-500">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/learning" element={<CurrentLearning />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />

            {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
