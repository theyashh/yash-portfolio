import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
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
          width: { xs: "90%", md: "90%" },
          borderRadius: "20px",
          background: darkMode
            ? "rgba(20, 25, 40, 0.6)"
            : "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: darkMode
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid rgba(0,0,0,0.1)",
          boxShadow: darkMode
            ? "0 8px 24px rgba(0, 200, 255, 0.1), inset 0 1px 6px rgba(255,255,255,0.05)"
            : "0 8px 24px rgba(0, 0, 0, 0.12), inset 0 1px 4px rgba(255,255,255,0.4)",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, sm: 4 },
            minHeight: 64,
          }}
        >
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
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

          {/* Desktop Nav */}
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

          {/* Right Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Theme Toggle */}
            <Tooltip
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <motion.div whileTap={{ scale: 0.9 }}>
                <IconButton
                  onClick={() => setDarkMode(!darkMode)}
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    backdropFilter: "blur(15px)",
                    background: darkMode
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.25)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: darkMode
                      ? "inset 0 1px 3px rgba(255,255,255,0.3), 0 4px 15px rgba(0,255,255,0.15)"
                      : "inset 0 1px 3px rgba(255,255,255,0.5), 0 4px 10px rgba(0,0,0,0.1)",
                    color: darkMode ? "#fff" : "#0f172a",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      background: darkMode
                        ? "rgba(255,255,255,0.12)"
                        : "rgba(255,255,255,0.4)",
                    },
                  }}
                >
                  {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </motion.div>
            </Tooltip>

            {/* Drawer Toggle */}
            <motion.div
              onClick={() => setDrawerOpen(!drawerOpen)}
              animate={drawerOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                sx={{
                  display: { xs: "block", md: "none" },
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                  backdropFilter: "blur(12px)",
                  background: darkMode
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: darkMode
                    ? "inset 0 1px 3px rgba(255,255,255,0.3), 0 8px 20px rgba(0,255,255,0.15)"
                    : "inset 0 1px 3px rgba(255,255,255,0.5), 0 8px 15px rgba(0,0,0,0.15)",
                  color: darkMode ? "#fff" : "#0f172a",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: darkMode
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.6)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {drawerOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CloseRoundedIcon />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MenuRoundedIcon />
                    </motion.div>
                  )}
                </AnimatePresence>
              </IconButton>
            </motion.div>
          </Box>
        </Toolbar>

        {/* Drawer (redesigned glassy neon version) */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: "75%",
              borderRadius: "16px 0 0 16px",
              background: darkMode
                ? "rgba(13, 17, 23, 0.45)"
                : "rgba(255, 255, 255, 0.25)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(25px) saturate(180%)",
              WebkitBackdropFilter: "blur(25px) saturate(180%)",
              boxShadow: darkMode
                ? "-8px 0 40px rgba(0, 255, 255, 0.25), inset 0 0 10px rgba(255,255,255,0.08)"
                : "-8px 0 40px rgba(0, 150, 255, 0.25), inset 0 0 10px rgba(255,255,255,0.3)",
              transition: "all 0.5s ease-in-out",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              py: 5,
              px: 4,
            }}
          >
            <List>
              {links.map((link) => (
                <ListItem key={link.to} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={link.to}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      py: 2.5,
                      px: 3,
                      borderRadius: "18px",
                      my: 1,
                      color: darkMode ? "#c2f0ff" : "#0f172a",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      background: darkMode
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      boxShadow: darkMode
                        ? "0 0 18px rgba(0,255,255,0.25)"
                        : "0 0 15px rgba(0,150,255,0.2)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: darkMode
                          ? "0 0 25px rgba(0,255,255,0.4)"
                          : "0 0 25px rgba(0,150,255,0.4)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      sx={{
                        textAlign: "center",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Typography
              textAlign="center"
              sx={{
                fontSize: "0.8rem",
                color: darkMode ? "#aafaff" : "#111",
                opacity: 0.8,
                mt: 2,
              }}
            >
              © 2025 Yash Roy
            </Typography>
          </Box>
        </Drawer>
      </AppBar>
    </motion.div>
  );
}
