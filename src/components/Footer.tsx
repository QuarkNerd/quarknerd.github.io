export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} Quark Nerd. Built with ❤️, pixels and good vibes
          (coding) [Unlike most of the stuff above].
        </p>
      </div>
    </footer>
  );
}
