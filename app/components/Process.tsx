"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Lightbulb,
  Rocket,
  SearchCheck,
  Sparkles,
  X,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Research & Strategy",
    short:
      "We understand your business, audience, competitors, and conversion goals.",
    icon: SearchCheck,
    duration: "1–2 Days",
    full:
      "Before design starts, we research your business model, target audience, competitors, services, offers, and conversion goals. This helps us build a website that is not just beautiful, but also business-focused.",
    tasks: [
      "Business goal discovery",
      "Competitor website research",
      "Audience and buyer intent analysis",
      "Website structure planning",
      "CTA and conversion strategy",
    ],
    outcome: [
      "Clear website direction",
      "Better messaging strategy",
      "Conversion-focused page structure",
    ],
  },
  {
    number: "02",
    title: "Design & Branding",
    short:
      "We create premium UI direction with strong colors, spacing, typography, and trust flow.",
    icon: Lightbulb,
    duration: "2–4 Days",
    full:
      "We design a premium agency-level interface with modern layout, color balance, trust-building sections, strong typography, and professional user experience. The goal is to make your brand look high-value.",
    tasks: [
      "Premium homepage layout",
      "Brand color and typography setup",
      "Hero section and CTA design",
      "Trust elements and social proof placement",
      "Responsive design planning",
    ],
    outcome: [
      "Premium brand impression",
      "Clean visual hierarchy",
      "Professional user experience",
    ],
  },
  {
    number: "03",
    title: "Development",
    short:
      "We build the website with clean code, responsive layout, animation, and performance focus.",
    icon: Code2,
    duration: "4–10 Days",
    full:
      "After design direction is ready, we develop the website using modern frontend technology. We focus on responsiveness, smooth animations, reusable components, fast loading, and clean code structure.",
    tasks: [
      "Next.js / WordPress development",
      "Reusable component structure",
      "Framer Motion animations",
      "Mobile responsive implementation",
      "SEO-friendly markup",
    ],
    outcome: [
      "Fast website performance",
      "Smooth animated sections",
      "Scalable code structure",
    ],
  },
  {
    number: "04",
    title: "Launch & Growth",
    short:
      "We prepare your website for launch, tracking, SEO, and future marketing growth.",
    icon: Rocket,
    duration: "1–3 Days",
    full:
      "After development, we test the website, optimize key details, connect tracking tools, prepare SEO basics, and guide you for launch. We also suggest improvements for lead generation and long-term growth.",
    tasks: [
      "Final testing and bug fixing",
      "Performance check",
      "SEO basics review",
      "Contact and WhatsApp CTA check",
      "Launch support",
    ],
    outcome: [
      "Launch-ready website",
      "Better tracking setup",
      "Growth improvement roadmap",
    ],
  },
];

export default function Process() {
  const [selected, setSelected] = useState<(typeof steps)[0] | null>(null);

  return (
    <section id="process" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-10%] bottom-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-[140px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
          >
            <Sparkles size={17} />
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            A clear growth process from{" "}
            <span className="gradient-text">idea to launch</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Click each step to see exactly what happens, what we do, and what
            you receive during the project.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.button
                key={step.title}
                type="button"
                onClick={() => setSelected(step)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={26} />
                    </span>

                    <span className="text-5xl font-black text-white/10">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 min-h-[92px] text-sm leading-7 text-slate-400">
                    {step.short}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
                      Timeline
                    </p>
                    <p className="mt-2 text-sm font-black text-white">
                      {step.duration}
                    </p>
                  </div>

                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                    View step details <ArrowRight size={16} />
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-16 rounded-[36px] border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
                Conversion-First Workflow
              </span>

              <h3 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                We do not just design pages — we build client-winning systems.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Every step is planned to improve trust, clarity, performance,
                and lead generation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Clear project strategy",
                "Premium visual direction",
                "Responsive development",
                "Launch-ready optimization",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/60 px-5 py-4 text-sm font-bold text-slate-200"
                >
                  <CheckCircle2 className="shrink-0 text-cyan-300" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
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
              aria-label="Close process modal"
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

              <div className="mb-7 flex items-start gap-4 pr-12">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <selected.icon size={30} />
                </div>

                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                    Step {selected.number} • {selected.duration}
                  </p>
                  <h2 className="text-3xl font-black text-white md:text-5xl">
                    {selected.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {selected.full}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 flex items-center gap-2 text-xl font-black text-white">
                    <ClipboardCheck className="text-cyan-300" />
                    What We Do
                  </h3>

                  <div className="space-y-3">
                    {selected.tasks.map((task) => (
                      <p
                        key={task}
                        className="flex gap-2 text-sm leading-6 text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        {task}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 flex items-center gap-2 text-xl font-black text-white">
                    <Rocket className="text-yellow-300" />
                    What You Receive
                  </h3>

                  <div className="space-y-3">
                    {selected.outcome.map((item) => (
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
                      Ready to start your project?
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Let&apos;s plan your website strategy and build a premium
                      growth-focused online presence.
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