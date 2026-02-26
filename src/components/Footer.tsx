export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} Quark Nerd. Built with ❤️, pixels and good vibe(
          coding)s [Unlike most of the stuff above].
        </p>
      </div>
    </footer>
  );
}
