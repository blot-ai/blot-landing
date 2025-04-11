import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    images: {
        domains: ["images.unsplash.com", "assets.aceternity.com"],
    },
}

export default nextConfig
