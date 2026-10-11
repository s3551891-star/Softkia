import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Monitor,
  Palette,
  Server,
  ShieldCheck,
  Layers3,
} from "lucide-react";

import Button from "../components/Button";
import { technologies } from "../data/technologies";

const iconMap = {
  Monitor,
  Server,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Palette,
};

export default function Technologies() {
  return (
    <div className="technologies-page">
      <section className="technologies-hero container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">
            <Layers3 size={15} />
            OUR TECHNOLOGY STACK
          </span>

          <h1>
            The right tools.
            <br />
            <span className="gradient-text">
              Thoughtful engineering.
            </span>
          </h1>

          <p className="technologies-hero__description">
            Explore the technologies and engineering disciplines
            that can support modern digital products, applications,
            and business workflows.
          </p>

          <div className="technologies-hero__actions">
            <Button to="/contact">
              Discuss Your Project
            </Button>

            <a
              className="text-link"
              href="#technology-stack"
            >
              Explore technologies
              <ArrowDown size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="technologies-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="tech-orbit tech-orbit--outer" />
          <div className="tech-orbit tech-orbit--inner" />

          <div className="tech-visual-core">
            <Layers3 size={48} strokeWidth={1.3} />
            <span>ENGINEER</span>
          </div>

          <span className="tech-floating-label tech-floating-label--one">
            Frontend
          </span>

          <span className="tech-floating-label tech-floating-label--two">
            AI & Data
          </span>

          <span className="tech-floating-label tech-floating-label--three">
            Cloud
          </span>
        </motion.div>
      </section>

      <section
        className="technologies-stack section-space"
        id="technology-stack"
      >
        <div className="container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">
              CAPABILITIES & TOOLS
            </span>

            <h2>
              Technology for
              <span className="gradient-text"> what comes next.</span>
            </h2>

            <p>
              Different disciplines work together to create
              complete digital experiences.
            </p>
          </motion.div>

          <div className="technologies-grid">
            {technologies.map((technology, index) => {
              const Icon = iconMap[technology.icon];

              return (
                <motion.article
                  className="technology-card"
                  key={technology.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
                >
                  <div className="technology-card__top">
                    <span className="technology-card__number">
                      {technology.number}
                    </span>

                    <span className="technology-card__icon">
                      <Icon size={24} strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3>{technology.title}</h3>

                  <p>{technology.description}</p>

                  <div className="technology-card__tools">
                    {technology.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>

                  <a
                    className="technology-card__link"
                    href="/contact"
                  >
                    Discuss this capability
                    <ArrowUpRight size={17} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="technologies-cta container">
        <div>
          <span className="eyebrow">HAVE AN IDEA?</span>

          <h2>
            Let's find the right
            <span className="gradient-text"> approach.</span>
          </h2>

          <p>
            Tell us what you want to build and explore
            the right technical direction for your project.
          </p>
        </div>

        <Button to="/contact">
          Start a Conversation
        </Button>
      </section>
    </div>
  );
}