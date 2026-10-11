export const services = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    shortDescription:
      "Modern, responsive web experiences built around usability, performance, and business goals.",
    description:
      "Build digital experiences that help businesses present their products, connect with customers, and grow online.",
    icon: "Globe",
    tags: ["React", "JavaScript", "Responsive UI"],
    slug: "web-development",
  },
  {
    id: "software-development",
    number: "02",
    title: "Software Development",
    shortDescription:
      "Purpose-built software experiences designed around practical business requirements.",
    description:
      "Create maintainable software experiences with a focus on clear architecture, reliable functionality, and future growth.",
    icon: "Code2",
    tags: ["Application Design", "Integration", "Maintainability"],
    slug: "software-development",
  },
  {
    id: "artificial-intelligence",
    number: "03",
    title: "AI & Intelligent Solutions",
    shortDescription:
      "Explore AI-powered workflows and intelligent features that support real-world use cases.",
    description:
      "Identify where artificial intelligence can add value, improve workflows, and support more informed decisions.",
    icon: "BrainCircuit",
    tags: ["AI Integration", "Automation", "Intelligent Workflows"],
    slug: "artificial-intelligence",
  },
  {
    id: "cloud-devops",
    number: "04",
    title: "Cloud & DevOps",
    shortDescription:
      "Support modern delivery workflows, cloud environments, and deployment practices.",
    description:
      "Plan and improve development and deployment workflows with attention to automation, consistency, and operational visibility.",
    icon: "Cloud",
    tags: ["Cloud", "CI/CD", "Deployment"],
    slug: "cloud-devops",
  },
  {
    id: "cybersecurity",
    number: "05",
    title: "Security Engineering",
    shortDescription:
      "Bring security considerations into software design and development workflows.",
    description:
      "Consider security throughout the software lifecycle, including access controls, secure development practices, and risk awareness.",
    icon: "ShieldCheck",
    tags: ["Secure Development", "Risk Awareness", "Access Controls"],
    slug: "cybersecurity",
  },
  {
    id: "ui-ux-design",
    number: "06",
    title: "UI/UX & Product Design",
    shortDescription:
      "Thoughtful interfaces that make digital products clearer, more accessible, and easier to use.",
    description:
      "Shape user journeys and interface systems around clarity, accessibility, consistency, and the needs of real users.",
    icon: "PanelsTopLeft",
    tags: ["User Experience", "Design Systems", "Prototyping"],
    slug: "ui-ux-design",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);