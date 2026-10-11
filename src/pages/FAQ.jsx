
import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Services",
    question: "What services does SoftKai provide?",
    answer:
      "SoftKai's service offerings should be confirmed through its official website and current service information. Visit the official website to explore verified details.",
  },
  {
    category: "Process",
    question: "How does a software project typically begin?",
    answer:
      "A project commonly starts with a discussion about business goals, user needs, scope, priorities, and technical requirements. The exact SoftKai engagement process should be confirmed with its team.",
  },
  {
    category: "Technology",
    question: "Which technologies are suitable for my project?",
    answer:
      "The right technology depends on your product requirements, expected users, integrations, security needs, and long-term maintenance plans.",
  },
  {
    category: "Engagement",
    question: "How can I discuss an engagement with SoftKai?",
    answer:
      "Use the official SoftKai website to find current contact options and discuss your project requirements directly with the team.",
  },
  {
    category: "KrevoPilot",
    question: "What is KrevoPilot?",
    answer:
      "KrevoPilot provides a read-only operational view of Kubernetes health, applications, resource usage, optimization opportunities, events, sanitized manifests, and AI-assisted insights.",
  },
  {
    category: "KrevoPilot",
    question: "What rollout approach is recommended for KrevoPilot?",
    answer:
      "The onboarding guide recommends a staged rollout: begin in a test cluster, validate the setup in staging, and proceed to production after review and approval.",
  },
];

const categories = ["All", ...new Set(faqs.map((faq) => faq.category))];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div className="faq-page">
      <section className="faq-hero container">
        <span className="eyebrow">HELP CENTER · SOFTKAI</span>

        <h1>
          Questions, meet
          <br />
          <span className="gradient-text">clear answers.</span>
        </h1>

        <p>
          Explore answers about services, project planning,
          technology choices, and KrevoPilot onboarding.
        </p>

        <div className="faq-hero-note">
          <MessageCircle size={19} />
          <span>Find the information you need to get started.</span>
        </div>
      </section>

      <section className="container section-space">
        <div className="faq-layout">
          <aside className="faq-sidebar">
            <span className="eyebrow">CATEGORIES</span>

            <div className="faq-category-list">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`faq-category ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenIndex(0);
                  }}
                >
                  {category}
                  <span>
                    {category === "All"
                      ? faqs.length
                      : faqs.filter((faq) => faq.category === category)
                          .length}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="faq-content">
            <div className="faq-content-heading">
              <div>
                <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
                <h2>{activeCategory === "All" ? "Common questions" : activeCategory}</h2>
              </div>

              <span className="faq-count">
                {filteredFaqs.length} questions
              </span>
            </div>

            <div className="faq-list">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    className={`faq-item ${isOpen ? "open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className="faq-chevron"
                      />
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container section-space">
        <div className="faq-cta">
          <div>
            <span className="eyebrow">STILL HAVE QUESTIONS?</span>
            <h2>Let's discuss your requirements.</h2>
            <p>
              Visit SoftKai's official website for verified
              company information and current contact options.
            </p>
          </div>

          <a
            className="ui-button ui-button--primary"
            href="https://softkai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit SoftKai <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}
