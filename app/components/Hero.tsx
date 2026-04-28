"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      
      {/* 🔵 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/30 blur-[120px]" />
        <div className="absolute right-[10%] top-[10%] h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
          >
            <Sparkles size={16} />
            Premium Digital Growth Agency
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black leading-tight tracking-tight md:text-7xl"
          >
            We Build Websites That{" "}
            <span className="gradient-text">
              Turn Visitors Into Paying Clients
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            Growpep helps businesses grow with premium web design, SEO,
            reputation management, and lead generation systems designed for
            conversion.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="https://wa.me/8801716506412"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/15 px-8 py-4 text-center text-sm font-black text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            {[
              ["50+", "Projects Delivered"],
              ["98%", "Client Satisfaction"],
              ["24/7", "Support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="glass-card rounded-2xl p-5 transition hover:scale-[1.03]"
              >
                <h3 className="text-3xl font-black text-white">{value}</h3>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}