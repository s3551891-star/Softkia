
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import Breadcrumbs from "../components/Breadcrumbs";
import { services } from "../data/services";

export default function Services() {
  return (
    <div className="services-page">
      <div className="container">
        <Breadcrumbs />
      </div>

      <section className="services-hero container">
        <motion.div
          className="services-hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <Sparkles size={15} />
            WHAT WE CAN BUILD
          </span>

          <h1>
            Technology with
            <span className="gradient-text"> purpose.</span>
          </h1>

          <p>
            Explore digital capabilities designed to help turn business
            requirements into practical technology experiences.
          </p>

          <div className="services-hero__actions">
            <Button to="/contact">Discuss your project</Button>

            <Link className="text-link" to="/portfolio">
              Explore portfolio <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>

        <div className="services-hero__visual" aria-hidden="true">
          <div className="service-orbit service-orbit--one" />
          <div className="service-orbit service-orbit--two" />

          <div className="services-visual-card">
            <span className="services-visual-card__label">
              DIGITAL CAPABILITIES
            </span>

            <div className="services-visual-card__line">
              <span>Strategy</span>
              <span>01</span>
            </div>

            <div className="services-visual-card__line">
              <span>Engineering</span>
              <span>02</span>
            </div>

            <div className="services-visual-card__line">
              <span>Experience</span>
              <span>03</span>
            </div>

            <div className="services-visual-card__footer">
              <span className="status-dot" />
              Built around your goals
            </div>
          </div>
        </div>
      </section>

      <section className="services-list-section container">
        <div className="services-section-heading">
          <div>
            <span className="eyebrow">OUR CAPABILITIES</span>
            <h2>
              The right tools for
              <br />
              <span className="gradient-text">your next idea.</span>
            </h2>
          </div>

          <p>
            Start with a clear goal. Explore the capabilities that may help
            you get there.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: (index % 3) * 0.08,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="services-bottom-cta container">
        <div>
          <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
          <h2>Let’s talk about what you want to build.</h2>
          <p>
            Share your idea and start a conversation about possible next steps.
          </p>
        </div>

        <Button to="/contact">
          Start a conversation
        </Button>
      </section>
    </div>
  );
}
