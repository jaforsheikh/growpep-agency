"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What services does Growpep Agency provide?",
    a: "Growpep provides premium website design and development, SEO optimization, reputation management, social media marketing, analytics tracking, and lead generation systems for businesses that want to grow online.",
  },
  {
    q: "Do you build websites with Next.js or WordPress?",
    a: "Yes. We can build websites using Next.js for modern high-performance projects and WordPress for businesses that need easy content management. The best platform depends on your business goal, budget, and future scalability needs.",
  },
  {
    q: "Will my website be mobile responsive?",
    a: "Yes. Every Growpep website is designed to work smoothly on desktop, tablet, and mobile devices. Responsive design is included in every package.",
  },
  {
    q: "Can you help my website generate leads?",
    a: "Yes. We design websites with conversion-focused sections, strong call-to-actions, WhatsApp buttons, contact forms, trust elements, testimonials, and lead capture flows.",
  },
  {
    q: "Do you provide SEO optimization?",
    a: "Yes. We provide SEO-friendly structure, meta titles, meta descriptions, heading hierarchy, internal linking suggestions, service page optimization, and technical SEO guidance.",
  },
  {
    q: "How long does a website project take?",
    a: "A small website usually takes 5–7 days, a growth-focused business website takes 10–14 days, and a premium multi-page website can take 15–25 days depending on features and revisions.",
  },
  {
    q: "Do you provide content writing for website sections?",
    a: "Yes. We can create professional website copy for hero sections, services, about sections, testimonials, FAQs, CTAs, and landing pages based on your business niche.",
  },
  {
    q: "Can you add WhatsApp and contact form integration?",
    a: "Yes. We can add WhatsApp CTA buttons, email links, contact forms, lead forms, and other conversion tools so visitors can contact your business easily.",
  },
  {
    q: "Do you redesign old websites?",
    a: "Yes. We can redesign old or low-converting websites with a premium UI, better structure, improved messaging, responsive layout, and stronger conversion flow.",
  },
  {
    q: "How do I start a project with Growpep?",
    a: "You can start by contacting us through WhatsApp or the contact CTA. We will discuss your business goal, required pages, design style, features, timeline, and pricing package.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
          >
            <HelpCircle size={17} />
            Frequently Asked Questions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Questions before working with{" "}
            <span className="gradient-text">Growpep?</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Here are the most common questions businesses ask before starting a
            premium website, SEO, or digital growth project.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.04 }}
                className={`overflow-hidden rounded-3xl border transition ${
                  isOpen
                    ? "border-cyan-400/35 bg-cyan-400/[0.06]"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-base font-black text-white md:text-lg">
                    {index + 1}. {faq.q}
                  </span>

                  <ChevronDown
                    className={`shrink-0 text-cyan-300 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/10 px-6 pb-6 pt-4">
                        <p className="text-sm leading-7 text-slate-300">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}