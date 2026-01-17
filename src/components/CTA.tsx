import React from "react";
import { motion } from "motion/react";

const CTA: React.FC = () => {
  return (
    <section className="py-28 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,146,236,0.15)_0%,transparent_70%)] pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
          Ready for the DELYN Shift?
        </h2>
        <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Don't get left behind by obsolete processes. Join the 500+ enterprises
          redefining operational excellence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-16 px-12 rounded-xl bg-primary hover:bg-blue-500 text-white font-black text-xl transition-all shadow-[0_15px_30px_-5px_rgba(19,146,236,0.4)]"
          >
            Request a Demo Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-16 px-10 rounded-xl bg-transparent border-2 border-slate-700 hover:bg-slate-800 text-white font-bold text-lg transition-colors"
          >
            Speak with an Expert
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
