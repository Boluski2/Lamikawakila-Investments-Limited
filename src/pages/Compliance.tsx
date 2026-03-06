import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, FileCheck, Fuel, HardHat, Users, Scale, CheckCircle, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const complianceAreas = [
  {
    icon: FileCheck, num: "01",
    title: "Companies Registration",
    description: "Fully registered with the Patents and Companies Registration Agency.",
    details: ["PACRA Certificate No: 120261040111", "Incorporation Date: 30 January 2026", "Legal Structure: Private Company Limited by Shares", "Governing Act: Companies Act No. 10 of 2017"],
  },
  {
    icon: Fuel, num: "02",
    title: "ERB Compliance",
    description: "Licensed for fuel procurement and supply under ERB requirements.",
    details: ["Petroleum products sourced through ERB-licensed distributors", "Full adherence to ERB fuel marking protocols (Energy Regulation Act No. 12 of 2019)", "Compliance with Technical Standards Regulation No. 3 of 2022"],
  },
  {
    icon: HardHat, num: "03",
    title: "Mines Safety Compliance",
    description: "PPE supply compliant with the Mines and Minerals Development (Safety) Regulations, 2021.",
    details: ["All PPE certified under SABS and ZABS standards", "Full compliance with Mines and Minerals Development (Safety) Regulations, 2021", "Product documentation and certification available upon request"],
  },
];

const policyAreas = [
  {
    icon: Users,
    title: "Local Content Regulations (SI No. 68 of 2025)",
    description: "Effective 1 January 2026, these regulations mandate that mining companies allocate not less than 20% of their annual procurement budget to local companies.",
    benefits: ["Score full points under \u201CZambian Ownership\u201D vendor criteria", "Access 15% bid preference margin in procurement evaluations", "Meet statutory Local Content procurement thresholds"],
  },
  {
    icon: Scale,
    title: "Citizens Economic Empowerment Act No. 9 of 2006",
    description: "Our operational model aligns with the objectives of the Citizens Economic Empowerment Commission (CEEC) to broaden Zambian participation in economic activities.",
  },
  {
    icon: Shield,
    title: "National Mineral Resource Development Policy (2022)",
    description: 'This policy seeks to "stimulate the participation of Zambian citizens in the mining value chain" and "create lasting benefits for the people of Zambia."',
  },
];

const availableDocuments = [
  "Certified copy of PACRA Certificate of Incorporation",
  "TPIN Tax Compliance Certificate",
  "Supplier authorisation letters from ERB-licensed distributors",
  "Product certification for all PPE items",
  "Public liability insurance documentation",
  "Vendor registration support documentation",
];

export default function Compliance() {
  useSEO({
    title: "Regulatory Compliance | Local Content Supplier | Lamikawakila Investments",
    description: "Fully compliant with ERB standards, Mines Safety Regulations, and Local Content requirements under SI No. 68 of 2025. PACRA Certificate No. 120261040111.",
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
            <span className="mb-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">— Compliance</span>
            <h1 className="font-display text-5xl tracking-wider text-primary-foreground sm:text-6xl lg:text-8xl">
              Regulatory<br /><span className="text-accent">Framework</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
              Our commitment to regulatory compliance ensures your procurement decisions are backed by proper documentation and adherence to Zambian law.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Areas — Horizontal stacks */}
      <section className="bg-background py-24 lg:py-36">
        <div className="container">
          <SectionHeading badge="Regulatory Framework" title="Comprehensive Compliance" subtitle="Strict adherence to all applicable regulations governing industrial supply in Zambia's mining sector." />

          <div className="space-y-0">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
                className={`grid items-stretch lg:grid-cols-12 ${index !== complianceAreas.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-center justify-center bg-muted p-8 lg:col-span-2 lg:p-12">
                  <span className="font-display text-6xl text-accent/20 lg:text-8xl">{area.num}</span>
                </div>
                <div className="p-8 lg:col-span-4 lg:p-12">
                  <area.icon className="mb-4 h-7 w-7 text-accent" />
                  <h3 className="font-display text-2xl tracking-wider text-foreground lg:text-3xl">{area.title}</h3>
                  <p className="mt-3 text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{area.description}</p>
                </div>
                <div className="border-l border-border p-8 lg:col-span-6 lg:p-12">
                  <ul className="space-y-3">
                    {area.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Policy */}
      <section className="bg-primary py-24 noise-overlay relative lg:py-36">
        <div className="container relative">
          <SectionHeading badge="Policy Alignment" title="Local Content Advantage" subtitle="Our operations align with key Zambian policies that promote local participation in the mining value chain." light />

          <div className="grid gap-px bg-primary-foreground/10 lg:grid-cols-3">
            {policyAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-primary p-8 lg:p-10"
              >
                <area.icon className="mb-5 h-8 w-8 text-accent" />
                <h3 className="mb-4 font-display text-xl tracking-wider text-primary-foreground">{area.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>{area.description}</p>
                {"benefits" in area && area.benefits && (
                  <ul className="mt-6 space-y-3">
                    {area.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6 h-0.5 w-12 bg-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="bg-background py-24 lg:py-36">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="grid items-start gap-12 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <FileText className="mb-4 h-10 w-10 text-accent" />
                <h3 className="font-display text-3xl tracking-wider text-foreground accent-line">Documentation Available</h3>
                <p className="mt-8 text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                  All compliance documents are available upon request for your vendor evaluation process.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-0">
                  {availableDocuments.map((doc, i) => (
                    <div key={doc} className="flex items-center gap-4 border-b border-border py-4 transition-colors hover:bg-muted/50">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-accent text-xs font-bold text-accent-foreground">{i + 1}</span>
                      <span className="text-sm text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Need Compliance Documentation?"
        subheading="Contact us to request copies of our compliance certificates and registration documents."
        primaryLabel="Request Documents"
        secondaryLabel="View Services"
      />
    </div>
  );
}
