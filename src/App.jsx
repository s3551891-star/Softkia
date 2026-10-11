
import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Technologies from "./pages/Technologies";
import Process from "./pages/Process";
import EngagementModels from "./pages/EngagementModels.jsx";
import KrevoPilot from "./pages/KrevoPilot.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";

function ComingSoon({ title }) {
  return (
    <section className="placeholder-page container">
      <span className="eyebrow">SOFTKAI TECHNOLOGIES</span>

      <h1>{title}</h1>

      <p>
        We are building this experience with a focus on
        quality, usability, and thoughtful technology.
        In the meantime, explore our services or visit
        the official SoftKai website.
      </p>

      <a
        className="ui-button ui-button--primary"
        href="https://softkai.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Official Website
      </a>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Main pages */}
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="process" element={<Process />} />

        {/* Engagement Models */}
        <Route
          path="engagement"
          element={<EngagementModels />}
        />

        {/* KrevoPilot */}
        <Route
          path="krevopilot"
          element={<KrevoPilot />}
        />

        {/* FAQ */}
        <Route path="faq" element={<FAQ />} />

        {/* Contact */}
        <Route path="contact" element={<Contact />} />

        {/* Service details */}
        <Route
          path="services/:slug"
          element={<ComingSoon title="Service Details" />}
        />

        {/* Actual portfolio project details */}
        <Route
          path="portfolio/:slug"
          element={<ProjectDetails />}
        />

        {/* Unknown routes redirect to Home */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Route>
    </Routes>
  );
}
