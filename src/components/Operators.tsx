import React from "react";
import { motion } from "motion/react";

const Operators: React.FC = () => {
  return (
    <section className="py-24 bg-foreground/2 dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-900 dark:text-white mb-16 tracking-tight"
        >
          Who DELYN Is Built For
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-12 flex flex-col items-center p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
          >
            <div className="size-20 rounded-2xl bg-primary/10 text-primary mb-8 flex items-center justify-center group-hover:rotate-y-360 transition-transform">
              <span className="material-symbols-outlined text-4xl">
                forklift
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Distribution companies
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Streamline operations for efficient distribution and inventory
              management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-6 flex flex-col items-center p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
          >
            <div className="size-20 rounded-2xl bg-primary/10 text-primary mb-8 flex items-center justify-center group-hover:-rotate-6 transition-transform">
              <span className="material-symbols-outlined text-4xl">
                local_shipping
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Logistics and delivery businesses
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Optimize delivery routes and manage logistics operations
              effectively.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-6 flex flex-col items-center p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
          >
            <div className="size-20 rounded-2xl bg-primary/10 text-primary mb-8 flex items-center justify-center group-hover:rotate-y-360 transition-transform">
              <span className="material-symbols-outlined text-4xl">store</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Wholesale businesses
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Manage wholesale operations with comprehensive inventory and staff
              control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-4 flex flex-col items-center p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
          >
            <div className="size-20 rounded-2xl bg-primary/10 text-primary mb-8 flex items-center justify-center group-hover:-rotate-6 transition-transform">
              <span className="material-symbols-outlined text-4xl">
                business
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Corporate supply companies
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Enhance supply chain management for corporate environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-8 flex flex-col items-center p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
          >
            <div className="size-20 rounded-2xl bg-primary/10 text-primary mb-8 flex items-center justify-center group-hover:rotate-y-360 transition-transform">
              <span className="material-symbols-outlined text-4xl">
                inventory
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Businesses replacing fragmented internal tools
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Ideal for companies tired of juggling multiple systems and ready
              to run inventory, people, communication, and deliveries from one
              platform they fully own.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Operators;
