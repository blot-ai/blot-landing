"use client"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { IconBrandGithub } from "@tabler/icons-react"

export default function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Ready",
        },
        {
            text: "to",
        },
        {
            text: "transform",
        },
        {
            text: "your",
        },
        {
            text: "writing",
        },
        {
            text: "experience?",
            className: "text-blue-500 dark:text-blue-500",
        },
    ]
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base text-center mx-auto px-8 py-8 max-w-xl">
                At Blot, we're building the writing app we wish existed -
                simple, smart, and genuinely helpful. Our open source project is
                ready for contributions and ideas, so if there's something you'd
                like to add or improve, we welcome your input.
            </p>
            <a
                href="https://github.com/lakshith-403/blot"
                target="_blank"
                className="text-white cursor-pointer"
            >
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 cursor-pointer">
                    <button className="w-52 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm cursor-pointer flex items-center justify-center gap-2">
                        <IconBrandGithub className="h-4 w-4" />
                        View on GitHub
                    </button>
                </div>
            </a>

            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base text-center mx-auto px-8 py-8">
                Contact Us at{" "}
                <a
                    href="mailto:hello@useblot.com"
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                >
                    hello@useblot.com
                </a>
            </p>
        </div>
    )
}
