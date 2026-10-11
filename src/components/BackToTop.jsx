
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop({
  threshold = 400,
  className = "",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > threshold);
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [threshold]);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      className={[
        "back-to-top",
        visible ? "back-to-top--visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={20} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
