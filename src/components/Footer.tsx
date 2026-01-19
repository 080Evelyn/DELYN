import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-xl">hub</span>
              </div>
              <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                DELYN
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-base max-w-xs mb-8 leading-relaxed">
              The ultimate white-label operational engine. Engineered by Lynog
              Tech to scale your vision.
            </p>
            <div className="flex gap-5">
              <a
                className="text-slate-400 hover:text-primary transition-colors p-2 bg-slate-50 dark:bg-slate-800 rounded-lg"
                href="#"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                className="text-slate-400 hover:text-primary transition-colors p-2 bg-slate-50 dark:bg-slate-800 rounded-lg"
                href="#"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
              Solution
            </h3>
            <ul className="space-y-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Inventory Control
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Staff Portal
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Fleet Hub
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  API Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
              Partners
            </h3>
            <ul className="space-y-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  White-Label Program
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Affiliates
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col items-center gap-6">
          <p className="text-sm font-bold text-foreground dark:text-slate-500 tracking-tight">
            &copy; {new Date().getFullYear()} DELYN.
          </p>
          <p className="text-xs font-bold text-slate-400">
            Proudly powered by Lynog Tech NIG LTD.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
