"use client";

import { useEffect, useId, useState } from "react";

// Bloc repliable animé (hauteur fluide), utilisable au clavier.
export function Disclosure({
  label,
  children,
  variant = "faq",
  className = "",
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  variant?: "faq" | "button";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  // Une fois ouvert, le contenu n'est plus rogné (utile pour l'en-tête collant du tableau)
  const [settled, setSettled] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) setSettled(false);
    else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setSettled(true);
  }, [open]);

  const button =
    variant === "faq" ? (
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="w-full flex justify-between items-center gap-4 py-4 sm:py-5 text-left font-bold text-base sm:text-lg hover:text-electric transition-colors"
      >
        {label}
        <span
          aria-hidden
          className={`shrink-0 grid place-items-center w-8 h-8 border-2 border-electric font-serif text-xl leading-none transition-colors duration-300 ${
            open ? "bg-electric text-white" : "text-electric"
          }`}
        >
          <span className={`inline-block transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
        </span>
      </button>
    ) : (
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="mx-auto flex items-center gap-2 border-2 border-electric text-electric px-6 py-3 font-semibold tag-cut-corner hover:bg-electric hover:text-white transition-colors"
      >
        {label}
        <svg aria-hidden viewBox="0 0 12 8" className={`w-3 h-2 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>
    );

  return (
    <div className={className}>
      {variant === "faq" ? <h3>{button}</h3> : button}
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        onTransitionEnd={(e) => {
          if (e.target === e.currentTarget && open) setSettled(true);
        }}
      >
        <div className={open && settled ? "overflow-visible" : "overflow-hidden"} inert={!open}>
          {children}
        </div>
      </div>
    </div>
  );
}
