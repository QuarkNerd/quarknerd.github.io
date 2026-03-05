"use client";

import { useEffect, useState } from "react";
import { useAchievementStore } from "@/store/achievements";

export function AchievementToast() {
  const { activeToast, clearToast } = useAchievementStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (activeToast) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(clearToast, 300);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [activeToast, clearToast]);

  if (!activeToast && !visible) return null;

  return (
    <div className={`achievement-toast ${visible ? "visible" : ""}`}>
      <div className="achievement-toast-icon">{activeToast?.icon || "🏆"}</div>
      <div>
        <div className="achievement-toast-header">Achievement Unlocked!</div>
        <div className="achievement-toast-title">{activeToast?.title}</div>
        <div className="achievement-toast-desc">{activeToast?.description}</div>
      </div>
    </div>
  );
}
