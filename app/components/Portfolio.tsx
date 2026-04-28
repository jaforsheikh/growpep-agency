"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Globe2,
  LineChart,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const caseStudies = [
  {
    title: "Reputation Management Landing Page",
    category: "Reputation Management",
    icon: ShieldCheck,
    problem:
      "The business had low trust signals, weak landing page structure, and no clear conversion path for visitors.",
    solution:
      "We designed a premium conversion-focused landing page with strong trust sections, review-focused messaging, FAQ, CTA blocks, and WhatsApp lead flow.",
    results: ["+48% lead inquiries", "+32% trust engagement", "2.1s faster load time"],
    tools: ["Next.js", "Tailwind CSS", "SEO", "Framer Motion"],
    details: [
      "Premium hero section with strong CTA",
      "Trust badge and satisfaction guarantee sections",
      "Service benefits and review strategy blocks",
      "FAQ and lead capture CTA system",
      "Mobile-first responsive layout",
    ],
  },
  {
    title: "Local SEO Service Website",
    category: "SEO Website",
    icon: Search,
    problem:
      "The client’s website was not optimized for service keywords, had poor page structure, and did not clearly explain their local SEO offer.",
    solution:
      "We created SEO-friendly service sections, keyword-focused content hierarchy, optimized headings, location-focused copy, and conversion blocks.",
    results: ["Better service clarity", "+40% organic lead potential", "SEO-ready structure"],
    tools: ["WordPress", "On-page SEO", "Schema", "Analytics"],
    details: [
      "SEO title and meta structure",
      "Service keyword mapping",
      "Local business trust sections",
      "Google Business Profile CTA flow",
      "Technical SEO checklist implementation",
    ],
  },
  {
    title: "Digital Agency Brand Website",
    category: "Agency Website",
    icon: Globe2,
    problem:
      "The agency needed a premium online presence that could show services, build authority, and help close high-ticket clients.",
    solution:
      "We built a dark premium agency website with animated sections, service cards, testimonials, process, pricing, and lead-focused CTAs.",
    results: ["Premium brand image", "+55% CTA visibility", "Client-ready presentation"],
    tools: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    details: [
      "Animated hero and premium navbar",
      "Clickable service cards with detailed modals",
      "Process and pricing sections",
      "Testimonials and FAQ section",
      "WhatsApp consultation CTA",
    ],
  },
  {
    title: "Social Media Growth Campaign",
    category: "Social Media",
    icon: Megaphone,
    problem:
      "The brand posted inconsistently and had no content direction, which made the business look inactive online.",
    solution:
      "We created a structured content plan with campaign ideas, post categories, captions, and engagement-focused messaging.",
    results: ["30-day content plan", "+65% profile consistency", "Better brand trust"],
    tools: ["Meta Suite", "Canva", "Instagram", "Facebook"],
    details: [
      "Content calendar strategy",
      "Post category planning",
      "Caption and hashtag framework",
      "Brand voice direction",
      "Engagement improvement suggestions",
    ],
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<(typeof caseStudies)[0] | null>(
    null
  );

  return (
    <section id="portfolio" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-10%] bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
          >
            <Sparkles size={17} />
            Case Studies
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Real project-style showcases built for{" "}
            <span className="gradient-text">portfolio power</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Click each case study to see the problem, solution, results,
            deliverables, and tools used.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] md:p-7"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={30} />
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>

                  <span className="mb-4 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1.5 text-xs font-black text-yellow-300">
                    {item.category}
                  </span>

                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.solution}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {item.results.map((result) => (
                      <div
                        key={result}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                      >
                        <p className="text-xs font-black text-cyan-300">
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                    View full case study <ArrowRight size={16} />
                  </p>
                </div>
              </motion.button>
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
              aria-label="Close portfolio modal"
            />

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[34px] border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl shadow-cyan-400/10 md:p-8"
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
                    {selected.category}
                  </p>
                  <h2 className="text-3xl font-black text-white md:text-5xl">
                    {selected.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {selected.solution}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
                    <LineChart className="text-yellow-300" />
                    Problem
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">
                    {selected.problem}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
                    <CheckCircle2 className="text-cyan-300" />
                    Solution
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">
                    {selected.solution}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
                    <BarChart3 className="text-cyan-300" />
                    Results
                  </h3>
                  <div className="space-y-3">
                    {selected.results.map((result) => (
                      <p
                        key={result}
                        className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-black text-cyan-200"
                      >
                        {result}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    What Was Included
                  </h3>

                  <div className="space-y-3">
                    {selected.details.map((detail) => (
                      <p
                        key={detail}
                        className="flex gap-2 text-sm leading-6 text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    Tools & Strategy Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {selected.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-sm leading-7 text-slate-300">
                      This case study is designed to show real business thinking:
                      problem analysis, solution strategy, measurable impact,
                      and client-focused execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Want a similar result for your business?
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Let Growpep plan and build your premium digital growth
                      system.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/8801716506412"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500"
                  >
                    Start Project <ExternalLink size={17} />
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