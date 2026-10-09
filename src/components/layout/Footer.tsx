import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white px-5 sm:px-6 py-10 sm:py-12 border-t border-ink/10 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-cream shrink-0">
              <Image src="/logo.png" alt="Logo WebVibes" width={32} height={32} className="object-cover" unoptimized />
            </div>
            <span className="font-bold text-lg">WebVibes</span>
          </div>
          <p className="text-ink/60 mb-2">Création et gestion de sites internet pour les commerces de proximité.</p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-ink/70">
            <li className="pt-2"><Link href="/#devis" className="text-electric font-medium hover:underline">Demander un devis</Link></li>
            <li><Link href="/tarifs" className="hover:text-electric transition-colors">Tarifs</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Légal</h4>
          <ul className="space-y-2 text-ink/70">
            <li><Link href="/mentions-legales" className="hover:text-electric transition-colors">Mentions légales</Link></li>
            <li><Link href="/confidentialite" className="hover:text-electric transition-colors">Confidentialité</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
