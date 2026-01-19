import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from "./ui/craft-button";
import { ArrowUpRightIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 z-50 backdrop-blur-md bg-foreground/5 border max-w-(--breakpoint-xl) md:w-[90%] mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-1">
          <div className="flex items-center justify-center size-9 rounded text-primary">
            <span className="material-symbols-outlined text-2xl">hub</span>
          </div>

          <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
            DELYN
          </span>
        </div>
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />
        <div className="flex items-center gap-3">
          <CraftButton>
            <CraftButtonLabel>Request a Demo</CraftButtonLabel>
            <CraftButtonIcon>
              <ArrowUpRightIcon className="size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
            </CraftButtonIcon>
          </CraftButton>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
