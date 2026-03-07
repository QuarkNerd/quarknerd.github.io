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
    description: "Return after a day.",
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
  {
    id: "i_missed_you",
    title: "I Missed You",
    description: "Return after 10 days.",
    icon: "🥲",
  },
];

interface AchievementState {
  unlockedIds: string[];
  interactionLog: Record<string, number>;
  firstVisit: number | null;
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
      firstVisit: null,
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

        if (state.firstVisit != null) {
          const hoursSinceFirstVisit =
            (now - state.firstVisit!) / (1000 * 60 * 60);
          if (hoursSinceFirstVisit > 24) {
            get().trackInteraction("return_visit");
          }
        } else {
          set({ firstVisit: now });
        }

        if (state.lastVisit != null) {
          const daysSinceLastVisit =
            (now - state.lastVisit) / (1000 * 60 * 60 * 24);
          if (daysSinceLastVisit > 10) {
            get().trackInteraction("i_missed_you");
          }
        }

        set({ lastVisit: now });
      },

      evaluateAchievements: () => {
        const state = get();
        const unlocked: string[] = [];

        const simpleAchievements = [
          "i_missed_you",
          "scroll_bottom",
          "return_visit",
        ];

        for (const id of simpleAchievements) {
          if (state.interactionLog[id]) {
            unlocked.push(id);
          }
        }

        const nonClickInteractions = ["scroll_bottom", "return_visit", "i_missed_you"];
        const clickCount = Object.entries(state.interactionLog)
          .filter(([key]) => !nonClickInteractions.includes(key))
          .reduce((sum, [_, count]) => sum + count, 0);

        if (clickCount > 0) {
          unlocked.push("first_click");
        }

        if ((state.interactionLog["theme_toggle"] || 0) >= 5) {
          unlocked.push("theme_toggle");
        }

        if (
          state.interactionLog["social_github"] &&
          state.interactionLog["social_linkedin"] &&
          state.interactionLog["social_email"]
        ) {
          unlocked.push("stalker");
        }

        if (state.interactionLog["personalSite_recursion"]) {
          unlocked.push("recursion");
        }

        const totalBlogClicks = Object.entries(state.interactionLog)
          .filter(([key]) => key.endsWith("_blog"))
          .reduce((sum, [_, count]) => sum + count, 0);

        if (totalBlogClicks >= 10) {
          unlocked.push("avid_reader");
        }

        const newlyUnlocked = unlocked
          .filter((id) => !state.unlockedIds.includes(id))
          .map((id) => ACHIEVEMENTS.find((a) => a.id === id)!);

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
        firstVisit: state.firstVisit,
      }),
    },
  ),
);
