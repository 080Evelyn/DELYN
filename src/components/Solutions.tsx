import React from "react";
import { motion, type Variants } from "motion/react";

const Solutions: React.FC = () => {
  const frictions = [
    {
      icon: "inventory_2",
      title: "Inventory Shrinkage",
      desc: 'Eliminate the "lost stock" mystery. Automated tracking reduces inventory variance by up to 35% within 90 days of implementation.',
      color: "red",
    },
    {
      icon: "route",
      title: "Delivery Delays",
      desc: "AI-driven route optimization ensures your fleet is never idle. Cut average delivery times by 22% and fuel costs by 15%.",
      color: "primary",
    },
    {
      icon: "engineering",
      title: "Labor Inefficiency",
      desc: "Gain objective visibility into shift performance. Align your workforce with real-time demand rather than guesswork.",
      color: "purple",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Solve Core Operational Friction
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium">
            Manual workflows are the silent killers of growth. DELYN replaces
            fragmented spreadsheets with an intelligent, unified command center.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {frictions.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800/40 p-10 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 transition-colors group"
            >
              <div
                className={`size-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${
                  f.color === "red"
                    ? "bg-red-500/10 text-red-500"
                    : f.color === "purple"
                      ? "bg-purple-500/10 text-purple-500"
                      : "bg-primary/10 text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-4xl">
                  {f.icon}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                {f.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
