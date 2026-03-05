"use client";

import { useEffect, useRef } from "react";
import { useAchievementStore } from "@/store/achievements";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const { trackInteraction } = useAchievementStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackInteraction("scroll_bottom");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, [trackInteraction]);

  return (
    <footer ref={footerRef} className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} Quark Nerd. Built with ❤️, pixels and good vibes
          (coding) [Unlike most of the stuff above].
        </p>
      </div>
    </footer>
  );
}
