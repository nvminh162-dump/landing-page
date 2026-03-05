/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { FeatureShowcase } from "@/components/feature-showcase";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white p-5">
      {/* ── Hero Card ── */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-black text-white min-h-[90vh] flex flex-col">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 grayscale"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260221_085953_8463b46e-ba85-4bb7-912a-1feaf346e970.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navigation - now relative/absolute within the card */}
        <nav className="relative z-50 flex items-center justify-between px-10 py-8">
          <div className="text-xl font-bold tracking-tighter italic">
            NVMINH162
          </div>

          <div className="hidden md:flex items-center space-x-12 text-[11px] uppercase tracking-[0.2em] font-medium opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Build
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              How it works
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Pricing
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Support
            </a>
          </div>

          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-medium opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <span>Cart</span>
            <ShoppingBag size={14} />
          </div>
        </nav>

        {/* Hero Content */}
        <main className="relative flex-1 flex flex-col items-center justify-center px-6">
          {/* Main Title Section */}
          <div className="text-center z-10 mt-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-6xl font-light italic tracking-tight mb-[-5px] md:mb-[-10px] opacity-80"
            >
              Smart Websites
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-extrabold uppercase tracking-tighter mb-6"
            >
              By NVMINH162
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl mx-auto text-sm md:text-base font-medium tracking-wide opacity-60 leading-relaxed mb-10"
            >
              Magic websites, built fast. We combine high-performance
              engineering with generative intelligence to create digital
              experiences that feel like the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="px-10 py-4 rounded-full border border-white bg-white text-black text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-transparent hover:text-white transition-all duration-300">
                Start Building
              </button>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-12 left-8 md:left-16 max-w-xs z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-base md:text-lg font-medium leading-tight mb-6 italic opacity-70">
                We make the internet pretty. AI does the hard stuff. You just
                sit back and relax.
              </p>
              <a
                href="#"
                className="group flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-bold text-white hover:opacity-70 transition-opacity"
              >
                <span>Explore More</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          </div>
        </main>
      </div>
      {/* end Hero Card */}

      {/* Feature Showcase Section */}
      <FeatureShowcase />

      {/* Logo Cloud Section */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-[13px] uppercase tracking-[0.25em] font-semibold opacity-40">
            Trusted by the leaders of the industry
          </h2>
          <LogoCloud logos={logos} className="dark:brightness-0 invert" />
          <div className="mx-auto mt-10 h-px max-w-sm bg-black/5" />
        </div>
      </section>

      {/* ADHD-friendly "Why us" section (Minimalist) */}
      <footer className="px-10 py-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 opacity-80">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            Status
          </p>
          <p className="text-xs font-mono font-medium">System: Optimized</p>
        </div>
        <div className="space-y-1 text-right">
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            Location
          </p>
          <p className="text-xs font-mono font-medium">Cloud: Everywhere</p>
        </div>
      </footer>
    </div>
  );
}

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];
