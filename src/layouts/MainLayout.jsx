
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import BackToTop from "../components/BackToTop";
import useScrollProgress from "../hooks/useScrollProgress";

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <div
        className="scroll-progress__bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function MainLayout() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
      <BackToTop threshold={400} />
    </>
  );
}
