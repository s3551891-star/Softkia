
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  end = 100,
  start = 0,
  duration = 1600,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className = "",
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(start);

  const target = Number(end);
  const initial = Number(start);
  const decimalPlaces = Math.min(
    10,
    Math.max(0, Number(decimals) || 0)
  );
  const animationDuration = Math.max(
    0,
    Number(duration) || 0
  );

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
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (
      !Number.isFinite(target) ||
      !Number.isFinite(initial) ||
      animationDuration === 0
    ) {
      setValue(Number.isFinite(target) ? target : 0);
      return;
    }

    let animationFrame;
    let startTime;

    setValue(initial);

    const animate = (timestamp) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / animationDuration,
        1
      );

      // Smooth ease-out animation.
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setValue(
        initial + (target - initial) * easedProgress
      );

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [
    isVisible,
    target,
    initial,
    animationDuration,
  ]);

  const formattedValue = Number.isFinite(value)
    ? value.toLocaleString("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
        useGrouping: Boolean(separator),
      }).replace(/,/g, separator)
    : "0";

  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={`${prefix}${formattedValue}${suffix}`}
    >
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
