
import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Send,
  ShieldCheck,
} from "lucide-react";
import ContactInfo from "../components/ContactInfo";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "Web Development",
  budget: "",
  message: "",
};

const services = [
  "Web Development",
  "Mobile App Development",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "KrevoPilot",
  "Other",
];

const contactItems = [
  {
    id: "project-discussion",
    label: "Project discussion",
    value: "Share your project idea",
    description: "Discuss your goals and requirements.",
    icon: "message",
  },
  {
    id: "official-website",
    label: "Official website",
    value: "softkai.com",
    description: "Visit the official SoftKai website.",
    icon: "message",
    href: "https://softkai.com/",
    external: true,
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please describe your project.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  }

  function resetForm() {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero container">
        <span className="eyebrow">
          LET'S BUILD SOMETHING MEANINGFUL
        </span>

        <h1>
          Your next big idea
          <br />
          <span className="gradient-text">starts here.</span>
        </h1>

        <p>
          Tell us about your goals, challenges, or product idea.
          Start a conversation about your project with SoftKai.
        </p>

        <div className="contact-hero-trust">
          <span>
            <ShieldCheck size={16} aria-hidden="true" />
            Clear project requirements
          </span>

          <span>
            <Globe size={16} aria-hidden="true" />
            Technology-focused solutions
          </span>
        </div>
      </section>

      <section
        className="container contact-section"
        aria-label="Contact SoftKai"
      >
        <div className="contact-layout">
          <aside className="contact-sidebar">
            <span className="eyebrow">GET IN TOUCH</span>

            <h2>
              Let's turn your
              <span className="gradient-text">
                {" "}vision into reality.
              </span>
            </h2>

            <p className="contact-sidebar-description">
              Share your project details so the right requirements
              and next steps can be discussed.
            </p>

            <ContactInfo
              className="contact-info-panel"
              title="Start a conversation"
              description="Choose an option below to learn more or discuss your project."
              items={contactItems}
            />

            <div className="contact-assurance">
              <span className="contact-assurance-icon">
                <ShieldCheck size={20} aria-hidden="true" />
              </span>

              <div>
                <strong>Designed around your goals</strong>
                <p>
                  Explain the problem you want to solve and the
                  outcome you hope to achieve.
                </p>
              </div>
            </div>

            <a
              className="contact-official-link"
              href="https://softkai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit official SoftKai website
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </aside>

          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success" role="status">
                <span className="contact-success-icon">
                  <CheckCircle2 size={44} aria-hidden="true" />
                </span>

                <span className="eyebrow">
                  VALIDATION COMPLETE
                </span>

                <h2>Everything looks good!</h2>

                <p>
                  Your form passed frontend validation. Your enquiry
                  has not been sent or saved. A backend or form
                  service is required to receive actual submissions.
                </p>

                <div className="contact-success-summary">
                  <div>
                    <span>Service</span>
                    <strong>{form.service}</strong>
                  </div>

                  <div>
                    <span>Contact email</span>
                    <strong>{form.email}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="ui-button ui-button--primary"
                  onClick={resetForm}
                >
                  Submit another enquiry
                  <ArrowUpRight size={17} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-heading">
                  <span className="eyebrow">PROJECT ENQUIRY</span>
                  <h2>Tell us about your project</h2>
                  <p>Fields marked with * are required.</p>
                </div>

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="contact-form-grid">
                    <div className="contact-field">
                      <label htmlFor="contact-name">
                        Your name *
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name
                            ? "contact-name-error"
                            : undefined
                        }
                      />

                      {errors.name && (
                        <span
                          className="contact-error"
                          id="contact-name-error"
                        >
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-email">
                        Email address *
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email
                            ? "contact-email-error"
                            : undefined
                        }
                      />

                      {errors.email && (
                        <span
                          className="contact-error"
                          id="contact-email-error"
                        >
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-company">
                        Company
                      </label>

                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Company name (optional)"
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-service">
                        Service of interest
                      </label>

                      <select
                        id="contact-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="contact-field contact-field-full">
                      <label htmlFor="contact-budget">
                        Estimated budget
                      </label>

                      <select
                        id="contact-budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select if known (optional)
                        </option>

                        <option value="Not decided">
                          Not decided yet
                        </option>

                        <option value="Under $1,000">
                          Under $1,000
                        </option>

                        <option value="$1,000–$5,000">
                          $1,000–$5,000
                        </option>

                        <option value="$5,000–$10,000">
                          $5,000–$10,000
                        </option>

                        <option value="$10,000+">
                          $10,000+
                        </option>
                      </select>
                    </div>

                    <div className="contact-field contact-field-full">
                      <label htmlFor="contact-message">
                        Project details *
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="What would you like to build, and what problem should it solve?"
                        value={form.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message
                            ? "contact-message-error"
                            : undefined
                        }
                      />

                      {errors.message && (
                        <span
                          className="contact-error"
                          id="contact-message-error"
                        >
                          {errors.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="ui-button ui-button--primary contact-submit"
                  >
                    Validate enquiry
                    <Send size={17} aria-hidden="true" />
                  </button>

                  <p className="contact-form-note">
                    <ShieldCheck size={15} aria-hidden="true" />
                    Frontend demo only. Your information is not
                    transmitted to a server.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
