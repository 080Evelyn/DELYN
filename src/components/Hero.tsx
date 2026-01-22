import { Badge } from "@/components/ui/badge";
import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from "./ui/craft-button";
import { ArrowUpRightIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";

export default function Hero() {
  return (
    <div className="min-h-screen  w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
      <BackgroundPattern />
      <div className="text-center max-w-3xl z-10">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <div>
            Meet Delyn <ArrowUpRight className="ml-1 size-4" />
          </div>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Launch Your Branded Busisness Software
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          We build custom software for your business in your business name,
          tailored to your specific needs and designed to help you achieve your
          goals. Stop managing chaos. Start scaling operations with Delyn.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <CraftButton size={"lg"} className="py-6">
            <CraftButtonLabel>Request a Demo</CraftButtonLabel>
            <CraftButtonIcon>
              <ArrowUpRightIcon className="size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
            </CraftButtonIcon>
          </CraftButton>
        </div>
      </div>
      <div className="w-full z-20 max-w-(--breakpoint-lg) mx-auto aspect-video md:aspect-auto bg-accent p-5 md:p-40 rounded-full">
        <img
          src="/screen.png"
          alt=""
          className="w-full h-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
