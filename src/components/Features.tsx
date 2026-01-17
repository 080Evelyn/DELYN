import React from "react";
import { motion } from "motion/react";

const Features: React.FC = () => {
  const features = [
    {
      icon: "warehouse",
      title: "Smart Inventory",
      desc: "Predictive stock levels and automated procurement based on historical data.",
    },
    {
      icon: "badge",
      title: "HR Engine",
      desc: "Comprehensive staff monitoring with biometric integration and payroll automation.",
    },
    {
      icon: "account_balance",
      title: "Accounting",
      desc: "Enterprise-grade financial reporting with real-time tax and expense tracking.",
    },
    {
      icon: "local_shipping",
      title: "Fleet Matrix",
      desc: "GPS tracking, maintenance logs, and electronic Proof of Delivery (ePOD).",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0d161b]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-primary font-black tracking-[0.2em] text-sm uppercase">
              The DELYN Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 tracking-tight">
              Uncompromising Power.
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-lg text-primary font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            Full Capabilities{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </motion.button>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 hover:bg-primary transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/20 border border-slate-100 dark:border-slate-800"
            >
              <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-white/80">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
