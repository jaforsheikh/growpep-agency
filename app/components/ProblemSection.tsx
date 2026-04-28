"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  MousePointerClick,
  SearchX,
} from "lucide-react";

const problems = [
  {
    title: "Beautiful website, but no leads",
    desc: "Many websites look good but fail to convert visitors into real inquiries and paying clients.",
    icon: MousePointerClick,
  },
  {
    title: "Low Google visibility",
    desc: "Without SEO structure, your business stays invisible while competitors capture the traffic.",
    icon: SearchX,
  },
  {
    title: "Weak trust signals",
    desc: "Missing testimonials, case studies, reviews, and strong positioning reduces buyer confidence.",
    icon: AlertTriangle,
  },
  {
    title: "No growth system",
    desc: "Most brands do random marketing without a clear funnel, analytics, or conversion strategy.",
    icon: BarChart3,
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-300"
          >
            The Real Problem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Your website should not just look good — it should{" "}
            <span className="gradient-text">bring clients</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            Growpep builds digital systems that combine premium design, SEO,
            trust-building content, and lead generation strategy.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass-card group relative min-h-[260px] overflow-hidden rounded-3xl p-6"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-yellow-400/15" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[36px] border border-cyan-400/20 bg-cyan-400/10 p-7 md:p-9"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-black text-white md:text-5xl">
                We don&apos;t just design pages. We design growth systems.
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Every section is built with a purpose: attract attention, build
                trust, explain value, remove objections, and turn visitors into
                leads.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Conversion-focused layout",
                "SEO-ready structure",
                "Trust-building content",
                "Lead capture CTA flow",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#020617]/60 px-5 py-4 text-sm font-black text-slate-200"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}