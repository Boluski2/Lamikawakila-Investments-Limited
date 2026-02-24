import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export function CTASection({
  heading = "Ready to Streamline Your Supply Chain?",
  subheading = "Contact us today for a tailored quotation aligned with your operational requirements.",
  primaryLabel = "Get in Touch",
  primaryTo = "/contact",
  secondaryLabel = "Our Services",
  secondaryTo = "/services",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary" />
        <div
          className="absolute inset-0 bg-accent"
          style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }}
        />
        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 font-display text-[14rem] leading-none tracking-wider text-primary-foreground/[0.03] select-none pointer-events-none lg:text-[22rem]">
        GO
      </div>
      <div className="absolute right-12 bottom-0 font-display text-[10rem] leading-none tracking-wider text-accent-foreground/[0.05] select-none pointer-events-none lg:text-[16rem]">
        →
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <PhoneCall className="h-5 w-5 text-accent" />
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 className="font-display text-5xl tracking-wider text-primary-foreground sm:text-6xl lg:text-7xl">
              {heading}
            </h2>
            <p
              className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/50"
              style={{ textTransform: "none", letterSpacing: "normal" }}
            >
              {subheading}
            </p>
          </motion.div>

          {/* Right — Actions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start gap-5 lg:items-end"
          >
            <Button asChild variant="hero" size="xl">
              <Link to={primaryTo}>
                {primaryLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {secondaryLabel && (
              <Button asChild variant="heroOutline" size="xl">
                <Link to={secondaryTo}>{secondaryLabel}</Link>
              </Button>
            )}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="mt-16 h-[2px] origin-left bg-gradient-to-r from-accent via-accent/40 to-transparent"
        />
      </div>
    </section>
  );
}
