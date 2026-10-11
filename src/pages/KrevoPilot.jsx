
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Cloud,
  Cpu,
  Eye,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Activity,
    title: "Cluster health",
    description:
      "Review cluster status and identify operational warnings from a read-only view.",
    tag: "Observability",
  },
  {
    icon: Boxes,
    title: "Workload visibility",
    description:
      "Explore applications, workloads, and their reported operational status.",
    tag: "Workloads",
  },
  {
    icon: Cpu,
    title: "Resource insights",
    description:
      "Understand reported CPU and memory usage to identify possible optimization opportunities.",
    tag: "Resources",
  },
  {
    icon: CircleAlert,
    title: "Events & warnings",
    description:
      "Review Kubernetes events and surface issues that may need an operator's attention.",
    tag: "Diagnostics",
  },
  {
    icon: ShieldCheck,
    title: "Read-only approach",
    description:
      "Designed for operational visibility without initiating cluster-changing actions.",
    tag: "Security",
  },
  {
    icon: Zap,
    title: "AI-assisted insights",
    description:
      "Help teams interpret operational signals and investigate potential improvements.",
    tag: "AI assistance",
  },
];

const workflow = [
  {
    number: "01",
    title: "Connect to your environment",
    description:
      "Prepare the Kubernetes access and configuration required for the deployment.",
  },
  {
    number: "02",
    title: "Observe operational signals",
    description:
      "Review health indicators, workloads, resource usage, and available events.",
  },
  {
    number: "03",
    title: "Investigate opportunities",
    description:
      "Use operational context to investigate warnings and possible optimizations.",
  },
  {
    number: "04",
    title: "Keep humans in control",
    description:
      "Your team reviews findings and decides which actions, if any, to take separately.",
  },
];

const sampleMetrics = [
  {
    label: "Cluster health",
    value: "Awaiting connection",
    icon: Activity,
  },
  {
    label: "Applications",
    value: "No live data",
    icon: Boxes,
  },
  {
    label: "Resource usage",
    value: "No live data",
    icon: Cpu,
  },
];

export default function KrevoPilot() {
  return (
    <main className="krevopilot-page">
      <section className="kp-hero container">
        <div className="kp-hero-copy">
          <div className="kp-eyebrow">
            <span className="kp-status-dot" />
            SOFTKAI TECHNOLOGIES · KUBERNETES OPERATIONS
          </div>

          <h1>
            Kubernetes visibility.
            <br />
            <span className="gradient-text">
              Clarity for every decision.
            </span>
          </h1>

          <p className="kp-hero-description">
            Meet KrevoPilot — a read-only operational visibility
            concept designed to help platform teams understand
            cluster health, workloads, resource usage, and events
            without handing over control of their environment.
          </p>

          <div className="kp-hero-actions">
            <a href="#capabilities" className="kp-button kp-button-primary">
              Explore capabilities
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <Link to="/contact" className="kp-button kp-button-secondary">
              Discuss your use case
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="kp-trust-points">
            <span>
              <ShieldCheck size={17} aria-hidden="true" />
              Read-only by design
            </span>

            <span>
              <Eye size={17} aria-hidden="true" />
              Operational visibility
            </span>
          </div>
        </div>

        <div className="kp-dashboard" aria-label="Illustrative Kubernetes dashboard">
          <div className="kp-dashboard-top">
            <div className="kp-window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <span className="kp-dashboard-title">
              <Terminal size={15} aria-hidden="true" />
              krevopilot / overview
            </span>

            <span className="kp-demo-badge">DEMO</span>
          </div>

          <div className="kp-dashboard-body">
            <div className="kp-cluster-heading">
              <div className="kp-cluster-icon">
                <Network size={23} aria-hidden="true" />
              </div>

              <div>
                <strong>Cluster overview</strong>
                <span>Illustrative interface</span>
              </div>

              <span className="kp-readonly-pill">
                <LockKeyhole size={13} aria-hidden="true" />
                Read-only
              </span>
            </div>

            <div className="kp-metric-grid">
              {sampleMetrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div className="kp-metric-card" key={metric.label}>
                    <Icon size={18} aria-hidden="true" />

                    <span>{metric.label}</span>

                    <strong>{metric.value}</strong>
                  </div>
                );
              })}
            </div>

            <div className="kp-terminal">
              <div className="kp-terminal-heading">
                <span>OPERATIONAL SUMMARY</span>
                <Clock3 size={14} aria-hidden="true" />
              </div>

              <div className="kp-terminal-line">
                <span className="kp-terminal-prompt">$</span>
                <span>inspect cluster status</span>
              </div>

              <div className="kp-terminal-result">
                <CircleAlert size={16} aria-hidden="true" />
                <span>
                  Connect an environment to view real operational data.
                </span>
              </div>

              <div className="kp-terminal-note">
                No live cluster is connected to this page.
              </div>
            </div>

            <div className="kp-dashboard-footer">
              <span>
                <ShieldCheck size={15} aria-hidden="true" />
                Observation only
              </span>

              <span>Illustrative preview</span>
            </div>
          </div>
        </div>
      </section>

      <section className="kp-capabilities" id="capabilities">
        <div className="container">
          <div className="kp-section-heading">
            <span className="eyebrow">BUILT FOR PLATFORM TEAMS</span>

            <h2>
              Understand your environment.
              <br />
              <span className="gradient-text">
                Make informed decisions.
              </span>
            </h2>

            <p>
              Bring essential Kubernetes operational information
              into one conceptual workspace for easier investigation
              and more informed decisions.
            </p>
          </div>

          <div className="kp-capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="kp-capability-card" key={item.title}>
                  <div className="kp-capability-top">
                    <span className="kp-capability-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>

                    <span className="kp-capability-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="kp-capability-tag">
                    {item.tag}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="kp-capability-bottom">
                    <span>Operational insight</span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="kp-security-section">
        <div className="container kp-security-layout">
          <div className="kp-security-visual">
            <div className="kp-security-orbit kp-orbit-one" />
            <div className="kp-security-orbit kp-orbit-two" />

            <div className="kp-security-core">
              <ShieldCheck size={58} strokeWidth={1.4} aria-hidden="true" />
              <strong>READ-ONLY</strong>
              <span>Visibility, not control</span>
            </div>

            <div className="kp-security-chip kp-chip-top">
              <Eye size={16} aria-hidden="true" />
              Observe
            </div>

            <div className="kp-security-chip kp-chip-bottom">
              <LockKeyhole size={16} aria-hidden="true" />
              Protect access
            </div>
          </div>

          <div className="kp-security-copy">
            <span className="eyebrow">SECURITY-FIRST THINKING</span>

            <h2>
              Visibility without
              <span className="gradient-text">
                {" "}unnecessary control.
              </span>
            </h2>

            <p>
              KrevoPilot is designed around an observation-first
              approach. Teams can assess operational information
              while keeping decisions and any environment-changing
              actions under their own control.
            </p>

            <ul className="kp-security-list">
              <li>
                <CheckCircle2 size={19} aria-hidden="true" />
                Read-only access model
              </li>

              <li>
                <CheckCircle2 size={19} aria-hidden="true" />
                Visibility into operational signals
              </li>

              <li>
                <CheckCircle2 size={19} aria-hidden="true" />
                Human review of recommendations
              </li>

              <li>
                <CheckCircle2 size={19} aria-hidden="true" />
                Staging-first evaluation approach
              </li>
            </ul>

            <p className="kp-security-disclaimer">
              Actual permissions and security guarantees depend on
              the deployed implementation and its configuration.
            </p>
          </div>
        </div>
      </section>

      <section className="kp-workflow-section">
        <div className="container">
          <div className="kp-section-heading">
            <span className="eyebrow">A PRACTICAL ADOPTION PATH</span>

            <h2>
              From first connection
              <br />
              <span className="gradient-text">to operational clarity.</span>
            </h2>

            <p>
              A staged workflow helps teams evaluate visibility
              before considering wider deployment.
            </p>
          </div>

          <div className="kp-workflow-grid">
            {workflow.map((step, index) => (
              <article className="kp-workflow-card" key={step.number}>
                <span className="kp-workflow-number">
                  {step.number}
                </span>

                {index !== workflow.length - 1 && (
                  <ArrowDownRight
                    className="kp-workflow-arrow"
                    size={20}
                    aria-hidden="true"
                  />
                )}

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="kp-cta-section">
        <div className="container">
          <div className="kp-cta-card">
            <div className="kp-cta-icon">
              <Cloud size={28} aria-hidden="true" />
            </div>

            <span className="eyebrow">EXPLORE KREVOPILOT</span>

            <h2>
              Ready to explore
              <span className="gradient-text">
                {" "}read-only Kubernetes visibility?
              </span>
            </h2>

            <p>
              Talk to SoftKai about your platform team's needs,
              operational challenges, and potential use cases.
            </p>

            <Link
              to="/contact"
              className="kp-button kp-button-primary"
            >
              Discuss your requirements
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
