import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { NavMenu } from "@/components/nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <div className="flex items-center gap-1">
          <div className="flex items-center justify-center size-9 rounded text-primary">
            <span className="material-symbols-outlined text-2xl">hub</span>
          </div>

          <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
            DELYN
          </span>
        </div>
        <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
      </SheetContent>
    </Sheet>
  );
};
