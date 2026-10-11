
import { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame = null;

    const updateProgress = () => {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight -
          window.innerHeight;

        const currentScroll = window.scrollY;

        const percentage =
          scrollableHeight > 0
            ? (currentScroll / scrollableHeight) * 100
            : 0;

        setProgress(
          Math.min(100, Math.max(0, percentage))
        );

        animationFrame = null;
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return progress;
}
