import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Shield, Users, Heart, Handshake, ArrowRight, MapPin } from "lucide-react";
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

const values = [
  { icon: Shield, title: "Integrity", description: "We operate with transparency and ethical business conduct." },
  { icon: CheckCircle, title: "Reliability", description: "We deliver on our commitments—on time, every time." },
  { icon: Heart, title: "Compliance", description: "We adhere to all Zambian regulatory frameworks governing our operations." },
  { icon: Handshake, title: "Partnership", description: "We view our clients as partners in advancing operational excellence." },
];

const localContentBenefits = [
  "15% bid preference when competing against foreign suppliers",
  "Full scoring under the \u201CZambian Ownership\u201D criterion in vendor evaluation matrices",
  "Direct contribution toward your Local Content procurement thresholds",
];

const companyDetails = [
  { label: "Company Name", value: "Lamikawakila Investments Limited" },
  { label: "PACRA Certificate", value: "120261040111", highlight: true },
  { label: "Incorporation Date", value: "30 January 2026" },
  { label: "Legal Structure", value: "Private Company Limited by Shares" },
  { label: "ISIC Classification", value: "0910" },
  { label: "Headquarters", value: "Ndola, Copperbelt Province" },
];

export default function About() {
  useSEO({
    title: "About Us | Lamikawakila Investments Limited | Zambian Registered Enterprise",
    description: "Learn about Lamikawakila Investments Limited—Ndola-based industrial supplier incorporated under the Companies Act No. 10 of 2017. Serving Zambia's mining sector.",
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
            <span className="mb-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">
              — About Us
            </span>
            <h1 className="font-display text-5xl tracking-wider text-primary-foreground sm:text-6xl lg:text-8xl">
              Our<br /><span className="text-accent">Company</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
              A trusted industrial supply partner committed to reliability, compliance, and local economic growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview — Split */}
      <section className="bg-background py-24 lg:py-36">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="lg:col-span-7"
            >
              <span className="mb-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">— Our Story</span>
              <h2 className="font-display text-4xl tracking-wider text-foreground sm:text-5xl accent-line">
                Built for Zambian Industry
              </h2>
              <div className="mt-8 space-y-5 text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                <p>
                  <strong className="text-foreground">Lamikawakila Investments Limited</strong> was incorporated on 30 January 2026 under the Companies Act No. 10 of 2017 (PACRA Certificate No. 120261040111) as a private company limited by shares. Based in Ndola, Copperbelt Province, we serve the industrial supply needs of Zambia's mining sector with a focus on reliability, compliance, and local economic integration.
                </p>
                <p>
                  Our registered business activities fall under ISIC 0910 – Support activities for mining and quarrying – positioning us as a legitimate participant in Zambia's extractive industries value chain.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="border-l-2 border-accent bg-card">
                {companyDetails.map((item, i) => (
                  <div key={item.label} className={`flex justify-between px-6 py-4 ${i !== companyDetails.length - 1 ? "border-b border-border" : ""}`}>
                    <span className="text-sm text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{item.label}</span>
                    <span className={`text-sm font-semibold ${item.highlight ? "text-accent" : "text-foreground"}`} style={{ textTransform: "none", letterSpacing: "normal" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — Full bleed split */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: "To deliver dependable industrial supply solutions that keep mining operations running efficiently, while contributing to meaningful Zambian enterprise participation across the mining value chain.", bg: "bg-primary" },
            { icon: Eye, title: "Our Vision", text: "To become a trusted supply partner for Copperbelt mining operations—recognised for operational reliability, regulatory compliance, and commitment to local economic development.", bg: "bg-accent" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className={`${item.bg} noise-overlay relative p-12 lg:p-20`}
            >
              <item.icon className="mb-6 h-10 w-10 text-accent-foreground/40" />
              <h3 className="font-display text-3xl tracking-wider text-accent-foreground lg:text-4xl">{item.title}</h3>
              <div className="my-6 h-0.5 w-16 bg-accent-foreground/20" />
              <p className="text-lg leading-relaxed text-accent-foreground/70" style={{ textTransform: "none", letterSpacing: "normal" }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values — Grid with numbers */}
      <section className="bg-background py-24 lg:py-36">
        <div className="container">
          <SectionHeading badge="Our Values" title="Principles That Guide Us" subtitle="Our values form the foundation of every relationship and transaction." />
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp}
                className="group relative bg-background p-8 transition-colors hover:bg-card lg:p-10"
              >
                <span className="deco-number">{String(index + 1).padStart(2, "0")}</span>
                <value.icon className="mb-5 h-7 w-7 text-accent" />
                <h3 className="mb-3 font-display text-2xl tracking-wider text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{value.description}</p>
                <div className="mt-6 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="bg-muted py-24 lg:py-36">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="lg:col-span-6"
            >
              <span className="mb-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">— Local Content</span>
              <h2 className="font-display text-4xl tracking-wider text-foreground sm:text-5xl accent-line">
                Local Content Commitment
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                As a PACRA-registered Zambian enterprise, Lamikawakila Investments Limited is positioned to support mining companies in meeting their statutory Local Content obligations under Statutory Instrument No. 68 of 2025, which mandates that not less than 20% of annual procurement budgets be allocated to local companies.
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="lg:col-span-6"
            >
              <div className="border-l-2 border-accent bg-card p-8 lg:p-10">
                <h3 className="mb-6 flex items-center gap-3 font-display text-xl tracking-wider text-foreground">
                  <Users className="h-6 w-6 text-accent" />
                  Our Services Qualify For
                </h3>
                <ul className="space-y-5">
                  {localContentBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center bg-accent text-xs font-bold text-accent-foreground">{index + 1}</span>
                      <span className="text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative bg-primary py-24 noise-overlay lg:py-36">
        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            >
              <MapPin className="mb-6 h-10 w-10 text-accent" />
              <h2 className="font-display text-4xl tracking-wider text-primary-foreground sm:text-5xl">Our Location</h2>
              <div className="my-6 h-0.5 w-16 bg-accent" />
              <p className="text-xl font-medium leading-relaxed text-primary-foreground/80" style={{ textTransform: "none", letterSpacing: "normal" }}>
                Stand No. 95, President Avenue<br />
                Town Centre, Ndola<br />
                Copperbelt Province<br />
                Republic of Zambia
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            >
              <p className="text-lg leading-relaxed text-primary-foreground/50" style={{ textTransform: "none", letterSpacing: "normal" }}>
                <strong className="text-primary-foreground/80">Strategic Advantage:</strong> Our Ndola location provides logistical proximity to major mining operations across the Copperbelt, enabling rapid deployment and responsive service delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Partner with Us?"
        subheading="Discover how Lamikawakila Investments Limited can streamline your mining supply chain."
        primaryLabel="Contact Our Team"
        secondaryLabel=""
      />
    </div>
  );
}
