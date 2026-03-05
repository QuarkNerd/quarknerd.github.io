"use client";

import { ReactNode, useEffect } from "react";
import { useAchievementStore } from "@/store/achievements";
import { AchievementToast } from "./AchievementToast";

export function InteractionProvider({ children }: { children: ReactNode }) {
  const { trackInteraction, initializeVisit } = useAchievementStore();

  useEffect(() => {
    initializeVisit();
  }, [initializeVisit]);

  const handleGlobalClick = (e: React.MouseEvent | MouseEvent) => {
    const target = (e.target as Element).closest("[data-track]");
    if (target) {
      const action = target.getAttribute("data-track");
      if (action) {
        trackInteraction(action);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [trackInteraction]);

  return (
    <>
      {children}
      <AchievementToast />
    </>
  );
}
