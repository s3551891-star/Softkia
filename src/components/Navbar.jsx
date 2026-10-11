
import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { navigation } from "../data/navigation";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Close the mobile menu when switching to desktop.
  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <header className="site-header">
        <div className="nav-container">
          <Logo />

          {!isMobile && (
            <nav
              className="desktop-nav"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          )}

          {!isMobile && (
            <a
              className="nav-cta"
              href="https://softkai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Talk <ArrowUpRight size={17} />
            </a>
          )}

          {isMobile && (
            <button
              className="mobile-menu-trigger"
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </header>

      {isMobile && (
        <MobileMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
