"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Globe2,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import ServiceModal from "./ServiceModal";

const services = [
  {
    title: "Website Design & Development",
    desc: "Premium websites built to convert visitors into paying clients.",
    fullDesc:
      "We design and develop fast, modern, responsive websites that look premium and convert visitors into leads. Every website is built with clean structure, conversion-focused copy, strong CTAs, SEO foundation, and smooth user experience.",
    icon: Globe2,
    benefits: [
      "Premium first impression for your brand",
      "Fast loading and mobile responsive layout",
      "Better lead generation with clear CTA flow",
      "SEO-friendly structure from the beginning",
    ],
    deliverables: [
      "Custom homepage and inner pages",
      "Responsive design for all devices",
      "Contact form and WhatsApp CTA",
      "Performance and basic SEO setup",
    ],
    tools: ["Next.js", "WordPress", "Tailwind", "Framer Motion", "SEO"],
  },
  {
    title: "SEO Optimization",
    desc: "Rank better on Google and attract high-intent organic traffic.",
    fullDesc:
      "Our SEO service helps businesses improve visibility, fix technical issues, optimize service pages, and build a strong content structure for long-term growth. We focus on search intent, keyword strategy, on-page SEO, and technical SEO.",
    icon: Search,
    benefits: [
      "Improve Google visibility",
      "Attract targeted business leads",
      "Optimize pages for buyer intent keywords",
      "Fix technical SEO problems",
    ],
    deliverables: [
      "Keyword research and content map",
      "On-page SEO optimization",
      "Technical SEO checklist",
      "Meta title, description, headings, schema plan",
    ],
    tools: ["Google Search Console", "Ahrefs", "Semrush", "Screaming Frog"],
  },
  {
    title: "Reputation Management",
    desc: "Build trust with review strategy, response systems, and monitoring.",
    fullDesc:
      "We help businesses manage online reputation by improving review profiles, responding professionally to feedback, monitoring negative reviews, and building trust signals across platforms.",
    icon: ShieldCheck,
    benefits: [
      "Increase customer trust before purchase",
      "Protect brand image from negative reviews",
      "Improve review response quality",
      "Build stronger local business credibility",
    ],
    deliverables: [
      "Review response framework",
      "Reputation audit",
      "Trust badge and proof strategy",
      "Negative review handling plan",
    ],
    tools: ["Google Reviews", "Facebook", "Trustpilot", "Local SEO"],
  },
  {
    title: "Social Media Marketing",
    desc: "Grow brand awareness with strategic content and campaign planning.",
    fullDesc:
      "We create social media strategies that help brands stay active, look professional, and build audience trust. From content planning to campaign ideas, we focus on consistency and conversion.",
    icon: Megaphone,
    benefits: [
      "Professional brand presence",
      "Consistent content publishing",
      "More engagement and trust",
      "Better campaign direction",
    ],
    deliverables: [
      "Content calendar",
      "Post design direction",
      "Caption and hashtag strategy",
      "Campaign planning",
    ],
    tools: ["Facebook", "Instagram", "LinkedIn", "Canva", "Meta Suite"],
  },
  {
    title: "Analytics & Tracking",
    desc: "Understand traffic, leads, conversion, and user behavior clearly.",
    fullDesc:
      "We set up tracking systems so businesses can understand what is working and what is wasting money. Analytics helps you measure visitors, leads, conversions, and marketing performance.",
    icon: BarChart3,
    benefits: [
      "Know where leads come from",
      "Track website conversion performance",
      "Improve marketing decisions",
      "Find weak points in funnel",
    ],
    deliverables: [
      "Google Analytics setup",
      "Conversion tracking",
      "Event tracking plan",
      "Monthly performance report structure",
    ],
    tools: ["GA4", "Google Tag Manager", "Search Console", "Looker Studio"],
  },
  {
    title: "Lead Generation Systems",
    desc: "Build funnels that capture leads and turn traffic into inquiries.",
    fullDesc:
      "We create lead generation systems with landing pages, forms, WhatsApp CTAs, trust elements, and follow-up strategy. The goal is not just traffic — the goal is qualified leads.",
    icon: Users,
    benefits: [
      "Turn visitors into real inquiries",
      "Increase conversion rate",
      "Capture leads from multiple channels",
      "Improve client acquisition process",
    ],
    deliverables: [
      "Landing page structure",
      "Lead capture form",
      "WhatsApp CTA integration",
      "CTA and funnel optimization",
    ],
    tools: ["Next.js", "WordPress", "Forms", "CRM", "WhatsApp"],
  },
];

export default function Services() {
  const [selected, setSelected] = useState<(typeof services)[0] | null>(null);

  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
          >
            <Sparkles size={17} />
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Premium digital services built to{" "}
            <span className="gradient-text">grow your business</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Click any service card to see detailed strategy, deliverables,
            tools, and how Growpep can help your business grow.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setSelected(service)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative min-h-[300px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-left shadow-2xl shadow-black/20 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
              >
                <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={26} />
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="mt-7 text-sm font-black text-cyan-300">
                    Click to view details →
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <ServiceModal
        open={!!selected}
        service={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}