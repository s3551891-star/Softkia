
import {
  ArrowUpRight,
  Globe,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const socialIcons = {
  linkedin: Linkedin,
  instagram: Instagram,
  website: Globe,
  youtube: Youtube,
  other: ArrowUpRight,
};

export default function SocialLinks({
  links = [],
  className = "",
  iconSize = 19,
  showLabels = false,
  label = "Social media links",
}) {
  const validLinks = links.filter(
    (item) =>
      item &&
      typeof item.label === "string" &&
      typeof item.href === "string" &&
      item.href.trim() !== ""
  );

  if (validLinks.length === 0) {
    return null;
  }

  return (
    <nav
      className={["social-links", className]
        .filter(Boolean)
        .join(" ")}
      aria-label={label}
    >
      {validLinks.map((item) => {
        const iconKey = (
          item.icon || item.label
        ).toLowerCase();

        const Icon = socialIcons[iconKey] || ArrowUpRight;

        return (
          <a
            key={item.id || item.label}
            className="social-links__item"
            href={item.href}
            aria-label={item.label}
            title={item.label}
            target={
              item.external === false ? undefined : "_blank"
            }
            rel={
              item.external === false
                ? undefined
                : "noopener noreferrer"
            }
          >
            <Icon size={iconSize} aria-hidden="true" />

            {showLabels && (
              <span className="social-links__label">
                {item.label}
              </span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
