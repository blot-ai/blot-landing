"use client"

import Image from "next/image"
import HeroHighlightDemo from "@/components/hero-highlight-demo"
import FeaturesSectionDemo from "@/components/ui/features-section-demo-3"
import TypewriterEffectSmoothDemo from "@/components/typewriter-effect-demo-1"
import { useEffect } from "react"
export default function Home() {
    useEffect(() => {
        // @ts-ignore
        Tally.loadEmbeds()
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <HeroHighlightDemo />
            <FeaturesSectionDemo />
            <TypewriterEffectSmoothDemo />
        </div>
    )
}
