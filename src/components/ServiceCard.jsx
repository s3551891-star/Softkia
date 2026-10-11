import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Globe,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  Globe,
  Code2,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  PanelsTopLeft,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Code2;

  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="service-card__number">{service.number}</span>

        <span className="service-card__icon">
          <Icon size={23} strokeWidth={1.7} />
        </span>
      </div>

      <h3>{service.title}</h3>

      <p>{service.shortDescription}</p>

      <div className="service-card__tags">
        {service.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <Link
        className="service-card__link"
        to={`/services/${service.slug}`}
        aria-label={`Explore ${service.title}`}
      >
        Explore service
        <ArrowUpRight size={18} />
      </Link>
    </article>
  );
}