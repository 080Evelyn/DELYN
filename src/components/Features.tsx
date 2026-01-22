import React from "react";
import { motion } from "motion/react";

const Features: React.FC = () => {
  const features = [
    {
      icon: "warehouse",
      title: "Inventory & stock management",
      desc: "Comprehensive tracking and management of inventory levels to ensure optimal stock availability.",
    },
    {
      icon: "badge",
      title: "Staff roles and approval workflows",
      desc: "Define roles and streamline approval processes for staff management and operations.",
    },
    {
      icon: "account_balance",
      title: "Controlled accounting access",
      desc: "Secure and controlled access to accounting functions to maintain financial integrity.",
    },
    {
      icon: "local_shipping",
      title: "Rider & delivery management",
      desc: "Efficient management of delivery personnel and logistics to ensure timely deliveries.",
    },
    {
      icon: "notifications",
      title: "Internal notifications and alerts",
      desc: "Real-time notifications and alerts to keep teams informed of important updates and events.",
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
    <section className="py-24 bg-slate-50" id="features">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
              Uncompromising Power.
            </h2>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
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
