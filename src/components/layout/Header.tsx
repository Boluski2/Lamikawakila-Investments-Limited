import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Compliance", path: "/compliance" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500",
      scrolled
        ? "bg-background/95 shadow-md backdrop-blur-md"
        : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center justify-between lg:h-24">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-4">
          <img src={logo} alt="Lamikawakila Investments Limited logo" className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105" />
          <div className="hidden sm:block">
            <span className={cn(
              "font-display text-xl tracking-[0.15em] transition-colors",
              scrolled ? "text-foreground" : "text-primary-foreground"
            )}>LAMIKAWAKILA</span>
            <span className={cn(
              "block text-[10px] font-medium uppercase tracking-[0.3em] transition-colors",
              scrolled ? "text-muted-foreground" : "text-primary-foreground/50"
            )}>Investments Limited</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative px-4 py-2 font-sans text-sm font-medium uppercase tracking-[0.15em] transition-colors",
                scrolled
                  ? location.pathname === item.path ? "text-accent" : "text-foreground hover:text-accent"
                  : location.pathname === item.path ? "text-accent" : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+260972149043"
            className={cn(
              "hidden items-center gap-2 text-sm font-medium md:flex transition-colors",
              scrolled ? "text-muted-foreground hover:text-accent" : "text-primary-foreground/60 hover:text-primary-foreground"
            )}
          >
            <Phone className="h-4 w-4" />
            +260 972 149 043
          </a>
          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Get a Quote</Link>
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "inline-flex items-center justify-center p-2 lg:hidden",
              scrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col py-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "border-b border-border/50 px-2 py-4 font-display text-xl tracking-wider transition-colors hover:text-accent",
                  location.pathname === item.path ? "text-accent" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6">
              <Button asChild variant="accent" className="w-full" size="lg">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
