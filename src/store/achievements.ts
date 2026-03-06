import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first_click",
    title: "Curious Clicker",
    description: "Clicked your first interactive element.",
    icon: "👆",
  },
  {
    id: "theme_toggle",
    title: "Night Owl",
    description: "Toggled the theme multiple times.",
    icon: "🌗",
  },
  {
    id: "scroll_bottom",
    title: "Deep Diver",
    description: "Scrolled to the very bottom.",
    icon: "🤿",
  },
  {
    id: "return_visit",
    title: "Welcome Back",
    description: "Returned after resting your eyes.",
    icon: "👋",
  },
  {
    id: "stalker",
    title: "Stalker",
    description: "Found all my online hiding spots!",
    icon: "👀",
  },
  {
    id: "recursion",
    title: "Recursion",
    description: "Wait, isn't this the site we're already on?",
    icon: "🔄",
  },
  {
    id: "avid_reader",
    title: "Avid Reader",
    description: "You really like reading blogs, huh?",
    icon: "📚",
  },
];

interface AchievementState {
  unlockedIds: string[];
  interactionLog: Record<string, number>;
  lastVisit: number | null;
  activeToast: Achievement | null;

  trackInteraction: (action: string) => void;
  evaluateAchievements: () => void;
  clearToast: () => void;
  initializeVisit: () => void;
}

export const useAchievementStore = create<AchievementState>()(
  persist(
    (set, get) => ({
      unlockedIds: [],
      interactionLog: {},
      lastVisit: null,
      activeToast: null,

      trackInteraction: (action: string) => {
        set((state) => {
          const count = (state.interactionLog[action] || 0) + 1;
          return {
            interactionLog: { ...state.interactionLog, [action]: count },
          };
        });
        get().evaluateAchievements();
      },

      initializeVisit: () => {
        const now = Date.now();
        const state = get();

        // 1. Check the old visit time before we update it
        if (state.lastVisit) {
          const hoursSinceLastVisit =
            (now - state.lastVisit) / (1000 * 60 * 60);
          if (
            hoursSinceLastVisit > 24 &&
            !state.unlockedIds.includes("return_visit")
          ) {
            get().trackInteraction("return_visit");
          }
        }

        // 2. Update the lastVisit to right now
        set({ lastVisit: now });
      },

      evaluateAchievements: () => {
        const state = get();
        const newlyUnlocked: Achievement[] = [];

        if (
          !state.unlockedIds.includes("first_click") &&
          Object.values(state.interactionLog).reduce((a, b) => a + b, 0) > 0
        ) {
          newlyUnlocked.push(ACHIEVEMENTS.find((a) => a.id === "first_click")!);
        }

        if (
          !state.unlockedIds.includes("theme_toggle") &&
          (state.interactionLog["theme_toggle"] || 0) >= 5
        ) {
          newlyUnlocked.push(
            ACHIEVEMENTS.find((a) => a.id === "theme_toggle")!,
          );
        }

        if (
          !state.unlockedIds.includes("scroll_bottom") &&
          state.interactionLog["scroll_bottom"]
        ) {
          newlyUnlocked.push(
            ACHIEVEMENTS.find((a) => a.id === "scroll_bottom")!,
          );
        }

        if (
          !state.unlockedIds.includes("return_visit") &&
          state.interactionLog["return_visit"]
        ) {
          newlyUnlocked.push(
            ACHIEVEMENTS.find((a) => a.id === "return_visit")!,
          );
        }

        if (
          !state.unlockedIds.includes("stalker") &&
          state.interactionLog["social_github"] &&
          state.interactionLog["social_linkedin"] &&
          state.interactionLog["social_email"]
        ) {
          newlyUnlocked.push(ACHIEVEMENTS.find((a) => a.id === "stalker")!);
        }

        if (
          !state.unlockedIds.includes("recursion") &&
          state.interactionLog["personalSite_recursion"]
        ) {
          newlyUnlocked.push(ACHIEVEMENTS.find((a) => a.id === "recursion")!);
        }

        // Avid Reader Achievement
        const totalBlogClicks = Object.entries(state.interactionLog)
          .filter(([key]) => key.endsWith("_blog"))
          .reduce((sum, [_, count]) => sum + count, 0);

        if (
          !state.unlockedIds.includes("avid_reader") &&
          totalBlogClicks >= 10
        ) {
          newlyUnlocked.push(ACHIEVEMENTS.find((a) => a.id === "avid_reader")!);
        }

        if (newlyUnlocked.length > 0) {
          set((s) => ({
            unlockedIds: [...s.unlockedIds, ...newlyUnlocked.map((a) => a.id)],
            activeToast: newlyUnlocked[0],
          }));
        }
      },

      clearToast: () => set({ activeToast: null }),
    }),
    {
      name: "achievements-storage",
      partialize: (state) => ({
        unlockedIds: state.unlockedIds,
        interactionLog: state.interactionLog,
        lastVisit: state.lastVisit,
      }),
    },
  ),
);
