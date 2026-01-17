// import React, { useState } from "react";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-[90%] mx-auto mt-5 bg-white/95 rounded-full  backdrop-blur-md border-b border-slate-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-15">
//           <div className="flex items-center gap-2">
//             <div className="flex items-center justify-center size-9 rounded bg-primary/10 text-primary">
//               <span className="material-symbols-outlined text-2xl">hub</span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
//                 DELYN
//               </span>
//             </div>
//           </div>

//           <nav className="hidden md:flex items-center gap-10">
//             <a
//               className="text-sm font-semibold text-slate-600 hover:text-primary  transition-colors"
//               href="#features"
//             >
//               Features
//             </a>
//             <a
//               className="text-sm font-semibold text-slate-600 hover:text-primary  transition-colors"
//               href="#solutions"
//             >
//               Solutions
//             </a>
//             <a
//               className="text-sm font-semibold text-slate-600 hover:text-primary  transition-colors"
//               href="#whitelabel"
//             >
//               White-Label
//             </a>
//           </nav>

//           <div className="flex items-center gap-4">
//             <div className="hidden sm:flex items-center gap-6 mr-4">
//               <button className="flex items-center justify-center h-11 px-6 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-black transition-all shadow-[0_4px_14px_0_rgba(19,146,236,0.39)] hover:shadow-[0_6px_20px_rgba(19,146,236,0.23)] active:scale-95">
//                 Request a Demo
//               </button>
//             </div>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden flex items-center justify-center size-10 rounded-lg text-slate-600  hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//             >
//               <span className="material-symbols-outlined">
//                 {isMenuOpen ? "close" : "menu"}
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#101a22] border-b border-slate-200 dark:border-slate-800 py-6 px-4 flex flex-col gap-4 shadow-xl">
//           <a
//             onClick={() => setIsMenuOpen(false)}
//             className="text-lg font-bold text-slate-900 "
//             href="#features"
//           >
//             Features
//           </a>
//           <a
//             onClick={() => setIsMenuOpen(false)}
//             className="text-lg font-bold text-slate-900 "
//             href="#solutions"
//           >
//             Solutions
//           </a>
//           <a
//             onClick={() => setIsMenuOpen(false)}
//             className="text-lg font-bold text-slate-900 "
//             href="#whitelabel"
//           >
//             White-Label
//           </a>
//           <hr className="border-slate-100" />
//           <div className="flex flex-col gap-3">
//             <button
//               onClick={() => setIsMenuOpen(false)}
//               className="w-full py-4 rounded-xl bg-primary text-white font-black"
//             >
//               Request a Demo
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
