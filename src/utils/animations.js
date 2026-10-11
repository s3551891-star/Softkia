
/**
 * SoftKai Technologies — Animation Utilities
 * Reusable, lightweight animations for the website.
 * No external animation library required.
 */

/* ----------------------------------------
   1. Animation durations
----------------------------------------- */

export const durations = {
  instant: 0,
  fast: 180,
  normal: 320,
  smooth: 500,
  slow: 700,
  reveal: 850,
};

/* ----------------------------------------
   2. Easing functions
----------------------------------------- */

export const easings = {
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
  standard: "cubic-bezier(0.4, 0, 0.2, 1)",
  entrance: "cubic-bezier(0.16, 1, 0.3, 1)",
  exit: "cubic-bezier(0.4, 0, 1, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

/* ----------------------------------------
   3. Reusable animation presets
----------------------------------------- */

export const animationPresets = {
  fadeIn: [
    { opacity: 0 },
    { opacity: 1 },
  ],

  fadeInUp: [
    { opacity: 0, transform: "translateY(28px)" },
    { opacity: 1, transform: "translateY(0)" },
  ],

  fadeInDown: [
    { opacity: 0, transform: "translateY(-20px)" },
    { opacity: 1, transform: "translateY(0)" },
  ],

  slideInLeft: [
    { opacity: 0, transform: "translateX(-28px)" },
    { opacity: 1, transform: "translateX(0)" },
  ],

  slideInRight: [
    { opacity: 0, transform: "translateX(28px)" },
    { opacity: 1, transform: "translateX(0)" },
  ],

  scaleIn: [
    { opacity: 0, transform: "scale(0.96)" },
    { opacity: 1, transform: "scale(1)" },
  ],

  popIn: [
    { opacity: 0, transform: "scale(0.92)" },
    { opacity: 1, transform: "scale(1.03)" },
    { opacity: 1, transform: "scale(1)" },
  ],
};

/* ----------------------------------------
   4. Motion preferences
----------------------------------------- */

export function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

/* ----------------------------------------
   5. Animation options
----------------------------------------- */

export function getAnimationOptions(options = {}) {
  const {
    duration = durations.smooth,
    delay = 0,
    easing = easings.smooth,
    fill = "both",
  } = options;

  return {
    duration: prefersReducedMotion() ? 0 : duration,
    delay: prefersReducedMotion() ? 0 : Math.max(0, delay),
    easing,
    fill,
  };
}

/* ----------------------------------------
   6. Animate an element
----------------------------------------- */

/**
 * Usage:
 * animateElement(element, "fadeInUp");
 *
 * Returns an animation instance or null.
 */

export function animateElement(
  element,
  preset = "fadeInUp",
  options = {}
) {
  if (!element || typeof element.animate !== "function") {
    return null;
  }

  if (prefersReducedMotion()) {
    element.style.opacity = "1";
    element.style.transform = "none";
    return null;
  }

  const keyframes =
    typeof preset === "string"
      ? animationPresets[preset]
      : preset;

  if (!keyframes) {
    console.warn(`SoftKai animation preset not found: ${preset}`);
    return null;
  }

  return element.animate(
    keyframes,
    getAnimationOptions(options)
  );
}

/* ----------------------------------------
   7. Stagger animation helper
----------------------------------------- */

/**
 * Creates a delay for each item in a list.
 *
 * Example:
 * getStaggerDelay(2) // 160
 */

export function getStaggerDelay(
  index,
  step = 80,
  maxDelay = 480
) {
  const safeIndex = Math.max(0, Number(index) || 0);

  return Math.min(safeIndex * step, maxDelay);
}

/* ----------------------------------------
   8. Animate multiple elements
----------------------------------------- */

/**
 * Example:
 * animateChildren(".service-card", "fadeInUp");
 */

export function animateChildren(
  selector,
  preset = "fadeInUp",
  options = {}
) {
  if (typeof document === "undefined") {
    return [];
  }

  const elements = document.querySelectorAll(selector);

  return Array.from(elements).map((element, index) =>
    animateElement(element, preset, {
      ...options,
      delay:
        (options.delay || 0) +
        getStaggerDelay(
          index,
          options.staggerStep ?? 80,
          options.maxStaggerDelay ?? 480
        ),
    })
  );
}

/* ----------------------------------------
   9. Smooth scroll utility
----------------------------------------- */

export function scrollToElement(
  target,
  offset = 80
) {
  if (typeof document === "undefined") {
    return;
  }

  const element =
    typeof target === "string"
      ? document.querySelector(target)
      : target;

  if (!element) {
    return;
  }

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

/* ----------------------------------------
   10. Animation cleanup utility
----------------------------------------- */

export function cancelAnimations(elements) {
  if (!elements) {
    return;
  }

  const list =
    typeof elements.length === "number" &&
    !elements.cancel
      ? Array.from(elements)
      : [elements];

  list.forEach((item) => {
    if (item && typeof item.cancel === "function") {
      item.cancel();
    }
  });
}
