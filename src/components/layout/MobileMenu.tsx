"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BOOKING_URL } from "@/data/site";

export type NavLink = { href: string; label: string };

// Menu hamburger (mobile et petite tablette). Plein écran sous l'en-tête,
// fermeture au clic sur un lien, avec Échap, ou au passage en grand écran.
export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Fermer quand la page change
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden"; // la page ne défile pas derrière le menu

    // Le panneau est visible dès l'ouverture (seuls le fondu et le glissement sont animés)
    const focusFrame = requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("a")?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      // Garde le focus clavier dans le menu ouvert
      if (e.key === "Tab" && panelRef.current && buttonRef.current) {
        const items = [buttonRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a")];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 768 && setOpen(false);

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(focusFrame);
      root.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((o) => !o)}
        className="relative grid place-items-center w-10 h-10 -mr-2"
      >
        <span aria-hidden className="relative block w-6 h-4">
          <span
            className={`absolute left-0 right-0 h-0.5 bg-ink transition-all duration-300 ${
              open ? "top-[7px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 right-0 top-[7px] h-0.5 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 right-0 h-0.5 bg-ink transition-all duration-300 ${
              open ? "top-[7px] -rotate-45" : "top-[14px]"
            }`}
          />
        </span>
      </button>

      <div
        id="menu-mobile"
        ref={panelRef}
        inert={!open}
        className={`absolute left-0 right-0 top-full h-[calc(100dvh-100%)] bg-cream border-t border-ink/10 flex flex-col px-5 pt-6 pb-8 overflow-y-auto motion-reduce:transition-none ${
          open
            ? "opacity-100 translate-y-0 visible [transition:opacity_.3s_ease-out,transform_.3s_ease-out,visibility_0s]"
            : "opacity-0 -translate-y-3 invisible [transition:opacity_.3s_ease-out,transform_.3s_ease-out,visibility_0s_.3s]"
        }`}
      >
        <nav aria-label="Menu mobile">
          <ul>
            {links.map((link, i) => (
              <li
                key={link.href}
                className={`border-b border-ink/10 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex items-baseline gap-4 py-4 font-serif text-[1.65rem] font-bold leading-tight hover:text-electric transition-colors"
                >
                  <span aria-hidden className="font-sans text-xs font-bold text-electric tabular-nums">
                    0{i + 1}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`mt-auto pt-8 space-y-3 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: open ? "320ms" : "0ms" }}
        >
          <Link
            href="/#devis"
            onClick={close}
            className="block text-center bg-electric text-white px-6 py-4 font-semibold tag-cut-corner"
          >
            Demander un devis
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="block text-center border-2 border-electric text-electric px-6 py-3.5 font-semibold tag-cut-corner"
          >
            Prendre rendez-vous
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
          <p className="pt-1 text-center text-xs text-ink/70">Devis gratuit et sans engagement.</p>
        </div>
      </div>
    </div>
  );
}
