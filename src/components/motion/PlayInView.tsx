"use client";

import { useEffect, useRef, useState } from "react";

// Lance les animations (classes wv-*) uniquement quand le bloc est à l'écran.
// once : l'animation se joue une seule fois puis reste dans son état final.
export default function PlayInView({
  children,
  className = "",
  once = false,
  decorative = true,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  decorative?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once) {
          if (entry.isIntersecting) {
            setPlaying(true);
            observer.disconnect();
          }
        } else {
          setPlaying(entry.isIntersecting);
        }
      },
      // Seuil 0 + marge : fonctionne aussi pour les blocs plus hauts que l'écran
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={ref} data-playing={playing} className={`wv-stage ${className}`} aria-hidden={decorative || undefined}>
      {children}
    </div>
  );
}
