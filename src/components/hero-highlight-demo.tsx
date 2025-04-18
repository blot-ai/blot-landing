"use client"
import { motion } from "motion/react"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { IconBrandGithub } from "@tabler/icons-react"

export default function HeroHighlightDemo() {
    return (
        <HeroHighlight>
            <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto px-4">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-white leading-tight text-center"
                >
                    Elevate Your Writing.{" "}
                    <Highlight className="text-black dark:text-white">
                        Effortlessly.
                    </Highlight>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 text-center max-w-2xl"
                >
                    AI assistance that understands your voice, style, and
                    intent—without getting in your way.
                </motion.p>

                <a
                    href="https://github.com/lakshith-403/blot"
                    target="_blank"
                    className="text-white cursor-pointer"
                >
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="mt-4 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg transition-colors cursor-pointer flex items-center gap-2"
                    >
                        <IconBrandGithub className="h-5 w-5" />
                        View on GitHub
                    </motion.button>
                </a>
            </div>
        </HeroHighlight>
    )
}
