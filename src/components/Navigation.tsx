"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAchievementStore } from "@/store/achievements";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const { unlockedIds } = useAchievementStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="nav">
      <div className="container">
        <a href="/#about" className="nav-link">
          About
        </a>
        <a href="/#css-projects" className="nav-link">
          CSS Projects
        </a>
        <a href="/#game-projects" className="nav-link">
          Games
        </a>
        <a href="/#other" className="nav-link">
          Other
        </a>
        <a href="/#contact" className="nav-link">
          Contact
        </a>
        {mounted && unlockedIds.length > 0 && (
          <Link href="/achievements" className="nav-link">
            Achievements
          </Link>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
}
