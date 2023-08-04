/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["novi.kupujemprodajem.com", "images.kupujemprodajem.com"]
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
