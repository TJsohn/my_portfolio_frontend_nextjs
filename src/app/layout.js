import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TJ Sohn - Developer & Problem Solver",
  description: "Personal portfolio site of TJ Sohn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav id="main-nav">
            <div className="nav-container">
              <div className="nav-brand">
                <Link href="/">TJ Sohn</Link>
              </div>

              <div className="nav-menu" id="nav-menu">
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="/about" className="nav-link">
                  About
                </Link>
                <Link href="/projects" className="nav-link">
                  Projects
                </Link>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </div>

              <div className="nav-actions">
                <div className="hamburger" id="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main style={{ marginTop: "75px" }}>{children}</main>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const hamburger = document.getElementById('hamburger');
                const navMenu = document.getElementById('nav-menu');
                
                hamburger?.addEventListener('click', function() {
                  hamburger.classList.toggle('active');
                  navMenu.classList.toggle('active');
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
