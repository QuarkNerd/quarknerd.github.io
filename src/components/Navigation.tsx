import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#css-projects" className="nav-link">
          CSS Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
        <a href="#game-projects" className="nav-link">
          Games
        </a>
        <a href="#other" className="nav-link">
          Other
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
