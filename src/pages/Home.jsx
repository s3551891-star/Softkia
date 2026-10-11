
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Cloud,
  ShieldCheck,
} from "lucide-react";
import Button from "../components/Button";
import {
  animateElement,
  getStaggerDelay,
  prefersReducedMotion,
} from "../utils/animations";

const capabilities = [
  {
    icon: Code2,
    title: "Product Engineering",
    text: "Modern web applications, APIs and scalable digital products.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    text: "Deployment pipelines, cloud infrastructure and reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Security",
    text: "Quality assurance and security-conscious engineering practices.",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || prefersReducedMotion()) {
      return;
    }

    const heroAnimation = animateElement(
      heroRef.current,
      "fadeInUp",
      {
        duration: 750,
        delay: 80,
      }
    );

    const visualAnimation = animateElement(
      visualRef.current,
      "scaleIn",
      {
        duration: 850,
        delay: 180,
      }
    );

    return () => {
      heroAnimation?.cancel();
      visualAnimation?.cancel();
    };
  }, [shouldReduceMotion]);

  return (
    <>
      <section className="hero-section">
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />

        <div className="container hero-grid">
          <div className="hero-copy" ref={heroRef}>
            <div className="eyebrow">
              <span className="status-dot" />
              SOFTWARE ENGINEERING & DIGITAL SOLUTIONS
            </div>

            <h1>
              Build what’s next.
              <span> Engineer it with confidence.</span>
            </h1>

            <p className="hero-description">
              From product discovery to deployment, SoftKai helps
              businesses turn complex technology challenges into
              dependable digital solutions.
            </p>

            <div className="hero-actions">
              <Button to="/contact">
                Discuss your project
              </Button>

              <Button
                to="/portfolio"
                variant="secondary"
                icon={false}
              >
                Explore portfolio
              </Button>
            </div>

            <div className="hero-note">
              <ArrowDown size={16} />
              <span>Explore our capabilities</span>
            </div>
          </div>

          <div className="hero-visual" ref={visualRef}>
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-core">
              <div className="core-icon">
                <Code2 size={43} />
              </div>

              <span className="core-label">ENGINEER</span>
              <span className="core-caption">
                Think. Build. Deliver.
              </span>
            </div>

            <div className="floating-card floating-card--top">
              <span className="mini-indicator" />

              <div>
                <strong>Product development</strong>
                <small>From idea to release</small>
              </div>

              <ArrowUpRight size={17} />
            </div>

            <div className="floating-card floating-card--bottom">
              <Cloud size={22} />

              <div>
                <strong>Cloud-ready</strong>
                <small>Built to scale</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom-line">
          <span>STRATEGY</span>
          <span>ENGINEERING</span>
          <span>DELIVERY</span>
          <span>CONTINUOUS IMPROVEMENT</span>
        </div>
      </section>

      <section className="capabilities-section section-space">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">WHAT WE DO</span>

              <h2>
                Technology that moves
                <span> business forward.</span>
              </h2>
            </div>

            <p>
              A collaborative engineering partner for your product,
              platform and infrastructure needs.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="capability-card"
                  key={item.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 24 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? {}
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion
                      ? 0
                      : getStaggerDelay(index, 100, 300) / 1000,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="capability-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <Button
                    to="/services"
                    variant="text"
                    icon={false}
                  >
                    Explore services
                  </Button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
