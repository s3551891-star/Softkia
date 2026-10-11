
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const iconMap = {
  email: Mail,
  location: MapPin,
  message: MessageCircle,
};

export default function ContactInfo({
  items = [],
  title = "Let's connect",
  description = "Choose an option below to continue the conversation.",
  className = "",
}) {
  const validItems = items.filter(
    (item) => item && item.label && item.value
  );

  return (
    <section
      className={["contact-info", className]
        .filter(Boolean)
        .join(" ")}
      aria-label={title}
    >
      <div className="contact-info__heading">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      {validItems.length > 0 ? (
        <div className="contact-info__list">
          {validItems.map((item, index) => {
            const Icon =
              iconMap[item.icon] || MessageCircle;

            const content = (
              <>
                <span className="contact-info__icon">
                  <Icon size={21} aria-hidden="true" />
                </span>

                <span className="contact-info__content">
                  <span className="contact-info__label">
                    {item.label}
                  </span>
                  <span className="contact-info__value">
                    {item.value}
                  </span>
                  {item.description && (
                    <span className="contact-info__description">
                      {item.description}
                    </span>
                  )}
                </span>

                {item.href && (
                  <ArrowUpRight
                    className="contact-info__arrow"
                    size={18}
                    aria-hidden="true"
                  />
                )}
              </>
            );

            return (
              <div
                className="contact-info__item"
                key={item.id ?? `${item.label}-${index}`}
              >
                {item.href ? (
                  <a
                    className="contact-info__link"
                    href={item.href}
                    target={
                      item.external ? "_blank" : undefined
                    }
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div className="contact-info__link">
                    {content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="contact-info__empty">
          Contact options will appear here when configured.
        </p>
      )}
    </section>
  );
}
