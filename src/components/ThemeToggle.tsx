"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme =
      (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme">
        <span className="theme-icon">☀</span>
      </button>
    );
  }

  return (
    <button
      id="theme-toggle"
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      data-track="theme_toggle"
    >
      <span className="theme-icon">{theme === "dark" ? "☀" : "🌙"}</span>
    </button>
  );
}
