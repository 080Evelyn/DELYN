import React from "react";
import { motion, type Variants } from "motion/react";

const Solutions: React.FC = () => {
  const problems = [
    {
      icon: "inventory_2",
      title: "Poor inventory tracking",
      desc: "Inaccurate stock levels leading to overstocking or stockouts, causing financial losses and operational disruptions.",
      color: "red",
    },
    {
      icon: "group",
      title: "Manual staff approvals",
      desc: "Time-consuming manual processes for staff management and approvals, slowing down operations and increasing errors.",
      color: "purple",
    },
    {
      icon: "local_shipping",
      title: "Disorganized delivery management",
      desc: "Lack of coordination in delivery schedules and tracking, resulting in delays and customer dissatisfaction.",
      color: "primary",
    },
    {
      icon: "visibility",
      title: "Lack of operational transparency",
      desc: "No real-time visibility into business operations, making it difficult to make informed decisions.",
      color: "blue",
    },
    {
      icon: "plug_connect",
      title: "Fragmented internal tools",
      desc: "Multiple disconnected systems causing inefficiencies, data silos, and increased administrative burden.",
      color: "green",
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
    <section className="py-24 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-foreground tracking-tight mb-6">
            Core Problems We Solve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Our Business Operations Management System addresses these critical
            challenges to help businesses manage their internal operations
            efficiently.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-10"
        >
          {problems.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-2.5rem)] group bg-background/50  p-10 rounded-2xl border border-slate-100  hover:border-primary/30 transition-colors"
            >
              <div
                className={`size-14 group-hover:animate-bounce group-hover:rotate-10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${
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
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
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
