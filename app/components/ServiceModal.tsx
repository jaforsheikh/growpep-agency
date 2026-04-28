"use client";

import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceModalProps = {
  open: boolean;
  onClose: () => void;
  service: {
    title: string;
    desc: string;
    fullDesc: string;
    icon: React.ElementType;
    benefits: string[];
    deliverables: string[];
    tools: string[];
  } | null;
};

export default function ServiceModal({
  open,
  onClose,
  service,
}: ServiceModalProps) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute inset-0"
            aria-label="Close modal"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[34px] border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl shadow-cyan-400/10 md:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-red-500/20"
            >
              <X size={20} />
            </button>

            <div className="mb-7 flex items-start gap-4 pr-12">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <Icon size={30} />
              </div>

              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                  Growpep Service
                </p>
                <h2 className="text-3xl font-black text-white md:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {service.fullDesc}
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="mb-4 text-lg font-black text-white">
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((item) => (
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
                <h3 className="mb-4 text-lg font-black text-white">
                  Deliverables
                </h3>
                <div className="space-y-3">
                  {service.deliverables.map((item) => (
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

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="mb-4 text-lg font-black text-white">
                  Tools & Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-bold text-cyan-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Want this service for your business?
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Get a free consultation and project estimate from Growpep.
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
  );
}