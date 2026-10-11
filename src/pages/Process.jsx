import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Lightbulb,
  Rocket,
  Target,
} from "lucide-react";

import Button from "../components/Button";
import { processSteps } from "../data/process";

const processIcons = [
  Compass,
  Target,
  Lightbulb,
  Rocket,
  Check,
  ArrowUpRight,
];

export default function Process() {
  return (
    <div className="process-page">
      <section className="process-hero container">
        <motion.div
          className="process-hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <span className="status-dot" />
            HOW WE APPROACH THE WORK
          </span>

          <h1>
            From first idea
            <br />
            to <span className="gradient-text">meaningful impact.</span>
          </h1>

          <p>
            A thoughtful process helps turn complex ideas into
            clear priorities, considered design decisions, and
            dependable digital experiences.
          </p>

          <div className="process-hero__actions">
            <Button to="/contact">
              Discuss Your Project
            </Button>

            <a className="text-link" href="#our-process">
              Explore our process
              <ArrowDown size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="process-hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="process-visual__glow" />

          <div className="process-visual__card">
            <div className="process-visual__header">
              <span className="process-visual__indicator" />
              <span>PROJECT JOURNEY</span>
              <span className="process-visual__counter">06 STEPS</span>
            </div>

            <div className="process-visual__list">
              {processSteps.map((step, index) => {
                const Icon = processIcons[index];

                return (
                  <div
                    className="process-visual__item"
                    key={step.number}
                  >
                    <span className="process-visual__icon">
                      <Icon size={17} />
                    </span>

                    <div>
                      <span className="process-visual__step">
                        STEP {step.number}
                      </span>
                      <p>{step.title}</p>
                    </div>

                    <ArrowRight
                      className="process-visual__arrow"
                      size={15}
                    />
                  </div>
                );
              })}
            </div>

            <div className="process-visual__footer">
              <span>Clarity</span>
              <span className="process-visual__line" />
              <span>Delivery</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="process-timeline section-space"
        id="our-process"
      >
        <div className="container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">THE WORKFLOW</span>

            <h2>
              Six steps.
              <br />
              <span className="gradient-text">
                One considered approach.
              </span>
            </h2>

            <p>
              Every project is different, so the exact workflow
              adapts to its scope, goals, and requirements.
            </p>
          </motion.div>

          <div className="process-steps">
            <div className="process-steps__rail" />

            {processSteps.map((step, index) => {
              const Icon = processIcons[index];

              return (
                <motion.article
                  className="process-step"
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 2) * 0.08,
                  }}
                >
                  <div className="process-step__marker">
                    <span>{step.number}</span>
                  </div>

                  <div className="process-step__card">
                    <div className="process-step__top">
                      <span className="process-step__phase">
                        PHASE {step.number}
                      </span>

                      <span className="process-step__icon">
                        <Icon size={23} strokeWidth={1.6} />
                      </span>
                    </div>

                    <h3>{step.title}</h3>

                    <p className="process-step__description">
                      {step.description}
                    </p>

                    <div className="process-step__deliverables">
                      <span className="process-step__label">
                        FOCUS AREAS
                      </span>

                      <ul>
                        {step.deliverables.map((item) => (
                          <li key={item}>
                            <Check size={15} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="process-step__bottom">
                      <span>{step.duration}</span>
                      <span>SOFTKAI / {step.number}</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process-principles container">
        <div className="process-principles__intro">
          <span className="eyebrow">OUR PRINCIPLES</span>

          <h2>
            Good work starts
            <br />
            with <span className="gradient-text">clear thinking.</span>
          </h2>
        </div>

        <div className="process-principles__grid">
          <article>
            <span className="process-principle__number">01</span>
            <h3>Clarity over complexity</h3>
            <p>
              Keep objectives, decisions, and priorities
              understandable throughout the work.
            </p>
          </article>

          <article>
            <span className="process-principle__number">02</span>
            <h3>Quality at every stage</h3>
            <p>
              Consider usability, responsiveness, and
              maintainability from the beginning.
            </p>
          </article>

          <article>
            <span className="process-principle__number">03</span>
            <h3>Improve through feedback</h3>
            <p>
              Review progress, learn from feedback, and
              refine the solution when needed.
            </p>
          </article>
        </div>
      </section>

      <section className="process-cta container">
        <div className="process-cta__icon">
          <Rocket size={28} />
        </div>

        <div className="process-cta__content">
          <span className="eyebrow">YOUR NEXT STEP</span>

          <h2>
            Have an idea worth building?
          </h2>

          <p>
            Start with the problem you want to solve.
            We can explore the next steps together.
          </p>
        </div>

        <Button to="/contact">
          Start a Conversation
        </Button>
      </section>
    </div>
  );
}