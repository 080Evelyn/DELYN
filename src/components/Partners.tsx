
import React from 'react';

const Partners: React.FC = () => {
  const logos = [
    { name: 'ACME', style: 'font-sans tracking-tighter' },
    { name: 'GLOBEX', style: 'font-serif' },
    { name: 'SOV_SYS', style: 'font-mono tracking-widest' },
    { name: 'INITECH', style: 'italic' },
    { name: 'MASSIVE DYNAMIC', style: 'tracking-tight' },
  ];

  return (
    <section className="border-y border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-[#0c141a] py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-black text-slate-400 dark:text-slate-500 mb-10 uppercase tracking-[0.3em]">Built for the modern supply chain</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale contrast-125">
          {logos.map((logo, idx) => (
            <div key={idx} className={`text-2xl font-black text-slate-900 dark:text-white ${logo.style}`}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
