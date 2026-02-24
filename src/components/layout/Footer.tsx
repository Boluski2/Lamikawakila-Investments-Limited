import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Compliance", path: "/compliance" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground noise-overlay">
      {/* Large decorative text */}
      <div className="overflow-hidden">
        <div className="container">
          <span className="block font-display text-[6rem] leading-none tracking-wider text-primary-foreground/[0.03] sm:text-[10rem] lg:text-[14rem]">
            LAMIKAWAKILA
          </span>
        </div>
      </div>

      <div className="container relative -mt-12 pb-12 sm:-mt-20 lg:-mt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Info */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <img src={logo} alt="Lamikawakila Investments Limited logo" className="h-12 w-12 object-contain" />
              <div>
                <span className="font-display text-xl tracking-[0.15em]">LAMIKAWAKILA</span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-primary-foreground/40">Investments Limited</span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/50" style={{ textTransform: "none", letterSpacing: "normal" }}>
              PACRA-registered industrial supplier serving Zambia's mining sector with diesel fuel, PPE, and mining consumables from the heart of the Copperbelt.
            </p>
            <div className="mt-6 h-px w-20 bg-accent" />
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/30">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/30">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Stand No. 95, President Avenue<br />Town Centre, Ndola, Copperbelt Province, Zambia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+260972149043" className="hover:text-accent transition-colors">+260 972 149 043</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:sophie@lamikawakila.com" className="hover:text-accent transition-colors">sophie@lamikawakila.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Lamikawakila Investments Limited
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/30">
            <span>PACRA 120261040111</span>
            <span>•</span>
            <span>ISIC 0910</span>
            <span>•</span>
            <span>Local Content Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
