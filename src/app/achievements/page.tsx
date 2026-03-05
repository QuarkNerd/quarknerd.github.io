"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAchievementStore, ACHIEVEMENTS } from "@/store/achievements";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AchievementsPage() {
  const { unlockedIds } = useAchievementStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <main className="container" style={{ flex: 1, padding: "40px 20px" }}>
          <div className="section-title-container">
            <h2 className="section-title">Achievements</h2>
          </div>
          <div className="achievements-stats">Loading Data...</div>
        </main>
        <Footer />
      </div>
    );
  }

  // Prevent accessing explicitly before having any achievements
  if (unlockedIds.length === 0) {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <main
          className="container"
          style={{
            flex: 1,
            padding: "40px 20px",
            textAlign: "center",
          }}
        >
          <div className="section-title-container">
            <h2 className="section-title">Classified</h2>
          </div>
          <div
            className="pixel-box"
            style={{ margin: "40px auto", maxWidth: "600px" }}
          >
            <p>
              You haven't uncovered any secrets yet. Keep exploring the site!
            </p>
            <br />
            <Link href="/" className="btn btn-primary">
              Return to Base
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main className="container" style={{ flex: 1, padding: "40px 20px" }}>
        <div style={{ display: "block", marginBottom: "20px" }}>
          <Link href="/" className="back-link">
            &lt; Return to Portfolio
          </Link>
        </div>

        <div
          className="section-title-container"
          style={{
            display: "block",
            textAlign: "center",
            position: "relative",
            left: "0",
            transform: "none",
          }}
        >
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="achievements-stats">
          {unlockedIds.length} / {ACHIEVEMENTS.length} Unlocked
        </div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((achievement) => {
            const isUnlocked = unlockedIds.includes(achievement.id);

            return (
              <div
                key={achievement.id}
                className={`achievement-item ${isUnlocked ? "" : "locked"}`}
              >
                <div className="achievement-icon">
                  {isUnlocked ? achievement.icon : "❓"}
                </div>
                <div className="achievement-info">
                  <h3>{achievement.title}</h3>
                  <p>
                    {isUnlocked
                      ? achievement.description
                      : "The conditions to unlock this achievement are a secret."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
