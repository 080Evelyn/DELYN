import React from "react";
import { motion } from "motion/react";

const WhiteLabel: React.FC = () => {
  const capabilities = [
    { icon: "palette", label: "Custom Themes" },
    { icon: "language", label: "Custom Domains" },
    { icon: "smartphone", label: "Branded Apps" },
    { icon: "mail", label: "White-label Email" },
  ];

  return (
    <section
      className="py-32 bg-primary/5 relative overflow-hidden"
      id="whitelabel"
    >
      <div className="absolute -top-48 -right-48 size-150 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <div className="relative p-1 bg-linear-to-br from-primary/30 via-white to-primary/20 rounded-3xl shadow-2xl">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="aspect-video w-full relative bg-slate-100 dark:bg-slate-950 p-8 flex flex-col justify-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="glass-effect p-8 rounded-2xl flex flex-col items-center gap-6 border-slate-200 dark:border-slate-800"
                  >
                    <div className="size-20 rounded-full border-4 border-dashed border-primary/40 flex items-center justify-center text-primary/40">
                      <span className="material-symbols-outlined text-3xl">
                        add_photo_alternate
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-900 dark:text-white font-black text-xl mb-1">
                        Your Identity
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Upload your logo to rebrand the entire UI. It is that
                        easy
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="size-6 rounded-full bg-[#1392ec]"></div>
                      <div className="size-6 rounded-full bg-[#000000]"></div>
                      <div className="size-6 rounded-full bg-[#ff4444]"></div>
                      <div className="size-6 rounded-full border border-slate-300"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
              Fully Branded Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-medium">
              Your business gets a fully branded version of the system under
              your company name. The software is licensed per business and
              customized with your branding.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {capabilities.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg font-black">
                      {c.icon}
                    </span>
                  </div>
                  <span className="text-slate-800 dark:text-slate-200 font-bold">
                    {c.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabel;
