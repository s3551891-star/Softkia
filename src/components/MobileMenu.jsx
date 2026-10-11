
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigation } from "../data/navigation";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__top">
        <span className="eyebrow">NAVIGATION</span>
        <button
          className="icon-button"
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <X size={23} />
        </button>
      </div>

      <nav className="mobile-menu__links" aria-label="Mobile navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `mobile-menu__link${isActive ? " active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a className="mobile-menu__contact" href="https://softkai.com/">
        Visit SoftKai.com ↗
      </a>
    </div>
  );
}
