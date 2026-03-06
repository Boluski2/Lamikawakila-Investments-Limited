import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fuel, HardHat, Wrench, CheckCircle, ArrowRight, Truck, Shield, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";
import dieselImage from "@/assets/service-diesel.jpg";
import ppeImage from "@/assets/service-ppe.jpg";
import equipmentImage from "@/assets/service-equipment.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const dieselSpecs = [
  "Standard: EN 590:2013 Ultra-Low Sulphur Diesel",
  "Variants Available: 10ppm and 50ppm sulphur content",
  "Compliance: Fully compliant with ERB Technical Standards Regulation No. 3 of 2022",
];
const dieselSupply = [
  "Sourced exclusively through ERB-licensed petroleum distributors",
  "Bulk delivery capacity tailored to operational consumption patterns",
  "Flexible scheduling aligned with production cycles",
  "Delivery to site with appropriate safety protocols",
];
const dieselQuality = [
  "Full adherence to ERB fuel marking protocols (Energy Regulation Act No. 12 of 2019)",
  "Traceability documentation provided with each delivery",
  "Prevention of adulteration through certified supply chain partners",
];

const ppeCategories = [
  { category: "High-Visibility Clothing", items: "Vests, coveralls, shirts", standard: "EN ISO 20471" },
  { category: "Foot Protection", items: "Safety boots, Wellingtons", standard: "ISO 20345" },
  { category: "Head Protection", items: "Hard hats with chin straps", standard: "EN 397" },
  { category: "Hand Protection", items: "Cut-resistant gloves, general purpose", standard: "EN 388" },
  { category: "Eye & Face Protection", items: "Safety goggles, face shields", standard: "EN 166" },
  { category: "Respiratory Protection", items: "Dust masks, respirators", standard: "EN 149" },
];

const equipmentCategories = [
  { title: "Hand Tools & Site Equipment", num: "01", items: ["Shovels, picks, hammers, crowbars", "Wheelbarrows and site buckets", "Measuring tapes and levels"] },
  { title: "Drilling Consumables", num: "02", items: ["Drill bits (various diameters)", "Drill rods and couplings", "Percussion drilling accessories"] },
  { title: "Hydraulic Components", num: "03", items: ["Hydraulic hoses (various pressure ratings)", "Fittings and connectors", "Seal kits and replacement parts"] },
  { title: "Lubricants & Greases", num: "04", items: ["ISO-compliant lubricants for heavy machinery", "Multi-purpose greases for bearings", "Specialised oils for mining equipment"] },
];

export default function Services() {
  useSEO({
    title: "Our Services | Diesel, PPE & Mining Equipment | Lamikawakila Investments",
    description: "Comprehensive supply solutions including EN 590 diesel, SABS-certified PPE, and mining equipment consumables. Bulk delivery across Copperbelt.",
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end bg-primary noise-overlay pb-20 pt-32 lg:pb-28">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="mb-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">— Our Services</span>
            <h1 className="font-display text-5xl tracking-wider text-primary-foreground sm:text-6xl lg:text-8xl">
              Complete Mining<br /><span className="text-accent">Supply Solutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
              From fuel to safety equipment to consumables—everything your mining operation needs from one trusted supplier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ DIESEL — Full bleed alternating ═══ */}
      <section id="diesel" className="scroll-mt-20">
        <div className="grid lg:grid-cols-2">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="relative overflow-hidden"
          >
            <img src={dieselImage} alt="Diesel fuel tanker" className="h-64 w-full object-cover lg:h-full lg:min-h-[600px]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <span className="absolute bottom-6 left-8 font-display text-8xl text-primary-foreground/10 lg:text-[10rem]">01</span>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="flex flex-col justify-center bg-background p-10 lg:p-16"
          >
            <Fuel className="mb-4 h-8 w-8 text-accent" />
            <h2 className="font-display text-4xl tracking-wider text-foreground accent-line sm:text-5xl">Diesel Fuel Supply</h2>

            {[{ title: "Product Specifications", items: dieselSpecs }, { title: "Supply Capabilities", items: dieselSupply }, { title: "Quality Assurance", items: dieselQuality }].map((section) => (
              <div key={section.title} className="mt-8">
                <h3 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-8">
              <h3 className="mb-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Pricing</h3>
              <p className="text-sm text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                Transparent cost-plus pricing aligned with ERB's monthly price adjustment mechanism.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[{ icon: Truck, label: "Bulk Delivery" }, { icon: Shield, label: "ERB Licensed" }, { icon: FileCheck, label: "Full Traceability" }].map((tag) => (
                <div key={tag.label} className="flex items-center gap-2 border-l-2 border-accent bg-muted px-4 py-2">
                  <tag.icon className="h-4 w-4 text-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">{tag.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PPE — Reverse split ═══ */}
      <section id="ppe" className="scroll-mt-20">
        <div className="grid lg:grid-cols-2">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="flex flex-col justify-center bg-primary p-10 noise-overlay relative lg:p-16"
          >
            <HardHat className="mb-4 h-8 w-8 text-accent" />
            <h2 className="font-display text-4xl tracking-wider text-primary-foreground sm:text-5xl">Personal Protective Equipment</h2>
            <div className="my-6 h-0.5 w-16 bg-accent" />
            <p className="text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
              All PPE supplied meets SABS and ZABS certification requirements, ensuring compliance with the Mines and Minerals Development (Safety) Regulations, 2021.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["SABS Certified", "ZABS Certified", "Mines Safety Compliant"].map((tag) => (
                <span key={tag} className="bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Sizing & Availability</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
                {["All standard sizes for male and female operatives", "Bulk quantities for site-wide deployment", "Custom branding options available"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="relative overflow-hidden"
          >
            <img src={ppeImage} alt="Personal protective equipment" className="h-64 w-full object-cover lg:h-full lg:min-h-[600px]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <span className="absolute bottom-6 right-8 font-display text-8xl text-primary-foreground/10 lg:text-[10rem]">02</span>
          </motion.div>
        </div>

        {/* PPE Table */}
        <div className="bg-background py-16">
          <div className="container">
            <h3 className="mb-8 text-center font-display text-3xl tracking-wider text-foreground">Product Range</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-accent">
                    <th className="pb-4 text-left font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Category</th>
                    <th className="pb-4 text-left font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Products</th>
                    <th className="pb-4 text-left font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">Standards</th>
                  </tr>
                </thead>
                <tbody>
                  {ppeCategories.map((row, i) => (
                    <tr key={row.category} className="border-b border-border transition-colors hover:bg-muted/50">
                      <td className="py-4 pr-6 font-medium text-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{row.category}</td>
                      <td className="py-4 pr-6 text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{row.items}</td>
                      <td className="py-4 font-sans text-sm font-semibold uppercase tracking-wider text-accent">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EQUIPMENT ═══ */}
      <section id="equipment" className="scroll-mt-20">
        <div className="grid lg:grid-cols-2">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="relative overflow-hidden"
          >
            <img src={equipmentImage} alt="Mining equipment" className="h-64 w-full object-cover lg:h-full lg:min-h-[500px]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <span className="absolute bottom-6 left-8 font-display text-8xl text-primary-foreground/10 lg:text-[10rem]">03</span>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="flex flex-col justify-center bg-background p-10 lg:p-16"
          >
            <Wrench className="mb-4 h-8 w-8 text-accent" />
            <h2 className="font-display text-4xl tracking-wider text-foreground accent-line sm:text-5xl">Mining Equipment & Consumables</h2>
            <p className="mt-8 text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
              We supply a comprehensive range of mining equipment, tools, and consumables through our network of vetted local and international partners.
            </p>
          </motion.div>
        </div>

        {/* Equipment grid with numbers */}
        <div className="bg-muted py-20">
          <div className="container">
            <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {equipmentCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className="group relative bg-muted p-8 transition-colors hover:bg-card"
                >
                  <span className="deco-number">{category.num}</span>
                  <h3 className="mb-4 font-display text-xl tracking-wider text-foreground">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                        <CheckCircle className="h-3 w-3 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-12" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="mt-12 border-l-2 border-accent bg-card p-8"
            >
              <h3 className="mb-3 font-display text-xl tracking-wider text-foreground">Equipment Procurement Facilitation</h3>
              <p className="text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                For larger machinery requirements, we facilitate access to vetted Zambian equipment rental partners, ensuring your Local Content compliance while sourcing certified excavators, dump trucks, and motor graders for short- or long-term hire.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Discuss Your Requirements?"
        subheading="Contact us for a detailed quotation tailored to your mining operation's specific needs."
        primaryLabel="Request a Quote"
      />
    </div>
  );
}
