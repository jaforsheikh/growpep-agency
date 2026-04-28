"use client";

import { motion } from "framer-motion";
import { Building2, BriefcaseBusiness, Hotel, ShoppingBag, Store, Utensils } from "lucide-react";

const items = [
  { name: "Local Business", icon: Store },
  { name: "Restaurants", icon: Utensils },
  { name: "Hotels", icon: Hotel },
  { name: "eCommerce", icon: ShoppingBag },
  { name: "Startups", icon: BriefcaseBusiness },
  { name: "Agencies", icon: Building2 },
];

export default function TrustedBy() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-10">
      <div className="container-custom">
        <p className="mb-7 text-center text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
          Trusted growth partner for modern businesses
        </p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
              >
                <Icon size={19} className="text-cyan-300" />
                <span className="text-sm font-black">{item.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}