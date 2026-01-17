import React from "react";
import { motion } from "motion/react";

const Operators: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black text-slate-900 dark:text-white mb-16 tracking-tight"
        >
          Who Operates on DELYN?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center p-12 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
          >
            <div className="size-20 rounded-2xl bg-primary/10 text-primary mb-8 flex items-center justify-center group-hover:rotate-6 transition-transform">
              <span className="material-symbols-outlined text-4xl">
                forklift
              </span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
              Distribution Titans
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              High-volume centers requiring millisecond-accurate inventory and
              warehouse flow management.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center p-12 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
          >
            <div className="size-20 rounded-2xl bg-primary/10 text-primary mb-8 flex items-center justify-center group-hover:-rotate-6 transition-transform">
              <span className="material-symbols-outlined text-4xl">
                local_shipping
              </span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
              Logistics Leaders
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Fleet owners who demand total visibility from long-haul tracking
              to last-mile delivery confirmation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Operators;
