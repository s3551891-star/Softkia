
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  as: Component = "div",
  direction = "up",
  delay = 0,
  duration = 650,
  once = true,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  const safeDelay = Math.max(0, Number(delay) || 0);
  const safeDuration = Math.max(0, Number(duration) || 0);

  return (
    <Component
      ref={elementRef}
      className={[
        "reveal",
        `reveal--${direction}`,
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--reveal-delay": `${safeDelay}ms`,
        "--reveal-duration": `${safeDuration}ms`,
      }}
    >
      {children}
    </Component>
  );
}
