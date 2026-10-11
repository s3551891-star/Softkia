
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import { company } from "../data/company";

const valueIcons = [
  Lightbulb,
  ShieldCheck,
  Users,
  Compass,
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero container">
        <motion.div
          className="about-hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">GET TO KNOW US</span>

          <h1>
            Good technology
            <br />
            starts with
            <span className="gradient-text"> purpose.</span>
          </h1>

          <p>{company.description}</p>

          <div className="about-hero__actions">
            <Button to="/services">
              Explore our services
            </Button>

            <Link className="text-link" to="/contact">
              Get in touch
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="about-hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-glow" />

          <div className="about-statement-card">
            <span className="about-statement-card__eyebrow">
              OUR APPROACH
            </span>

            <div className="about-statement-card__symbol">
              <Compass size={32} strokeWidth={1.5} />
            </div>

            <h2>Ideas into meaningful digital experiences.</h2>

            <p>
              Clear thinking. Thoughtful engineering.
              A focus on the people who use the product.
            </p>

            <div className="about-statement-card__footer">
              <span className="status-dot" />
              Purpose before complexity
            </div>
          </div>
        </motion.div>
      </section>

      <section className="about-purpose container">
        <div className="about-purpose__heading">
          <span className="eyebrow">OUR PURPOSE</span>
          <h2>
            Technology should
            <br />
            <span className="gradient-text">
              move ideas forward.
            </span>
          </h2>
        </div>

        <div className="about-purpose__content">
          <article className="purpose-card">
            <span className="purpose-card__number">01 / MISSION</span>
            <h3>What guides our work</h3>
            <p>{company.mission}</p>
          </article>

          <article className="purpose-card">
            <span className="purpose-card__number">02 / VISION</span>
            <h3>What we work toward</h3>
            <p>{company.vision}</p>
          </article>
        </div>
      </section>

      <section className="about-values container">
        <div className="about-values__heading">
          <span className="eyebrow">WHAT MATTERS</span>
          <h2>
            Principles behind
            <span className="gradient-text"> the work.</span>
          </h2>
          <p>
            A thoughtful approach to building, improving,
            and maintaining digital experiences.
          </p>
        </div>

        <div className="about-values__grid">
          {company.values.map((value, index) => {
            const Icon = valueIcons[index];

            return (
              <motion.article
                className="about-value-card"
                key={value.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <div className="about-value-card__top">
                  <span>{value.number}</span>
                  <Icon size={22} />
                </div>

                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="about-cta container">
        <div>
          <span className="eyebrow">LET'S BUILD SOMETHING USEFUL</span>
          <h2>Have a challenge worth solving?</h2>
          <p>
            Start a conversation about your idea, goals,
            and possible next steps.
          </p>
        </div>

        <Link
          className="ui-button ui-button--primary"
          to="/contact"
        >
          Contact SoftKai
          <ArrowUpRight size={17} />
        </Link>
      </section>
    </div>
  );
}
