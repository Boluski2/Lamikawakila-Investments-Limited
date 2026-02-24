import { useSEO } from "@/hooks/useSEO";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Fuel, HardHat, Wrench, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const contactInfo = [
  { icon: MapPin, title: "Address", details: ["Stand No. 95, President Avenue", "Town Centre, Ndola", "Copperbelt Province, Zambia"] },
  { icon: Phone, title: "Telephone", details: ["+260 972 149 043"], link: "tel:+260972149043" },
  { icon: Mail, title: "Email", details: ["sophie@lamikawakila.com"], link: "mailto:sophie@lamikawakila.com" },
  { icon: Clock, title: "Business Hours", details: ["Monday – Friday", "08:00 – 17:00 CAT"] },
];

const inquiryTypes = [
  { value: "diesel", label: "Diesel Inquiry", icon: Fuel },
  { value: "ppe", label: "PPE Inquiry", icon: HardHat },
  { value: "equipment", label: "Equipment Inquiry", icon: Wrench },
  { value: "general", label: "General Inquiry", icon: MessageSquare },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  useSEO({
    title: "Contact Us | Request a Quote | Lamikawakila Investments Limited",
    description: "Contact Lamikawakila Investments Limited for quotations on diesel, PPE, and mining supplies. Ndola-based. Tel: +260 972 149 043 | sophie@lamikawakila.com",
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "", companyName: "", email: "", telephone: "", subject: "", message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({ title: "Message Sent", description: "Thank you for your inquiry. We'll respond within 24-48 hours." });
    setFormData({ fullName: "", companyName: "", email: "", telephone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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
            <span className="mb-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">— Contact</span>
            <h1 className="font-display text-5xl tracking-wider text-primary-foreground sm:text-6xl lg:text-8xl">
              Get in<br /><span className="text-accent">Touch</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
              We welcome inquiries from mining operations, procurement teams, and industry partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="bg-accent">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-accent-foreground/10">
            {contactInfo.map((item, i) => (
              <div key={item.title} className="px-6 py-8">
                <item.icon className="mb-3 h-5 w-5 text-accent-foreground/60" />
                <h3 className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground/40">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-accent-foreground/80" style={{ textTransform: "none", letterSpacing: "normal" }}>
                    {item.link && idx === 0 ? <a href={item.link} className="hover:text-accent-foreground">{detail}</a> : detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="contact-form" className="bg-background py-24 lg:py-36">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-12">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="lg:col-span-4"
            >
              <span className="mb-3 inline-block font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">— Send a Message</span>
              <h2 className="font-display text-4xl tracking-wider text-foreground accent-line sm:text-5xl">
                Let's Talk
              </h2>
              <p className="mt-8 text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                Fill out the form and our team will get back to you within <strong className="text-foreground">24-48 business hours</strong>.
              </p>
              <p className="mt-4 text-sm text-muted-foreground" style={{ textTransform: "none", letterSpacing: "normal" }}>
                For urgent requirements, please call us directly.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="lg:col-span-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Full Name *</Label>
                    <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Your full name" required className="border-border bg-transparent" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Company Name *</Label>
                    <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Your company name" required className="border-border bg-transparent" />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@company.com" required className="border-border bg-transparent" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Telephone *</Label>
                    <Input id="telephone" name="telephone" type="tel" value={formData.telephone} onChange={handleInputChange} placeholder="+260 XXX XXX XXX" required className="border-border bg-transparent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Subject *</Label>
                  <Select value={formData.subject} onValueChange={handleSubjectChange} required>
                    <SelectTrigger className="border-border bg-transparent">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <span className="flex items-center gap-2">
                            <type.icon className="h-4 w-4" />
                            {type.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Please describe your requirements..." rows={5} required className="border-border bg-transparent" />
                </div>
                <Button type="submit" variant="accent" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : (<>Send Message <Send className="ml-2 h-4 w-4" /></>)}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quotation Guide */}
      <section className="bg-primary py-24 noise-overlay relative lg:py-36">
        <div className="container relative">
          <SectionHeading badge="Get a Quote" title="Request a Quotation" subtitle="To prepare a detailed quotation tailored to your operational needs, please provide the following information:" light />

          <div className="grid gap-px bg-primary-foreground/10 md:grid-cols-3">
            {[
              { icon: Fuel, title: "Diesel Requirements", items: ["Estimated monthly consumption (litres)", "Delivery location/site address", "Preferred delivery schedule"] },
              { icon: HardHat, title: "PPE Requirements", items: ["Specific items required", "Sizes and quantities per item", "Delivery timeline"] },
              { icon: Wrench, title: "Equipment/Consumables Requirements", items: ["List of items required", "Quantities and specifications", "Intended application/use case"] },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-primary p-8 lg:p-10"
              >
                <card.icon className="mb-4 h-7 w-7 text-accent" />
                <h3 className="mb-4 font-display text-xl tracking-wider text-primary-foreground">{card.title}</h3>
                <ul className="space-y-3 text-sm text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 h-0.5 w-12 bg-accent" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
            className="mt-12 text-center"
          >
            <p className="mb-8 text-primary-foreground/60" style={{ textTransform: "none", letterSpacing: "normal" }}>
              We will respond within 24–48 hours with a competitive quotation and compliance documentation.
            </p>
            <Button asChild variant="accent" size="xl">
              <a href="#contact-form" onClick={(e) => { e.preventDefault(); document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Request Quotation <Send className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Company Details */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {[
                { label: "Company Name", value: "Lamikawakila Investments Limited" },
                { label: "PACRA Certificate", value: "120261040111", highlight: true },
                { label: "Location", value: "Stand No. 95, President Avenue,Town Centre, Ndola, Copperbelt Province, Zambia" },
                { label: "ISIC Classification", value: "0910" },
              ].map((item) => (
                <div key={item.label} className="bg-background p-6">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{item.label}</span>
                  <p className={`mt-1 text-lg font-semibold ${item.highlight ? "text-accent" : "text-foreground"}`} style={{ textTransform: "none", letterSpacing: "normal" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
