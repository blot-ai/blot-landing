"use client"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
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
                At Blot, we’re building the writing app we wish existed -
                simple, smart, and genuinely helpful. We’re always open to
                ideas, so if there’s something you’d like us to add, just let us
                know and we’ll work it in.
            </p>
            <a
                href="#tally-open=mJBRVz&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"
                className="text-white cursor-pointer"
            >
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 cursor-pointer">
                    <button className="w-52 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm cursor-pointer">
                        Join the Waitlist Now
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
