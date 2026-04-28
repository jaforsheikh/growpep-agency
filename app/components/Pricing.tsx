"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Crown,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    badge: "Best for small brands",
    icon: Rocket,
    desc: "Perfect for new businesses that need a clean, professional online presence.",
    bestFor: "Portfolio, startup, personal brand, small service business",
    timeline: "5–7 days",
    features: [
      "Up to 5 website sections",
      "Responsive mobile-friendly design",
      "Basic SEO setup",
      "Contact form integration",
      "WhatsApp CTA button",
      "Speed optimized layout",
      "Basic on-page content structure",
      "1 revision round",
    ],
    details: [
      "Modern homepage design",
      "Hero, services, about, CTA, footer",
      "Basic trust elements",
      "Clean brand color setup",
      "Deployment support",
    ],
  },
  {
    name: "Growth",
    price: "$799",
    badge: "Most Popular",
    icon: Crown,
    desc: "A complete conversion-focused website for businesses ready to generate leads.",
    bestFor: "Agencies, local businesses, service companies, consultants",
    timeline: "10–14 days",
    features: [
      "Up to 8–10 premium sections",
      "Advanced responsive UI/UX",
      "SEO-friendly service structure",
      "Framer Motion animations",
      "Lead capture form",
      "WhatsApp + email CTA system",
      "Testimonials and case study sections",
      "Performance optimization",
      "Google Analytics setup guidance",
      "2 revision rounds",
    ],
    details: [
      "Premium homepage design",
      "Service sections with strong copy",
      "Trust-building conversion blocks",
      "Animated cards and hover effects",
      "Basic technical SEO setup",
      "Launch-ready structure",
    ],
  },
  {
    name: "Premium",
    price: "$1499",
    badge: "Full agency system",
    icon: ShieldCheck,
    desc: "A high-end digital growth website with full funnel strategy and advanced sections.",
    bestFor: "High-ticket agencies, SaaS brands, established businesses",
    timeline: "15–25 days",
    features: [
      "Custom multi-page website structure",
      "Premium animated landing page",
      "SEO-optimized service pages",
      "Case study / portfolio system",
      "Advanced lead generation funnel",
      "Conversion-focused copywriting structure",
      "Analytics and tracking setup guidance",
      "Reputation trust elements",
      "Performance and accessibility optimization",
      "3 revision rounds",
      "Launch support",
      "Post-launch improvement suggestions",
    ],
    details: [
      "Homepage + inner page planning",
      "High-converting CTA strategy",
      "Premium UI system",
      "Advanced component structure",
      "Stronger SEO architecture",
      "Client-ready presentation quality",
    ],
  },
];

export default function Pricing() {
  const [selected, setSelected] = useState<(typeof plans)[0] | null>(null);

  return (
    <section id="pricing" className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
          >
            <Sparkles size={17} />
            Pricing Plans
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Choose the right plan to{" "}
            <span className="gradient-text">grow faster</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every package is designed to help your business look premium, build
            trust, and convert visitors into real clients.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const popular = plan.name === "Growth";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[34px] p-[1px] ${
                  popular
                    ? "bg-gradient-to-b from-cyan-400/70 via-blue-600/50 to-yellow-400/30"
                    : "bg-white/10"
                }`}
              >
                <div className="h-full rounded-[33px] bg-[#020617]/95 p-7">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={26} />
                    </span>

                    <span
                      className={`rounded-full border px-4 py-2 text-xs font-black ${
                        popular
                          ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
                          : "border-white/10 bg-white/[0.04] text-slate-300"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white">{plan.name}</h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-400">
                    {plan.desc}
                  </p>

                  <div className="mt-7 flex items-end gap-2">
                    <span className="text-5xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="pb-2 text-sm font-bold text-slate-400">
                      / project
                    </span>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Best For
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {plan.bestFor}
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
                      Delivery
                    </p>
                    <p className="mt-2 text-sm font-bold text-white">
                      {plan.timeline}
                    </p>
                  </div>

                  <div className="my-7 h-px bg-white/10" />

                  <div className="space-y-4">
                    {plan.features.slice(0, 7).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm font-semibold text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelected(plan)}
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-black transition ${
                      popular
                        ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30 hover:bg-blue-500"
                        : "border border-white/10 text-white hover:border-cyan-400/40 hover:text-cyan-300"
                    }`}
                  >
                    View Full Details <ArrowRight size={17} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

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
              aria-label="Close pricing modal"
            />

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[34px] border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl shadow-cyan-400/10 md:p-8"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-red-500/20"
              >
                <X size={20} />
              </button>

              <div className="pr-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                  Package Details
                </p>

                <h2 className="text-4xl font-black text-white md:text-5xl">
                  {selected.name} Plan
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  {selected.desc}
                </p>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-400">Price</p>
                  <h3 className="mt-2 text-3xl font-black text-white">
                    {selected.price}
                  </h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-400">Timeline</p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {selected.timeline}
                  </h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-400">Best For</p>
                  <h3 className="mt-2 text-base font-black leading-7 text-white">
                    {selected.bestFor}
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    Included Features
                  </h3>

                  <div className="space-y-3">
                    {selected.features.map((item) => (
                      <p
                        key={item}
                        className="flex gap-2 text-sm leading-6 text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    What You Will Receive
                  </h3>

                  <div className="space-y-3">
                    {selected.details.map((item) => (
                      <p
                        key={item}
                        className="flex gap-2 text-sm leading-6 text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-yellow-300"
                        />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Ready to start with {selected.name}?
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Contact Growpep and get a free project consultation.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/8801716506412"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500"
                  >
                    Start Project <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}