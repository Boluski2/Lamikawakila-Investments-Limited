import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fuel, HardHat, Wrench, MapPin, Shield, FileCheck, DollarSign, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import heroImage from "@/assets/hero-mining.jpg";
import dieselImage from "@/assets/service-diesel.jpg";
import ppeImage from "@/assets/service-ppe.jpg";
import equipmentImage from "@/assets/service-equipment.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Fuel,
    title: "Diesel Fuel Supply",
    description: "EN 590:2013 Ultra-Low Sulphur Diesel with ERB-licensed sourcing and transparent cost-plus pricing.",
    image: dieselImage,
    link: "/services#diesel",
    num: "01",
  },
  {
    icon: HardHat,
    title: "Personal Protective Equipment",
    description: "SABS & ZABS certified PPE compliant with Mines Safety Regulations 2021.",
    image: ppeImage,
    link: "/services#ppe",
    num: "02",
  },
  {
    icon: Wrench,
    title: "Mining Equipment & Consumables",
    description: "Hand tools, drilling consumables, hydraulic fittings, and lubricants from vetted suppliers.",
    image: equipmentImage,
    link: "/services#equipment",
    num: "03",
  },
];

const stats = [
  { value: "3", label: "Core Supply Verticals" },
  { value: "20%+", label: "Local Content Threshold" },
  { value: "24h", label: "Response Time" },
  { value: "100%", label: "Zambian Owned" },
];

const whyChooseUs = [
  { icon: MapPin, title: "Local Presence", description: "Ndola-based operations with rapid response to Copperbelt sites." },
  { icon: Shield, title: "Regulatory Compliance", description: "PACRA-registered; aligned with ERB and Mines Safety standards." },
  { icon: FileCheck, title: "Local Content Ready", description: "Qualified supplier under Statutory Instrument No. 68 of 2025." },
  { icon: DollarSign, title: "Transparent Pricing", description: "Cost-plus pricing; quarterly compliance reporting." },
];

export default function Home() {
  useSEO({
    title: "Lamikawakila Investments Limited | Industrial Supply Solutions | Copperbelt Zambia",
    description: "Lamikawakila Investments Limited provides reliable diesel fuel, certified PPE, and mining consumables to Copperbelt operations. PACRA-registered. Local Content compliant.",
  });

  return (
    <div className="flex flex-col">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Mining operations in Zambia's Copperbelt" className="h-full w-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/95" />
        </div>

        <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-20 pt-32 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl"
          >
            <span className="mb-4 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">
              — PACRA-Registered • Copperbelt-Based
            </span>
            <h1 className="font-display text-6xl leading-[0.95] tracking-wider text-primary-foreground sm:text-7xl lg:text-[8rem]">
              Industrial<br />
              Supply<br />
              <span className="text-accent">Solutions</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
              Reliable Diesel • Certified PPE • Mining Equipment & Consumables for Zambia's mining sector.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-12 w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent"
          />
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="relative z-10 -mt-1 bg-accent">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="border-r border-accent-foreground/10 px-6 py-8 last:border-r-0 text-center lg:py-10"
              >
                <span className="font-display text-4xl tracking-wider text-accent-foreground lg:text-5xl">{stat.value}</span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground/60" style={{ textTransform: "uppercase" }}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT SNAPSHOT ═══ */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-36">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <span className="mb-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">— About Us</span>
              <h2 className="font-display text-4xl tracking-wider text-foreground sm:text-5xl lg:text-6xl accent-line">
                Your Trusted Copperbelt Supply Partner
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                <strong className="text-foreground">Lamikawakila Investments Limited</strong> is a Zambian-registered enterprise incorporated under the Companies Act No. 10 of 2017, delivering integrated supply solutions to mining operations across the Copperbelt. We provide compliant petroleum products, safety equipment, and mining consumables that advance operational continuity.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="space-y-4">
                {["PACRA No. 120261040111", "ERB Licensed", "ISIC 0910", "SI No. 68 Compliant"].map((item) => (
                  <div key={item} className="flex items-center gap-4 border-l-2 border-accent bg-card px-6 py-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                    <span className="font-sans text-sm font-medium text-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — STAGGERED HORIZONTAL ═══ */}
      <section className="relative bg-primary py-24 noise-overlay lg:py-36">
        <div className="container relative">
          <SectionHeading
            badge="Our Services"
            title="What We Deliver"
            subtitle="From fuel to safety gear to equipment—everything your mining operation needs."
            light
          />

          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={0}
                variants={fadeUp}
                className={`grid items-stretch lg:grid-cols-2 ${index !== services.length - 1 ? "border-b border-primary-foreground/10" : ""}`}
              >
                <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={service.image} alt={service.title} className="h-64 w-full object-cover lg:h-full lg:min-h-[400px]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
                  <span className="absolute bottom-4 left-6 font-display text-7xl text-primary-foreground/10 lg:text-9xl">{service.num}</span>
                </div>
                <div className={`flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-20 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <service.icon className="mb-4 h-8 w-8 text-accent" />
                  <h3 className="font-display text-3xl tracking-wider text-primary-foreground lg:text-4xl">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>{service.description}</p>
                  <Link
                    to={service.link}
                    className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-accent hover:text-terracotta-light transition-colors"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="bg-background py-24 lg:py-36">
        <div className="container">
          <SectionHeading
            badge="Why Choose Us"
            title="Built for Mining Excellence"
            subtitle="We combine local expertise with regulatory compliance to deliver reliable supply solutions."
          />

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="group relative bg-background p-8 transition-colors duration-500 hover:bg-card lg:p-10"
              >
                <span className="deco-number">{String(index + 1).padStart(2, "0")}</span>
                <item.icon className="mb-5 h-7 w-7 text-accent" />
                <h3 className="mb-3 font-display text-2xl tracking-wider text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{item.description}</p>
                <div className="mt-6 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection />
    </div>
  );
}
