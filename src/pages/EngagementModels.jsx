import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  Layers3,
  MessageSquare,
  Users,
} from "lucide-react";

import Button from "../components/Button";
import { engagementModels } from "../data/engagementModels";

const iconMap = {
  Layers3,
  Users,
  Compass,
};

export default function Engagement() {
  return (
    <div className="engagement-page">
      <section className="engagement-hero container">
        <motion.div
          className="engagement-hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <span className="status-dot" />
            WAYS TO WORK TOGETHER
          </span>

          <h1>
            A collaboration model
            <br />
            that fits your
            <br />
            <span className="gradient-text">next big idea.</span>
          </h1>

          <p>
            Every project has different needs. Explore a few
            common ways to approach planning, engineering, and
            ongoing collaboration.
          </p>

          <div className="engagement-hero__actions">
            <Button to="/contact">
              Discuss Your Requirements
            </Button>

            <a className="text-link" href="#engagement-options">
              Explore the options
              <ArrowDown size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="engagement-hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className="engagement-visual__glow" />

          <div className="engagement-visual__panel">
            <div className="engagement-visual__header">
              <span className="engagement-visual__status" />
              COLLABORATION FRAMEWORK
            </div>

            <div className="engagement-visual__center">
              <div className="engagement-visual__center-icon">
                <MessageSquare size={30} />
              </div>

              <span>YOUR OBJECTIVES</span>

              <p>One shared direction</p>
            </div>

            <div className="engagement-visual__branches">
              {engagementModels.map((model) => {
                const Icon = iconMap[model.icon];

                return (
                  <div
                    className="engagement-visual__branch"
                    key={model.id}
                  >
                    <span>
                      <Icon size={18} />
                    </span>

                    <div>
                      <strong>{model.title}</strong>
                      <small>{model.label}</small>
                    </div>

                    <ArrowRight size={15} />
                  </div>
                );
              })}
            </div>

            <div className="engagement-visual__footer">
              FLEXIBLE APPROACH
              <span>•</span>
              SHARED GOALS
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="engagement-options section-space"
        id="engagement-options"
      >
        <div className="container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">ENGAGEMENT OPTIONS</span>

            <h2>
              Different needs.
              <br />
              <span className="gradient-text">
                Different approaches.
              </span>
            </h2>

            <p>
              Start with your goals, scope, and working
              requirements to explore an appropriate approach.
            </p>
          </motion.div>

          <div className="engagement-grid">
            {engagementModels.map((model, index) => {
              const Icon = iconMap[model.icon];

              return (
                <motion.article
                  className="engagement-card"
                  key={model.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >
                  <div className="engagement-card__top">
                    <span className="engagement-card__number">
                      MODEL / {model.number}
                    </span>

                    <span className="engagement-card__icon">
                      <Icon size={24} strokeWidth={1.6} />
                    </span>
                  </div>

                  <span className="engagement-card__label">
                    {model.label}
                  </span>

                  <h3>{model.title}</h3>

                  <p className="engagement-card__description">
                    {model.description}
                  </p>

                  <div className="engagement-card__divider" />

                  <span className="engagement-card__features-title">
                    WHAT IT MAY INCLUDE
                  </span>

                  <ul className="engagement-card__features">
                    {model.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    to="/contact"
                    variant="secondary"
                    className="engagement-card__button"
                  >
                    Discuss This Option
                  </Button>
                </motion.article>
              );
            })}
          </div>

          <p className="engagement-disclaimer">
            These are general engagement approaches, not confirmed
            SoftKai service packages or contractual terms.
            Availability and scope should be discussed directly.
          </p>
        </div>
      </section>

      <section className="engagement-how container">
        <div className="engagement-how__heading">
          <span className="eyebrow">START WITH A CONVERSATION</span>

          <h2>
            From requirements
            <br />
            to a <span className="gradient-text">clear next step.</span>
          </h2>

          <p>
            Begin with your challenge. The details can be
            discussed before deciding how to move forward.
          </p>
        </div>

        <div className="engagement-how__steps">
          <article>
            <span>01</span>
            <div>
              <h3>Share the idea</h3>
              <p>
                Explain your goals, audience, and the problem
                you want to solve.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h3>Discuss the scope</h3>
              <p>
                Review requirements, priorities, constraints,
                and possible approaches.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <h3>Agree on next steps</h3>
              <p>
                Clarify responsibilities, expected outcomes,
                and the proposed way forward.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="engagement-cta container">
        <div className="engagement-cta__icon">
          <MessageSquare size={27} />
        </div>

        <div className="engagement-cta__content">
          <span className="eyebrow">LET'S TALK</span>

          <h2>Not sure which approach fits?</h2>

          <p>
            Start a conversation about your requirements
            and explore the available options.
          </p>
        </div>

        <Button to="/contact">
          Contact SoftKai
        </Button>
      </section>
    </div>
  );
}