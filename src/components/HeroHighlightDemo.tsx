"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="relative w-full h-screen flex items-center justify-start px-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/60"></div> {/* Dark Overlay */}
      <img
        src="https://c4.wallpaperflare.com/wallpaper/85/415/813/malala-yousafzai-4k-theme-picture-wallpaper-preview.jpg"
        alt="Malala Yousafzai"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Quote Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="relative z-10 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-left"
      >
        "One child, one teacher, one book, and one pen{" "}
        <Highlight className="text-yellow-300"> {/* Highlighted words */}
          can change the world."
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}

