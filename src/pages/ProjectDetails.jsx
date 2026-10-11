
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers3,
  CheckCircle2,
} from "lucide-react";

import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug, id } = useParams();
  const projectKey = slug || id;

  // Find project using its ID from projects.js
  const project = projects.find(
    (item) => String(item.id) === String(projectKey)
  );

  // Project not found
  if (!project) {
    return (
      <main className="project-details section-padding">
        <div className="container project-details__not-found">
          <span className="project-details__eyebrow">
            PROJECT NOT FOUND
          </span>

          <h1>We couldn't find this project.</h1>

          <p>
            The project may have moved, or the link may be
            incorrect. Explore our other projects instead.
          </p>

          <Link
            to="/portfolio"
            className="project-details__button"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const title = project.title || project.name || "Untitled Project";

  const description =
    project.description ||
    project.summary ||
    "Explore this project and the technology behind it.";

  const category =
    project.category || project.type || "Digital Solution";

  const liveUrl = project.liveUrl || project.demoUrl || project.url;

  const image = project.image || project.imageUrl;

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : Array.isArray(project.techStack)
      ? project.techStack
      : [];

  const features = Array.isArray(project.features)
    ? project.features
    : [];

  return (
    <main className="project-details section-padding">
      <div className="container">
        {/* Back to Portfolio */}
        <Reveal direction="up">
          <Link
            to="/portfolio"
            className="project-details__back"
          >
            <ArrowLeft size={17} />
            Back to Portfolio
          </Link>
        </Reveal>

        {/* Project Hero */}
        <section className="project-details__hero">
          <Reveal direction="up">
            <div className="project-details__intro">
              <span className="project-details__eyebrow">
                {category}
              </span>

              <h1>{title}</h1>

              <p>{description}</p>

              <div className="project-details__actions">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    className="project-details__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project
                    <ArrowUpRight size={18} />
                  </a>
                )}

                <Link
                  to="/contact"
                  className="project-details__button project-details__button--secondary"
                >
                  Discuss a Similar Project
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <div className="project-details__visual">
              {image ? (
                <img
                  src={image}
                  alt={`${title} project preview`}
                  loading="lazy"
                />
              ) : (
                <div className="project-details__placeholder">
                  <Layers3 size={64} strokeWidth={1.2} />

                  <span>{title}</span>

                  <small>Project Preview</small>
                </div>
              )}
            </div>
          </Reveal>
        </section>

        {/* Project Overview */}
        <section className="project-details__content">
          <Reveal direction="up">
            <div className="project-details__section-heading">
              <span className="project-details__eyebrow">
                PROJECT OVERVIEW
              </span>

              <h2>Built around real-world needs.</h2>

              <p>
                Every project starts with understanding the
                problem and designing a solution around its
                users and goals.
              </p>
            </div>
          </Reveal>

          {project.overview && (
            <Reveal direction="up" delay={100}>
              <div className="project-details__overview">
                <h3>About this project</h3>
                <p>{project.overview}</p>
              </div>
            </Reveal>
          )}

          {/* Project Features */}
          {features.length > 0 && (
            <div className="project-details__features">
              {features.map((feature, index) => {
                const featureTitle =
                  typeof feature === "string"
                    ? feature
                    : feature.title || feature.name || "Feature";

                const featureDescription =
                  typeof feature === "string"
                    ? ""
                    : feature.description ||
                      feature.summary ||
                      "";

                return (
                  <Reveal
                    key={`${featureTitle}-${index}`}
                    direction="up"
                    delay={index * 80}
                  >
                    <article className="project-details__feature">
                      <CheckCircle2
                        size={22}
                        aria-hidden="true"
                      />

                      <div>
                        <h3>{featureTitle}</h3>

                        {featureDescription && (
                          <p>{featureDescription}</p>
                        )}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          )}
        </section>

        {/* Technology Stack */}
        {technologies.length > 0 && (
          <section className="project-details__technology">
            <Reveal direction="up">
              <div className="project-details__section-heading">
                <span className="project-details__eyebrow">
                  TECHNOLOGY STACK
                </span>

                <h2>Tools behind the solution.</h2>
              </div>
            </Reveal>

            <div className="project-details__tech-list">
              {technologies.map((technology, index) => {
                const techName =
                  typeof technology === "string"
                    ? technology
                    : technology.name ||
                      technology.title ||
                      "Technology";

                return (
                  <Reveal
                    key={`${techName}-${index}`}
                    direction="up"
                    delay={index * 50}
                  >
                    <div className="project-details__tech-item">
                      <Code2 size={18} aria-hidden="true" />
                      <span>{techName}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        {/* Contact CTA */}
        <Reveal direction="up">
          <section className="project-details__cta">
            <div>
              <span className="project-details__eyebrow">
                HAVE A SIMILAR IDEA?
              </span>

              <h2>Let's build something meaningful.</h2>

              <p>
                Tell us about your goals and let's explore the
                right technology solution for your business.
              </p>
            </div>

            <Link
              to="/contact"
              className="project-details__button"
            >
              Start a Conversation
              <ExternalLink size={17} />
            </Link>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
