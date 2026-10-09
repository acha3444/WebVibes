import Link from "next/link";
import Image from "next/image";
import { MobileMenu, type NavLink } from "./MobileMenu";
import { BOOKING_URL } from "@/data/site";

const links: NavLink[] = [
  { href: "/#services", label: "Pour quel commerce" },
  { href: "/#fonctionnement", label: "Fonctionnement" },
  { href: "/#demos", label: "Démos" },
  { href: "/tarifs", label: "Tarifs" },
];

export function Header() {
  return (
    <header className="px-5 sm:px-6 py-3 sm:py-4 lg:py-6 border-b border-ink/10 flex items-center justify-between sticky top-0 bg-cream/90 backdrop-blur-md z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 bg-white">
          <Link href="/">
            <Image src="/logo.png" alt="Logo WebVibes" width={40} height={40} className="object-cover" unoptimized />
          </Link>
        </div>
        <Link href="/" className="font-bold text-base sm:text-lg">WebVibes</Link>
      </div>
      <nav aria-label="Menu principal" className="hidden md:flex items-center gap-5 lg:gap-8 text-[13px] lg:text-sm font-medium whitespace-nowrap">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-electric transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="/#devis" className="hidden lg:inline text-[13px] sm:text-sm font-medium hover:text-electric transition-colors mr-2">
          Devis
        </Link>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-electric text-white px-3 sm:px-4 py-2 text-[13px] sm:text-sm font-semibold tag-cut-corner whitespace-nowrap hover:bg-electric/90 transition-colors">
          Prendre rendez-vous
        </a>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}
