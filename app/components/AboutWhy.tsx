"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Lightbulb,
  LineChart,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

const aboutCards = [
  {
    title: "Strategy First",
    icon: Target,
    short: "We plan every website around business goals, not just visuals.",
    details:
      "Before creating any design, Growpep studies your business, target audience, services, competitors, and conversion goals. This helps us create a website that clearly communicates value and guides visitors toward action.",
    points: [
      "Business goal discovery",
      "Audience-focused structure",
      "Conversion-first messaging",
      "Clear CTA planning",
    ],
  },
  {
    title: "Premium UI/UX",
    icon: Sparkles,
    short: "We create modern digital experiences that feel high-value.",
    details:
      "A premium website builds trust before the customer speaks with you. Growpep focuses on spacing, typography, colors, animation, content hierarchy, and clean user experience.",
    points: [
      "Modern dark agency design",
      "Glassmorphism cards",
      "Smooth animations",
      "Mobile-first layout",
    ],
  },
  {
    title: "Growth Focused",
    icon: TrendingUp,
    short: "Every section is designed to support leads and sales.",
    details:
      "We do not build random sections. Every hero, service block, testimonial, FAQ, and CTA is planned to increase trust and help visitors contact your business.",
    points: [
      "Lead capture strategy",
      "WhatsApp CTA integration",
      "Trust-building sections",
      "Conversion improvement ideas",
    ],
  },
];

const whyCards = [
  {
    title: "Conversion-Focused Design",
    icon: MousePointerClick,
    desc: "Layouts built to guide visitors toward inquiry, consultation, or purchase.",
    details:
      "Many websites look good but fail to convert. We design each page with clear messaging, action buttons, proof sections, and visitor psychology in mind.",
    points: [
      "Clear hero message",
      "Strong CTA placement",
      "Trust proof sections",
      "Reduced user confusion",
    ],
  },
  {
    title: "Clean Development",
    icon: Code2,
    desc: "Modern, scalable, responsive code structure built with best practices.",
    details:
      "Growpep builds websites using clean components, responsive layouts, optimized structure, and maintainable code so the website can grow over time.",
    points: [
      "Reusable components",
      "Responsive Tailwind layout",
      "Performance-focused structure",
      "Easy future updates",
    ],
  },
  {
    title: "SEO Foundation",
    icon: LineChart,
    desc: "SEO-friendly page structure that helps your website grow organically.",
    details:
      "We plan headings, content sections, keyword-friendly structure, metadata direction, internal linking ideas, and technical SEO foundations.",
    points: [
      "SEO content hierarchy",
      "Service page structure",
      "Meta title direction",
      "Technical SEO basics",
    ],
  },
  {
    title: "Trust & Reputation",
    icon: ShieldCheck,
    desc: "We help brands look credible with proof, reviews, and reputation signals.",
    details:
      "Trust is one of the biggest reasons visitors become clients. We add reviews, badges, guarantees, case studies, FAQs, and credibility-focused sections.",
    points: [
      "Testimonials strategy",
      "Review-focused sections",
      "Trust badge placement",
      "FAQ objection handling",
    ],
  },
  {
    title: "Fast Delivery",
    icon: Zap,
    desc: "Organized workflow helps launch projects faster without reducing quality.",
    details:
      "We use a clear process from research to launch. This keeps your project organized, avoids confusion, and helps deliver premium work on time.",
    points: [
      "Clear timeline",
      "Step-by-step workflow",
      "Revision planning",
      "Launch support",
    ],
  },
  {
    title: "Business Mindset",
    icon: Award,
    desc: "We think beyond design and focus on how the website helps your business.",
    details:
      "Growpep builds websites as business assets. We consider offers, service clarity, user intent, lead generation, SEO, and long-term digital growth.",
    points: [
      "Business-focused decisions",
      "Growth roadmap thinking",
      "Client acquisition focus",
      "Premium brand positioning",
    ],
  },
];

type ModalItem = {
  title: string;
  icon: React.ElementType;
  details: string;
  points: string[];
};

export default function AboutWhy() {
  const [selected, setSelected] = useState<ModalItem | null>(null);

  return (
    <>
      <section id="about" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
          <div className="absolute right-[-10%] bottom-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-[140px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
              >
                <Lightbulb size={17} />
                Who We Are
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-black tracking-tight text-white md:text-6xl"
              >
                We build premium digital experiences that{" "}
                <span className="gradient-text">bring real clients</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="mt-6 text-lg leading-8 text-slate-300"
              >
                Growpep is a digital growth agency focused on high-converting
                websites, SEO, reputation management, social media strategy, and
                lead generation systems for modern businesses.
              </motion.p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["50+", "Projects"],
                  ["98%", "Satisfaction"],
                  ["24/7", "Support"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <h3 className="text-3xl font-black text-white">{value}</h3>
                    <p className="mt-1 text-sm text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {aboutCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.button
                    key={card.title}
                    type="button"
                    onClick={() => setSelected(card)}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                  >
                    <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                    <div className="relative z-10 flex gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Icon size={25} />
                      </span>

                      <div>
                        <h3 className="text-xl font-black text-white">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-400">
                          {card.short}
                        </p>
                        <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                          Read more <ArrowRight size={15} />
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
            >
              <Rocket size={17} />
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black tracking-tight text-white md:text-6xl"
            >
              More than design — we build{" "}
              <span className="gradient-text">business growth systems</span>
            </motion.h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Click any card to learn how our strategy, design, development,
              SEO, and trust-focused workflow helps businesses grow online.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.button
                  key={card.title}
                  type="button"
                  onClick={() => setSelected(card)}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="group relative min-h-[260px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                >
                  <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-7 flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Icon size={25} />
                      </span>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-yellow-300">
                        Premium
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {card.desc}
                    </p>

                    <p className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                      View details <ArrowRight size={15} />
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute inset-0"
              aria-label="Close modal"
            />

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[34px] border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl shadow-cyan-400/10 md:p-8"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-red-500/20"
              >
                <X size={20} />
              </button>

              <div className="mb-7 flex items-start gap-4 pr-12">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <selected.icon size={30} />
                </div>

                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                    Growpep Insight
                  </p>
                  <h2 className="text-3xl font-black text-white md:text-5xl">
                    {selected.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {selected.details}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="mb-5 text-xl font-black text-white">
                  What This Includes
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {selected.points.map((point) => (
                    <p
                      key={point}
                      className="flex gap-2 rounded-2xl border border-white/10 bg-[#020617]/60 px-4 py-3 text-sm leading-6 text-slate-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />
                      {point}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Want to grow with Growpep?
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Let&apos;s build a premium website and digital growth
                      system for your business.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/8801716506412"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500"
                  >
                    Get Free Quote <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}