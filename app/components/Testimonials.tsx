"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  Sparkles,
  Star,
  TrendingUp,
  UsersRound,
  X,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    company: "Urban Taste Kitchen",
    rating: 5,
    short:
      "Growpep redesigned our website and made it look premium. Customers now contact us faster through WhatsApp.",
    story:
      "Before working with Growpep, our website looked outdated and did not clearly show our services, reviews, or contact options. Growpep rebuilt the website with a premium dark design, strong CTA flow, trust sections, and WhatsApp integration. The new website feels modern, fast, and professional.",
    results: [
      "More WhatsApp inquiries",
      "Better customer trust",
      "Cleaner service presentation",
      "Improved mobile experience",
    ],
    serviceUsed: ["Website Design", "WhatsApp CTA", "Trust Sections"],
  },
  {
    name: "Michael Carter",
    role: "Agency Founder",
    company: "LocalBoost Media",
    rating: 5,
    short:
      "The UI quality, animations, and service structure helped us present our agency as high-value.",
    story:
      "We needed a professional agency website that could explain our offers, show credibility, and help close better clients. Growpep created a conversion-focused structure with services, process, case studies, pricing, and FAQ sections. The result looks like a real premium agency website.",
    results: [
      "Stronger agency positioning",
      "Improved service clarity",
      "Better lead capture flow",
      "Premium brand impression",
    ],
    serviceUsed: ["Agency Website", "SEO Structure", "Landing Page"],
  },
  {
    name: "Nadia Rahman",
    role: "eCommerce Manager",
    company: "NovaCart Store",
    rating: 5,
    short:
      "Their SEO and conversion suggestions helped us understand what our website was missing.",
    story:
      "Our eCommerce website had traffic but low trust and weak conversion sections. Growpep reviewed our layout and helped us add stronger messaging, trust badges, review sections, better CTA placement, and a cleaner product presentation strategy.",
    results: [
      "Better conversion direction",
      "Improved trust signals",
      "More polished brand look",
      "Clearer customer journey",
    ],
    serviceUsed: ["SEO", "Conversion Strategy", "UI Improvements"],
  },
  {
    name: "David Wilson",
    role: "Consultant",
    company: "Wilson Advisory",
    rating: 5,
    short:
      "Growpep helped me turn a simple personal website into a professional lead-generation asset.",
    story:
      "As a consultant, I needed a website that looked trustworthy and clearly explained my services. Growpep created a clean structure with a strong hero section, service blocks, testimonials, FAQ, and consultation CTA. It now feels much more client-ready.",
    results: [
      "Professional online presence",
      "Clearer offer presentation",
      "More consultation-ready layout",
      "Improved personal branding",
    ],
    serviceUsed: ["Personal Brand Website", "Lead Generation", "Copy Structure"],
  },
];

export default function Testimonials() {
  const [selected, setSelected] = useState<(typeof testimonials)[0] | null>(
    null
  );

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
          >
            <UsersRound size={17} />
            Client Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            What clients say about{" "}
            <span className="gradient-text">Growpep</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Click any testimonial to read the full client story, service used,
            and the business results delivered.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.button
              key={item.name}
              type="button"
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
            >
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <Quote className="mb-6 text-cyan-300" size={34} />

                <div className="mb-5 flex gap-1 text-yellow-300">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={17} fill="currentColor" />
                  ))}
                </div>

                <p className="min-h-[112px] text-sm leading-7 text-slate-300">
                  “{item.short}”
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <h3 className="font-black text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                  <p className="mt-1 text-xs font-bold text-cyan-300">
                    {item.company}
                  </p>
                </div>

                <p className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                  Read full story <ArrowRight size={16} />
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[36px] border border-yellow-400/20 bg-yellow-400/10 p-6 md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                <Sparkles size={16} />
                Trust-Driven Work
              </span>

              <h3 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                We focus on outcomes, not just pretty designs.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Every website, SEO plan, and digital campaign is designed to
                improve trust, clarity, and lead generation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["98%", "Client Satisfaction"],
                ["50+", "Projects Delivered"],
                ["24/7", "Growth Support"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-[#020617]/60 p-5"
                >
                  <h4 className="text-3xl font-black text-white">{value}</h4>
                  <p className="mt-2 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
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
              aria-label="Close testimonial modal"
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
                  Client Success Story
                </p>

                <h2 className="text-3xl font-black text-white md:text-5xl">
                  {selected.company}
                </h2>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300">
                    {selected.name}
                  </span>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                    {selected.role}
                  </span>
                  <span className="flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-yellow-300">
                    {Array.from({ length: selected.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </span>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-300">
                  “{selected.story}”
                </p>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 flex items-center gap-2 text-xl font-black text-white">
                    <TrendingUp className="text-cyan-300" />
                    Results Delivered
                  </h3>

                  <div className="space-y-3">
                    {selected.results.map((result) => (
                      <p
                        key={result}
                        className="flex gap-2 text-sm leading-6 text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        {result}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    Services Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {selected.serviceUsed.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-sm leading-7 text-slate-300">
                      Growpep combines premium UI, conversion strategy, and
                      growth-focused execution to help brands look professional
                      and win more clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Want results like this?
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Let&apos;s discuss your website, SEO, or growth project.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/8801716506412"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500"
                  >
                    Contact Growpep <ArrowRight size={17} />
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