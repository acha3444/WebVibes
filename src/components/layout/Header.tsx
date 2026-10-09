import Link from "next/link";
import Image from "next/image";

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
      <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-[13px] lg:text-sm font-medium whitespace-nowrap">
        <Link href="/#services" className="hover:text-electric transition-colors">Pour quel commerce</Link>
        <Link href="/#fonctionnement" className="hover:text-electric transition-colors">Fonctionnement</Link>
        <Link href="/#demos" className="hover:text-electric transition-colors">Démos</Link>
        <Link href="/tarifs" className="hover:text-electric transition-colors">Tarifs</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/#devis" className="bg-electric text-white px-3 sm:px-4 py-2 text-[13px] sm:text-sm font-semibold tag-cut-corner whitespace-nowrap hover:bg-electric/90 transition-colors">
          Demander un devis
        </Link>
      </div>
    </header>
  );
}
