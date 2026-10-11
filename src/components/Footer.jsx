
import { ArrowUpRight, Boxes, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { navigation } from "../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link
            to="/"
            className="brand-logo"
            aria-label="SoftKai home"
          >
            <span className="brand-mark">
              <Boxes size={25} aria-hidden="true" />
            </span>

            <span className="brand-word">
              SoftKai<span>Technologies</span>
            </span>
          </Link>

          <p>
            Engineering digital products and dependable technology
            solutions for ambitious businesses.
          </p>

          <a
            className="footer-external-link"
            href="https://softkai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official website
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-nav-column">
          <h3>Explore</h3>

          {navigation.slice(0, 5).map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-nav-column">
          <h3>Discover</h3>

          {navigation.slice(5).map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-nav-column">
          <h3>Connect</h3>

          <a
            href="https://softkai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={16} aria-hidden="true" />
            Official Website
          </a>

          <a
            href="https://www.linkedin.com/company/softkai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={16} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} SoftKai Technologies.</span>
        <span>Built for what’s next.</span>
      </div>
    </footer>
  );
}
