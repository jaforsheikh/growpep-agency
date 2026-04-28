"use client";

import Link from "next/link";
import {
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
} from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Design", href: "#services" },
    { label: "SEO Optimization", href: "#services" },
    { label: "Reputation Management", href: "#services" },
    { label: "Lead Generation", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "WhatsApp", href: "https://wa.me/8801716506412" },
    { label: "Email", href: "mailto:jaforsheikh258@gmail.com" },
  ],
};

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Globe,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Globe,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="container-custom py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <Rocket size={22} />
              </span>
              <span className="text-xl font-bold text-white">
                Grow<span className="text-cyan-400">pep</span>
              </span>
            </Link>

            <p className="mt-4 text-sm text-slate-400">
              Premium agency website for high-converting clients.
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-cyan-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-white font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-cyan-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2 lg:grid-cols-4">
          <a href="mailto:jaforsheikh258@gmail.com" className="flex gap-2 text-slate-400">
            <Mail size={16} /> Email
          </a>

          <a href="tel:+8801716506412" className="flex gap-2 text-slate-400">
            <Phone size={16} /> Phone
          </a>

          <a href="https://wa.me/8801716506412" className="flex gap-2 text-slate-400">
            <MessageCircle size={16} /> WhatsApp
          </a>

          <div className="flex gap-2 text-slate-400">
            <MapPin size={16} /> Bangladesh
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-500">
          © {new Date().getFullYear()} Growpep. All rights reserved.
        </div>
      </div>
    </footer>
  );
}