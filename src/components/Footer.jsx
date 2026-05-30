import { FiLinkedin, FiTwitter, FiYoutube, FiInstagram } from "react-icons/fi";
import { footerLinks, socialLinks } from "../data/navigation";
import Logo from "./Logo";

const socialIconMap = {
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  youtube: FiYoutube,
  instagram: FiInstagram,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-industrial-700 text-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="#accueil" className="flex items-center gap-3 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <span className="font-display font-bold text-white text-lg block">
                  SmartGrain
                </span>
                <span className="text-sand-300 text-sm">
                  Transformation du Sable en Verre
                </span>
              </div>
            </a>
            <p className="text-sand-300/80 max-w-md leading-relaxed text-sm">
              Projet industriel de transformation du sable en verre premium.
              Innovation locale, excellence technique et engagement durable.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sand-300/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Réseaux sociaux</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass-dark flex items-center justify-center text-sand-200 hover:bg-white/10 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sand-300/60">
          <p>© {year} SmartGrain — Transformation du Sable en Verre. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
