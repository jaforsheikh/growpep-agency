"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Rocket, ShieldCheck, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[42px] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center md:p-14"
        >
          <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-blue-600/25 blur-[120px]" />
          <div className="absolute right-[-10%] bottom-[-20%] h-80 w-80 rounded-full bg-yellow-400/15 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
              <Sparkles size={17} />
              Ready To Grow?
            </span>

            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Let&apos;s build a premium website that{" "}
              <span className="gradient-text">brings real clients</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Get a conversion-focused website, SEO-ready structure, trust-building sections,
              and a lead generation flow designed for serious business growth.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/8801716506412"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
              >
                Message on WhatsApp
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:jaforsheikh258@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-black text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Send Email
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Free Consultation", MessageCircle],
                ["Premium Strategy", Rocket],
                ["Trust-Focused Design", ShieldCheck],
              ].map(([label, Icon]) => {
                const IconComponent = Icon as React.ElementType;

                return (
                  <div
                    key={label as string}
                    className="rounded-2xl border border-white/10 bg-[#020617]/50 p-4"
                  >
                    <IconComponent className="mx-auto mb-3 text-cyan-300" />
                    <p className="text-sm font-bold text-slate-200">
                      {label as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}