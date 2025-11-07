import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/learning", label: "Learning & Achievements" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Social" },
];

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ Close menu on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".menu-toggle-btn")
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <AppBar
          position="fixed"
          sx={{
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "80%", md: "80%" },
            borderRadius: "20px",
            zIndex: 1400, // ✅ ensures cross button is clickable
            background: darkMode
              ? "rgba(255,255,255,0)"
              : "rgba(255,255,255,0)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: darkMode
              ? "1px solid rgba(255,255,255,0.12)"
              : "1px solid rgba(0,0,0,0.1)",
            boxShadow: darkMode
              ? "0 8px 32px rgba(170, 170, 170, 0.08)"
              : "0 8px 32px rgba(0,0,0,0.08)",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 2, sm: 4 },
              minHeight: 70,
            }}
          >
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.03 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: 0.6,
                  color: darkMode ? "#fff" : "#0f172a",
                }}
              >
                Yash Roy
              </Typography>
            </motion.div>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={{ textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <Typography
                      sx={{
                        fontWeight: isActive ? 800 : 500,
                        fontSize: "1rem",
                        color: darkMode ? "#fff" : "#0f172a",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -4,
                          left: 0,
                          width: isActive ? "100%" : "0%",
                          height: "2px",
                          background: darkMode ? "#fff" : "#0f172a",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::after": { width: "100%" },
                      }}
                    >
                      {link.label}
                    </Typography>
                  )}
                </NavLink>
              ))}
            </Box>

            {/* Right Side Icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
                <motion.div whileTap={{ scale: 0.9 }}>
                  <IconButton
                    onClick={() => setDarkMode(!darkMode)}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "20px",
                      background: darkMode
                        ? "rgba(255,255,255,0)"
                        : "rgba(255,255,255,0)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",

                      border: darkMode
                        ? "0px solid rgba(255,255,255,0.15)"
                        : "0px solid rgba(0,0,0,0.1)",
                      boxShadow: darkMode
                        ? "0 20px 60px rgba(0,0,0,0.75)"
                        : "0 20px 50px rgba(0,0,0,0.25)",
                      color: darkMode ? "#fff" : "#0f172a",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                </motion.div>
              </Tooltip>

              {/* Menu Icon (Properly aligned) */}
              <IconButton
                className="menu-toggle-btn"
                onClick={() => setMenuOpen((prev) => !prev)}
                sx={{
                  display: { xs: "flex", md: "none" },
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px",
                  background: "transparent",
                  color: darkMode ? "#fff" : "#0f172a",
                  border: "0px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "scale(1.08)" },
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <CloseRoundedIcon />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="apps"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <AppsRoundedIcon />
                    </motion.div>
                  )}
                </AnimatePresence>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Center Dropdown (only menu blurred) */}
      {/* Right Slide-In Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              inset: 0,
              // background: "rgbrgba(0, 0, 0, 0.34)",
              // backdropFilter: "blur(1px)",
              // WebkitBackdropFilter: "blur(1px)",
              zIndex: 1300,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {/* Slide-in menu container */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1],
              }}
              style={{
                marginTop: "40px",
                width: "70vw",
                maxWidth: 250,
                height: "100vh",
                padding: "90px 30px",
                borderRadius: "20px 0 0 20px",
                // background: darkMode
                //   ? "rgba(25,25,25,0.65)"
                //   : "rgba(255,255,255,0.6)",
                // backdropFilter: "blur(20px)",
                // WebkitBackdropFilter: "blur(20px)",
                // // border: darkMode
                //   ? "1px solid rgba(255,255,255,0.1)"
                //   : "1px solid rgba(0,0,0,0.1)",
                // boxShadow: darkMode
                //   ? "0 0 40px rgba(0,0,0,0.6)"
                //   : "0 0 40px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    style={{ textDecoration: "none" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, x: 5 }}
                      whileTap={{ scale: 0.94 }}
                      style={{
                        padding: "10px 30px",
                        borderRadius: "20px",
                        color: darkMode ? "#fff" : "#0f172a",
                        fontWeight: 600,
                        fontSize: "1rem",
                        textAlign: "center",
                        width: "180px",
                        background: darkMode
                          ? "rgba(255,255,255,0)"
                          : "rgba(255,255,255,0)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: darkMode
                          ? "1px solid rgba(255,255,255,0.12)"
                          : "1px solid rgba(0,0,0,0.1)",
                        boxShadow: darkMode
                          ? "0 8px 32px rgba(170, 170, 170, 0.08)"
                          : "0 8px 32px rgba(0,0,0,0.08)",
                        transition: "all 0.5s ease-in-out",
                      }}
                    >
                      {link.label}
                    </motion.div>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
