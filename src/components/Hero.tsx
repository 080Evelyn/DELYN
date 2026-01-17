import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
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
          <Button size="lg" className="rounded-full text-base">
            Request a Demo <ArrowUpRight className="h-5! w-5!" />
          </Button>
        </div>
      </div>
      <div className="w-full max-w-(--breakpoint-xl) mx-auto aspect-video bg-accent rounded-xl" />
    </div>
  );
}
