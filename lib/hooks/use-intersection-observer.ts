"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  freezeOnceVisible = false,
}: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already been visible and freeze is enabled, don't observe
    if (freezeOnceVisible && hasBeenVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        if (isElementIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
        }

        // If freeze is enabled and element is visible, disconnect
        if (freezeOnceVisible && isElementIntersecting) {
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, freezeOnceVisible, hasBeenVisible]);

  return { ref, isIntersecting, hasBeenVisible };
}
