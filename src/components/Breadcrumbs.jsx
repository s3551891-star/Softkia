
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const defaultLabels = {
  about: "About",
  services: "Services",
  portfolio: "Portfolio",
  technologies: "Technologies",
  process: "Our Process",
  engagement: "Engagement Models",
  krevopilot: "KrevoPilot",
  faq: "FAQs",
  contact: "Contact",
};

function formatSegment(segment) {
  return decodeURIComponent(segment)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export default function Breadcrumbs({
  labels = {},
  homeLabel = "Home",
  className = "",
  includeHome = true,
}) {
  const location = useLocation();

  const segments = location.pathname
    .split("/")
    .filter(Boolean);

  const items = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    const isLast = index === segments.length - 1;

    return {
      label:
        labels[segment] ??
        defaultLabels[segment] ??
        formatSegment(segment),
      path,
      isLast,
    };
  });

  if (segments.length === 0) {
    return null;
  }

  return (
    <nav
      className={["breadcrumbs", className]
        .filter(Boolean)
        .join(" ")}
      aria-label="Breadcrumb"
    >
      <ol className="breadcrumbs__list">
        {includeHome && (
          <li className="breadcrumbs__item">
            <Link
              to="/"
              className="breadcrumbs__link"
              aria-label={homeLabel}
            >
              <Home size={15} aria-hidden="true" />
              <span>{homeLabel}</span>
            </Link>

            <ChevronRight
              className="breadcrumbs__separator"
              size={15}
              aria-hidden="true"
            />
          </li>
        )}

        {items.map((item) => (
          <li
            className="breadcrumbs__item"
            key={item.path}
          >
            {item.isLast ? (
              <span
                className="breadcrumbs__current"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="breadcrumbs__link"
              >
                {item.label}
              </Link>
            )}

            {!item.isLast && (
              <ChevronRight
                className="breadcrumbs__separator"
                size={15}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
