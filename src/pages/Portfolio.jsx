
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Search,
} from "lucide-react";

import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(
      projects
        .map((project) => project.category)
        .filter(Boolean)
    ),
  ];

  const filteredProjects = projects.filter((project) => {
    const searchText = searchTerm.toLowerCase();

    const matchesSearch =
      (project.name || "").toLowerCase().includes(searchText) ||
      (project.description || "").toLowerCase().includes(searchText) ||
      (project.category || "").toLowerCase().includes(searchText);

    const matchesCategory =
      activeCategory === "All" ||
      project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="portfolio-page section-padding">
      <div className="container">
        <Reveal direction="up">
          <section className="portfolio-hero">
            <span className="portfolio-eyebrow">
              OUR PORTFOLIO
            </span>

            <h1>
              Digital experiences.
              <br />
              <span>Real-world impact.</span>
            </h1>

            <p>
              Explore digital experiences across industries,
              from healthcare and education to engineering
              and financial services.
            </p>

            <div className="portfolio-count">
              <Layers3 size={19} />
              <span>
                {projects.length} projects in our collection
              </span>
            </div>
          </section>
        </Reveal>

        {/* Search and Categories */}
        <section className="portfolio-controls">
          <label className="portfolio-search">
            <Search size={19} />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search projects..."
              aria-label="Search projects"
            />
          </label>

          <div
            className="portfolio-filters"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "portfolio-filter portfolio-filter--active"
                    : "portfolio-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <section className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <Reveal
                key={project.id}
                direction="up"
                delay={(index % 3) * 80}
              >
                <article className="portfolio-card">
                  <div className="portfolio-card__visual">
                    <div className="portfolio-card__number">
                      {project.number ||
                        String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="portfolio-card__icon">
                      <Layers3
                        size={36}
                        strokeWidth={1.3}
                      />
                    </div>

                    <span className="portfolio-card__category">
                      {project.category || "Digital Solution"}
                    </span>

                    <Link
                      to={`/portfolio/${project.id}`}
                      className="portfolio-card__open"
                      aria-label={`View ${project.name} project details`}
                    >
                      <ArrowUpRight size={21} />
                    </Link>
                  </div>

                  <div className="portfolio-card__body">
                    <span className="portfolio-card__eyebrow">
                      PROJECT {project.number || ""}
                    </span>

                    <h2>{project.name}</h2>

                    <p>
                      {project.description ||
                        "Explore this digital experience."}
                    </p>

                    <div className="portfolio-card__actions">
                      <Link
                        to={`/portfolio/${project.id}`}
                        className="portfolio-card__details"
                      >
                        Explore Project
                        <ArrowUpRight size={17} />
                      </Link>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-card__external"
                          aria-label={`Visit ${project.name} website`}
                          title="Visit live website"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </section>
        ) : (
          <div className="portfolio-empty">
            <Search size={32} />
            <h2>No projects found</h2>
            <p>
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              className="portfolio-reset"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <Reveal direction="up">
          <section className="portfolio-cta">
            <div>
              <span className="portfolio-eyebrow">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>Let's create your next success story.</h2>

              <p>
                Share your idea with our team and explore
                the right digital solution for your goals.
              </p>
            </div>

            <Link
              to="/contact"
              className="portfolio-cta__button"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </Link>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
