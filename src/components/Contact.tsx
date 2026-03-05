export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="pixel-box contact-box">
          <p>Let&apos;s connect! Find me on:</p>
          <div className="social-links">
            <a
              href="https://github.com/QuarkNerd"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              data-track="social_github"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gurveera/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              data-track="social_linkedin"
            >
              LinkedIn
            </a>
            <a href="mailto:garora1410@yahoo.co.uk" className="social-link" data-track="social_email">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
