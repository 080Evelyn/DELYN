import { Badge } from "@/components/ui/badge";
import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from "./ui/craft-button";
import { ArrowUpRightIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import { motion } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <BackgroundPattern />
      <motion.div
        className="text-center max-w-3xl z-10"
        variants={itemVariants}
      >
        <motion.div variants={itemVariants}>
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <div>
              Meet Delyn — Own Your Software
              <ArrowUpRight className="ml-1 size-4" />
            </div>
          </Badge>
        </motion.div>
        <motion.h1
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter"
          variants={itemVariants}
        >
          Launch Your Own Branded Business Software
        </motion.h1>
        <motion.p
          className="mt-6 md:text-lg text-foreground/80"
          variants={itemVariants}
        >
          Delyn provides a ready-made web and mobile application you can fully
          brand, customize, and run as your own product. Manage inventory,
          merchants, riders, communication, and deliveries from one platform.
          Stop managing chaos. Start scaling operations with Delyn.
        </motion.p>
        <motion.div
          className="mt-10 flex items-center justify-center gap-4"
          variants={itemVariants}
        >
          <CraftButton size={"lg"} className="py-6">
            <CraftButtonLabel>Request a Demo</CraftButtonLabel>
            <CraftButtonIcon>
              <ArrowUpRightIcon className="size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45" />
            </CraftButtonIcon>
          </CraftButton>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full z-20 max-w-(--breakpoint-lg) mx-auto aspect-video md:aspect-auto bg-accent p-5 md:p-40 rounded-full"
        variants={itemVariants}
      >
        <img
          src="/screen.png"
          alt=""
          className="w-full h-full rounded-xl object-contain"
        />
      </motion.div>
    </motion.section>
  );
}
