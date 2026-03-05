import { motion } from "framer-motion";
import iphoneImg from "@/assets/iphone.png";
import { CreditCard, Bell, Zap, Shield } from "lucide-react";

export function FeatureShowcase() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-32 px-6 overflow-hidden bg-transparent">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side: Mockup Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {/* Main Mockup Image (Pre-composed with rotation, card, and glows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-2xl"
          >
            <img
              src={iphoneImg}
              alt="Feature Mockup"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Empowering your <br />
              <span className="italic font-light">digital presence</span> today
            </h2>
            <p className="text-lg text-zinc-500 max-w-lg leading-relaxed font-medium">
              Manage your AI-built websites directly from your mobile device.
              High-performance engineering meets intuitive mobile control.
            </p>
          </motion.div>

          {/* Feature List */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group flex gap-4 items-start"
            >
              <div className="mt-1 p-2 bg-zinc-900 rounded-lg text-white">
                <Zap size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1 flex items-center gap-2">
                  Real-time analytics{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Monitor visitor engagement and performance metrics as they
                  happen. Never miss a beat in your digital growth journey.
                </p>
              </div>
            </motion.div>

            <div className="h-px w-full bg-zinc-200" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm"
              >
                <div className="p-3 bg-zinc-100 rounded-xl">
                  <Shield size={20} className="text-zinc-900" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">
                    Safe & Secure
                  </h4>
                  <p className="text-zinc-500 text-xs">Enterprise encryption</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm"
              >
                <div className="p-3 bg-zinc-100 rounded-xl">
                  <Bell size={20} className="text-zinc-900" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">
                    Instant Alerts
                  </h4>
                  <p className="text-zinc-500 text-xs">
                    Critical notifications
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
